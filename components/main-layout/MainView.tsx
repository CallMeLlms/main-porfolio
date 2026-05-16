import ProjectColumnDropdown from "../ui/ProjectColumnDropdown"

export default function MainView() {
    return (
        <main>
            <section className="flex justify-center items-center min-h-screen">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At necessitatibus unde magni dolor hic saepe dolores, enim dolore possimus quis debitis voluptatum aliquid optio deserunt quibusdam veritatis, veniam cumque a?</p>
            </section>
            <section className="flex flex-col justify-center items-center min-h-screen p-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quae praesentium rerum laudantium cum unde cumque. Temporibus obcaecati earum dolor perferendis hic, debitis voluptate corrupti quidem, quasi id, ex facilis.</p>
                {Array.from({length : 5}, (_, idx) => (
                    <div
                    className="flex mt-2 w-full"
                    key={idx}
                    >
                        <ProjectColumnDropdown/>
                    </div>
                ))}
                
            </section>
        </main>
    )
}