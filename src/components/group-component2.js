import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[532px] left-[1138px] w-[314px] h-[328px] text-left text-xs text-gray font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[314px] h-[328px]" />
      <div className="absolute top-[76px] left-[20px] rounded-lg bg-silver-100 w-[274px] h-[180px]" />
      <img
        className="absolute top-[76px] left-[20px] w-[274px] h-[180px] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <div className="absolute top-[284px] left-[20px] w-[274px] h-6 text-slategray">
        <div className="absolute top-[4px] left-[100px] w-[174px] h-4">
          <img
            className="absolute top-[0px] left-[112px] w-4 h-4"
            alt=""
            src="/group-628.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-4 h-4"
            alt=""
            src="/group-627.svg"
          />
          <div className="absolute top-[1px] left-[21px] font-medium">
            12 comments
          </div>
          <div className="absolute top-[1px] left-[133px] font-medium">
            15 files
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[19px] rounded-[50%] w-[25px] h-6 object-cover"
          alt=""
          src="/ellipse-13@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-121@2x.png"
        />
      </div>
      <div className="absolute top-[47px] left-[20px] text-lg font-semibold">
        Mobile App Design
      </div>
      <div className="absolute top-[19px] left-[278px] text-base tracking-[-0.07em] font-extrabold">
        . . .
      </div>
      <div className="absolute top-[20px] left-[20px] w-[76px] h-[23px] text-mediumseagreen">
        <div className="absolute top-[0px] left-[0px] rounded bg-darkseagreen w-[76px] h-[23px]" />
        <div className="absolute top-[4px] left-[6px] font-medium">
          Completed
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
