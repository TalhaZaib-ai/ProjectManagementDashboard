import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[532px] left-[769px] w-[314px] h-[258px] text-left text-xs text-gray font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[314px] h-[258px]" />
      <img
        className="absolute top-[76px] left-[20px] rounded-lg w-[281.7px] h-[110px] object-cover"
        alt=""
        src="/unsplashmicqqgydq6w@2x.png"
      />
      <div className="absolute top-[214px] left-[20px] w-[274px] h-6 text-slategray">
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
            14 comments
          </div>
          <div className="absolute top-[1px] left-[133px] font-medium">
            15 files
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[39px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-15@2x.png"
        />
        <img
          className="absolute top-[0px] left-[19px] rounded-[50%] w-[25px] h-6 object-cover"
          alt=""
          src="/ellipse-13@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-12@2x.png"
        />
      </div>
      <div className="absolute top-[47px] left-[20px] text-lg font-semibold">{`Onboarding Illustrations `}</div>
      <div className="absolute top-[19px] left-[278px] text-base tracking-[-0.07em] font-extrabold">
        . . .
      </div>
      <div className="absolute top-[20px] left-[20px] w-9 h-[23px] text-peru">
        <div className="absolute top-[0px] left-[0px] rounded bg-burlywood w-9 h-[23px]" />
        <div className="absolute top-[4px] left-[6px] font-medium">Low</div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
