import PropTypes from "prop-types";

export default function ImagesRow({ className, teamData }) {
  return (
    <div className={`${className} flex justify-center items-center gap-5`}>
      {teamData.map((data, index) => (
        <div
          key={index}
          className="w-[30vw] relative group cursor-pointer hover:scale-105 duration-200 "
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        >
          <img
            src={data.img}
            className={`w-full aspect-square object-cover `}
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[70%] h-fit bg-[rgba(0,0,0,0.5)] scale-0 group-hover:scale-100 duration-200 box-border p-5 rounded-md font-kurye">
            <h3 className="text-white text-lg">{data.name}</h3>
            <h4 className="text-[#FF4655] text-[11px] -mt-1">Developer</h4>
            <p className="text-white text-sm mt-3">{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

ImagesRow.propTypes = {
  className: PropTypes.string,
  teamData: PropTypes.array.isRequired,
  PropTypes,
};
