import { useState } from "react";

export default function Team_intro() {
  const [activeSection, setActiveSection] = useState("hs");

  const next = () => {
    // Implement logic to move to the next section
    // For simplicity, let's assume a circular carousel
    setActiveSection((prevSection) => {
      if (prevSection === "hs") return "bgc";
      else if (prevSection === "bgc") return "lb";
      else return "hs";
    });
  };

  const prev = () => {
    // Implement logic to move to the previous section
    // For simplicity, let's assume a circular carousel
    setActiveSection((prevSection) => {
      if (prevSection === "hs") return "lb";
      else if (prevSection === "bgc") return "hs";
      else return "bgc";
    });
  };
  return (
    <section className="h-screen  flex justify-center items-center relative transition-opacity duration-200 ease-in-out">
      {activeSection === "hs" && (
        <div id="hs" className="flex">
          <h2 className="absolute font-kurye text-[color:#ECE8E1] left-[40%] top-6">
            Introducing
          </h2>
          <h2 className="absolute font-konstarica text-[color:#22A6B3] text-5xl left-[40%] top-12">
            Hack Overflow
          </h2>
          <div className="flex ml-[4%] mb-[9%]  ">
            <img
              className="relative w-[30%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imgUpper1.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[14%] bottom-[4%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imgUpper1.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[28%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imgUpper1.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[42%] bottom-[4%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imgUpper1.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[56%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imgUpper1.png"
              alt=""
            />
          </div>
        </div>
      )}

      {activeSection === "bgc" && (
        <div id="bgc" className="flex">
          <h2 className="absolute font-kurye text-[color:#ECE8E1] left-[40%] top-6">
            Introducing
          </h2>
          <h2 className="absolute font-konstarica text-[color:#FF7A30] text-5xl left-[40%] top-12">
            BGC
          </h2>
          <div className="flex ml-[4%] mb-[9%]  ">
            <img
              className="relative w-[30%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1bgc.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[14%] bottom-[4%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1bgc.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[28%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1bgc.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[42%] bottom-[4%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1bgc.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[56%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1bgc.png"
              alt=""
            />
          </div>
        </div>
      )}

      {activeSection === "lb" && (
        <div id="lb" className="flex">
          <h2 className="absolute font-kurye text-[color:#ECE8E1] left-[40%] top-6">
            Introducing
          </h2>
          <h2 className="absolute font-konstarica text-[color:#FF2990] text-5xl left-[40%] top-12">
            LadeyBug
          </h2>
          <div className="flex ml-[4%] mb-[9%]  ">
            <img
              className="relative w-[30%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1lb.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[14%] bottom-[4%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1lb.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[28%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1lb.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[42%] bottom-[4%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1lb.png"
              alt=""
            />
            <img
              className="relative w-[30%] right-[56%] top-[49.5%] group cursor-pointer hover:scale-110 duration-200"
              src="/images/imageUpper1lb.png"
              alt=""
            />
          </div>
        </div>
      )}

      <div className="flex">
        <button
          onClick={prev}
          className="absolute right-[27%] top-[70%] scale-75 hover:scale-50 duration-200"
        >
          <img className=" max-w-[579%]" src="\images\btn_left.png" alt="" />
        </button>

        <button
          onClick={next}
          className="absolute left-[27%] top-[70%] scale-75 hover:scale-50 duration-200"
        >
          <img className=" max-w-[579%]" src="\images\\btn_right.png" alt="" />
        </button>
      </div>
    </section>
  );
}
