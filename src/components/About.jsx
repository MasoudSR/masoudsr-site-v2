import Skills from "@/components/Skills";

function About() {
    return (
        <div className='text-center' id='about'>
            <div className="m-4 px-2 py-8 rounded-lg -translate-y-[30%] bg-white drop-shadow-lg drop-shadow-primary/50 border border-primary">
                <h2 className='text-3xl font-bold  text-white drop-shadow-primary drop-shadow-sm'>
                    AmirMasoud SepehrRad
                </h2>
                <h3 className='text-xl'>
                    MSc in Software Engineering
                </h3>
            </div>
            <Skills />
        </div>
    )
}

export default About