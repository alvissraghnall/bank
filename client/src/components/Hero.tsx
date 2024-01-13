import whiteWaveImg from "../assets/white-wave-1.png";

const Hero = () => {
  return (
    <div className="mx-auto space-y-8 min-h-[100svh] bg-[url(/hero.jpg)] bg-center bg-no-repeat pt-28 max-lg:pt-20 max-md:pt-14 relative bg-cover z-[1]">
        <div className="py-48 max-lg:pb-64 pb-96 before:bg-[#14233c] before:absolute before:top-0 before:left-0 before:w-full before:h-full mix-blend-multiply -z-10 opacity-75 overflow-hidden">

            {
                [...Array(2).keys()].map((val, idx) => (
                    <div className={`absolute left-0 z-[1] w-full ${idx === 0 ? 'bottom-0' : 'bottom-4'} ${idx === 1 && 'opacity-20'}`}>
                        <img src={whiteWaveImg} alt="" className="h-auto max-w-full select-none" />
                    </div>
                ))
            }

            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center mx-6">
                    <div className="text-center">
                        <h2 className="max-lg:text-5xl text-6xl font-exo text-white font-semibold">Welcome to the Largest E-banking System</h2>
                        <p></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero;