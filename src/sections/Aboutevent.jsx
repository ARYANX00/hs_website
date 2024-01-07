import diamond_bg from "../../public/images/diamond_bg.png";
import timeline from "../../public/images/timeline.png";
 //import commas from "../../public/images/commas.png";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Aboutevent() {
  const slides = [
    {
      url: "/images/day1.png",
    },
    {
      url: "/images/day2.png",
    },
    {
      url: "/images/day3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="relative">
        <img
          src={diamond_bg}
          className="absolute w-full object-cover bg-[#7ED6DF] z-[-1]"
          alt="diamond_bg"
        />
        <div className="py-32 absolute my-8 items-center justify-center grid gap-4 sm:grid-cols-1 lg:grid-cols-2 px-40 lg:px-32 ">
          <div className="relative">
            <p className="text-left font-konstarica leading-[13rem] text-[180px]">
              about event
            </p>
            <img
              src={timeline}
              className="items-center justify-center w-1/2"
              alt="timeline"
            />
          </div>
          <div className="relative">
            {/* <p className="text-right font-konstarica leading-[8rem] text-[130px] text-[#ECE8E1]">
                      Day <br/> 01
                    </p>
                    <img src={commas} className="items-center justify-center w-ful" alt="commas" />
                    <p className="text-left p-8 font-kurye text-lg tracking-wider font-medium text-[#ECE8E1]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </p> */}
            <div className="flex max-w-[1400px] h-[35rem] w-full m-auto relative group">
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full rounded-xl bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 mr-6 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4 justify-center flex-col items-center">
                {slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className="text-4xl cursor-pointer"
                  >
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
