import Skills from "@/components/Skills";

function About() {
    return (
        <div id='about' className="pt-26 lg:pt-56">
            <div className='flex flex-col lg:flex-row max-w-screen-lg m-auto gap-24 lg:gap-0'>
                <div className="m-4 lg:w-[50%] flex flex-col justify-center items-center text-primary drop-shadow-primary/40 drop-shadow-2xl">
                    <h2 className='text-5xl font-bold py-4 text-center border-y-4 lg:border-none'>
                        <div className="lg:-translate-x-20 lg:underline underline-offset-1">
                            AmirMasoud
                        </div>
                        <div className="lg:translate-x-20 lg:overline">
                            SepehrRad
                        </div>
                    </h2>
                    <h3 className='text-xl py-2 lg:mt-10 text-center p-1 px-5'>
                        MSc in Software Engineering
                    </h3>
                </div>
                <Skills />
            </div>
        </div>
    )
}

export default About