"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor-interactive]';

function setCursorTransform(
  element: HTMLDivElement,
  x: number,
  y: number,
  scale = 1
) {
  element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const root = document.documentElement;

    let animationFrame = 0;
    let isVisible = false;
    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let ringScale = 1;

    const setVisibility = (visible: boolean) => {
      dot.dataset.visible = String(visible);
      ring.dataset.visible = String(visible);
    };

    const setInteractiveState = (target: EventTarget | null) => {
      const isInteractive =
        target instanceof Element &&
        Boolean(target.closest(INTERACTIVE_SELECTOR));

      ringScale = isInteractive ? 1.75 : 1;
      dot.dataset.active = String(isInteractive);
      ring.dataset.active = String(isInteractive);
    };

    const animateRing = () => {
      if (reducedMotion) {
        ringX = targetX;
        ringY = targetY;
      } else {
        ringX += (targetX - ringX) * 0.18;
        ringY += (targetY - ringY) * 0.18;
      }

      setCursorTransform(ring, ringX, ringY, ringScale);
      animationFrame = window.requestAnimationFrame(animateRing);
    };

    const showCursor = () => {
      if (isVisible) {
        return;
      }

      isVisible = true;
      ringX = targetX;
      ringY = targetY;
      setVisibility(true);
      animationFrame = window.requestAnimationFrame(animateRing);
    };

    const hideCursor = () => {
      isVisible = false;
      setVisibility(false);
      window.cancelAnimationFrame(animationFrame);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;

      setCursorTransform(dot, targetX, targetY);
      setInteractiveState(event.target);
      showCursor();
    };

    const handlePointerOver = (event: PointerEvent) => {
      setInteractiveState(event.target);
    };

    root.classList.add("has-custom-cursor");
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerover", handlePointerOver, {
      passive: true,
    });
    document.addEventListener("pointerleave", hideCursor);
    window.addEventListener("blur", hideCursor);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="custom-cursor custom-cursor-ring"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor custom-cursor-dot"
      />
    </>
  );
}
