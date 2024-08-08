import PropTypes from "prop-types";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[810px] left-[769px] w-[314px] h-[227px] text-left text-xs text-gray font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[314px] h-[227px]" />
      <img
        className="absolute top-[76px] left-[20px] rounded-lg w-[131px] h-[79px] object-cover"
        alt=""
        src="/unsplashbs-1xgrkih4@2x.png"
      />
      <img
        className="absolute top-[76px] left-[163px] rounded-lg w-[131px] h-[79px] object-cover"
        alt=""
        src="/unsplashkiqjfzbii9w@2x.png"
      />
      <div className="absolute top-[183px] left-[20px] w-[274px] h-6 text-slategray">
        <div className="absolute top-[4px] left-[105px] w-[169px] h-4">
          <img
            className="absolute top-[0px] left-[107px] w-4 h-4"
            alt=""
            src="/group-628.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-4 h-4"
            alt=""
            src="/group-627.svg"
          />
          <div className="absolute top-[1px] left-[21px] font-medium">
            9 comments
          </div>
          <div className="absolute top-[1px] left-[128px] font-medium">
            10 files
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
          alt=""
          src="/ellipse-12@2x.png"
        />
      </div>
      <div className="absolute top-[47px] left-[20px] text-lg font-semibold">
        Moodboard
      </div>
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

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
