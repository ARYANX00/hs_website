import hero from '../../public/images/hero.png'
import htf from '../../public/images/htf.png'
import Register_now from '../../public/images/Register_now.png'
import aboutus from '../../public/images/aboutus.png'
import line from '../../public/images/line.png'

export default function Hero() {
    return (
      <>
        <div className="items-center justify-center">
            <img src={hero} className="absolute w-full object-cover" alt="hero" />
            <img src={htf} className="pt-40 object-cover relative w-full" alt="htf" />
            <img src={Register_now} className="mx-auto relative mt-[-10%]" alt="Register_now" />
            <p className="mx-auto relative text-center text-[#FFFFFF] leading-loose text-4xl font-kurye">Register Now</p>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="lg:p-32 lg:mx-32 relative mx-auto items-center justify-center text-center">
            <p className="font-konstarica lg:leading-[14rem] sm:text-[6rem] lg:text-[380px] text-left text-[#ECE8E1] whitespace-break-spaces">about</p>
            <span className="font-kurye text-4xl text-[#ECE8E1]"> All you want to know</span><br/>
            <h1 className="font-konstarica leading-[14rem] text-[380px] text-left text-[#ECE8E1] whitespace-break-spaces">us</h1>

            <div className="py-12 flex items-center justify-center grid gap-4 grid-cols-6 text-[#ECE8E1]">
                <div>
                    <img src={line} className="mx-auto relative" alt="aboutus" />
                </div>
                <div className="col-span-3">
                    <p className="text-left font-kurye text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </p>
                </div>
                <div className="col-span-2">
                    <img src={aboutus} className="mx-auto relative w-4/12" alt="aboutus" />
                </div>
            </div>
        </div>

        
      </>
    );
  }
