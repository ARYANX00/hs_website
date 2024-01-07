export default function Prizepool() {
  return (
    <section className="relative max-h-screen max-w-screen top-0 left-0 bg-[#0F1923] bg-hero-bg pb-[10%] overflow-hidden">
      <div className="">
        <div className="flex ">
          <img
            src="/images/rh.png"
            className="absolute top-0 left-0 h-[100vh]"
            alt=""
          />
          <img
            src="/images/rh.png"
            className="h-[100vh] absolute  top-0 left-[51%]"
            alt=""
          />
        </div>
        <div className="flex justify-center">
          <img
            src="/images/rh.png"
            className="absolute top-[55%] -left-[25.5%] h-[100vh] "
            alt=""
          />
          <img
            src="/images/rh.png"
            className="absolute top-[55%] h-[100vh] "
            alt=""
          />
          <img
            src="/images/rh.png"
            className="absolute top-[55%] left-[76.3%] h-[100vh] "
            alt=""
          />
        </div>
      </div>
      <div className=" z-40">
        <h1 className="text-[#ECE8E1] Konstarica text-[10rem] text-center">
          Prize pool
        </h1>
        <div className="flex justify-center">
          <div className="pr-[15rem] ">
            <img src="/images/3rd.png" className="h-[20vh]" alt="" />
            <h1 className="text-white text-center text-[2.5rem] z-10">
              Rs XXXXX
            </h1>
          </div>
          <div className="pl-[15rem]">
            <img src="/images/badge.png" className="h-[22vh]" alt="" />
            <h1 className="text-white stroke-[] text-center text-[2.5rem]">
              Rs XXXXX
            </h1>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src="/images/badge1.png" className="h-[29vh]" alt="" />
          </div>
          <h1 className="text-white stroke-[] text-center text-[2.5rem]">
            Rs XXXXX
          </h1>
        </div>
      </div>
    </section>
  );
}
