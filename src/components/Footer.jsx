export default function Footer() {
  return (
    <section className="relative min-h-screen max-w-screen top-0 left-0 bg-[#0F1923] pb-4 bg-hero-bg overflow-hidden">
      <div>
        <div>
          <div className="flex ">
            <img
              src="/images/rh.png"
              className="absolute -top-[93%] left-0 h-[100vh] z-[0]"
              alt=""
            />
            <img
              src="/images/rh.png"
              className="h-[100vh]  absolute -top-[93%] left-[51%] z-[0]"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/images/rh.png"
              className="absolute -top-[36%] -left-[25.5%] h-[100vh] z-[0]"
              alt=""
            />
            <img
              src="/images/rh.png"
              className="absolute -top-[36%] h-[100vh] z-[0]"
              alt=""
            />
            <img
              src="/images/rh.png"
              className="absolute -top-[36%] left-[76.3%] h-[100vh] z-[0]"
              alt=""
            />
          </div>
          <div className="flex ">
            <img
              src="/images/rh.png"
              className="absolute top-[21%] left-0 h-[100vh] z-[0]"
              alt=""
            />
            <img
              src="/images/rh.png"
              className="h-[100vh] absolute top-[21%] left-[51%] z-[0]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="Konstarica text-[7rem] text-[#22A6B3] pt-[1%] text-center z-[3]">
          Hack the Fest 2024
        </h1>
        <p className="text-[#ECE8E1] text-[1.4rem] text-center Kurye leading-9 z-[3]">
          Hackoverfow 2023 hackathon is a part of the Hackoverflow
          <br /> Society CU. We host the best events in the college!!.
        </p>
        <div className="flex justify-center items-center">
          <div className="relative mt-[6rem] text-[#ECE8E1] bg-[#7ED6DF1A] h-[22vh] w-[53vw] decoration-[#070C0F] backdrop-blur-[8px] ">
            <img
              src="/images/Group52.png"
              alt=""
              className="h-[%] w-[85px] absolute -mt-10"
            />

            <h3 className="text-[#7ED6DF] text-left Kurye text-[1.3rem] pt-[.9rem] pl-[5.5rem] ">
              Send Message
            </h3>

            <div className="border border-solid border-white h-[8.5vh] w-[42.25vw] mt-4 ml-[4.5rem]">
              <input
                type="text"
                placeholder="Where can i find more info..."
                className="text-left Kurye text-[1.3rem] pl-3 bg-transparent border-white h-[8.5vh] w-[42.25vw] "
              />
            </div>
            <button type="button">
              <img
                src="/images/Group3.png"
                alt=""
                className="h-[85px] w-[85px] absolute -bottom-11 -right-2 mt-[.4rem]"
              />
            </button>
          </div>
        </div>

        <h1 className="Konstarica text-[#22A6B3] text-[5.5rem] text-center pt-[5.8rem] z-[3]">
          Follow us on
        </h1>
        <div className="flex justify-center gap-8 items-center">
          <button type="button">
            <img
              src="/images/ig.png"
              className="h-[5.5rem]  cursor-pointer"
              alt=""
            />
          </button>
          <button type="button">
            <img
              src="/images/x.png"
              className="h-[5.5rem]  cursor-pointer"
              alt=""
            />
          </button>
          <button type="button">
            <img
              src="/images/in.png"
              className="h-[5.5rem] cursor-pointer"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
}
