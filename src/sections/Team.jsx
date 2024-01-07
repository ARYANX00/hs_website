import { useEffect, useRef, useState } from "react";
import ImagesRow from "../components/ImagesRow";
import { teamData } from "../data/teamData";

export default function Team() {
  const imageRef = useRef();
  const [sectionHeight, setSectionHeight] = useState();
  const imageHeight = imageRef?.current?.children[0]?.offsetHeight;
  useEffect(() => {
    setSectionHeight(4 * imageHeight);
  }, [imageHeight]);
  return (
    <section
      className={`w-full overflow-hidden  min-h-screen  py-10 flex flex-col justify-center items-center relative`}
      style={{ height: `${sectionHeight}px` }}
    >
      <div ref={imageRef} className="h-full flex flex-col items-center ">
        <ImagesRow teamData={new Array(teamData[0], teamData[1])} />
        <ImagesRow
          className={"-m-[15%]"}
          teamData={new Array(teamData[2], teamData[3], teamData[4])}
        />
        <ImagesRow teamData={new Array(teamData[0], teamData[1])} />
      </div>
      <h2 className="lowercase text-white text-[10rem]  font-konstarica -m-[5%]">
        Team
      </h2>
      <div className="h-full flex flex-col items-center ">
        <ImagesRow teamData={new Array(teamData[0], teamData[1])} />
        <ImagesRow
          className={"-m-[15%]"}
          teamData={new Array(teamData[2], teamData[3], teamData[4])}
        />
      </div>
    </section>
  );
}
