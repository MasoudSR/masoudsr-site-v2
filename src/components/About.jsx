import Skills from "@/components/Skills";

function About() {
    return (
        <div id='about' className="pt-26 lg:pt-56">
            <div className='flex flex-col lg:flex-row max-w-screen-lg m-auto gap-6 lg:gap-0'>
                <div className="m-4 px-2 rounded-lg lg:w-[50%] flex flex-col justify-center items-center">
                    <h2 className='text-5xl font-bold  text-white drop-shadow-primary drop-shadow-sm text-center'>
                        <div className="lg:-translate-x-20">
                            AmirMasoud
                        </div>
                        <div className="lg:translate-x-20">
                            SepehrRad
                        </div>
                    </h2>
                    <h3 className='text-xl mt-5 lg:mt-10 rounded-full drop-shadow-lg drop-shadow-primary/50 bg-primary text-white w-fit p-1 px-5'>
                        MSc in Software Engineering
                    </h3>
                </div>
                <Skills />
            </div>
        </div>
    )
}

export default About