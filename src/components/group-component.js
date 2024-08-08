import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  files,
  group633,
  brainstorming,
  brainstormingBringsTeamMe,
  low,
  propTop,
  propLeft,
  propLeft1,
  propWidth,
  propColor,
  propWidth1,
  propBackgroundColor,
  propWidth2,
  propColor1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  const brainstormingBringsTeamStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const groupDiv2Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      width: propWidth2,
    };
  }, [propBackgroundColor, propWidth2]);

  const lowStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={`absolute top-[532px] left-[399px] w-[314px] h-[177px] text-left text-xs text-slategray font-inter ${className}`}
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[314px] h-[177px]" />
      <div className="absolute top-[133px] left-[20px] w-[274px] h-6">
        <div
          className="absolute top-[4px] left-[106px] w-[168px] h-4"
          style={groupDiv1Style}
        >
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
            {files}
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[63px] h-6"
          alt=""
          src={group633}
        />
      </div>
      <div className="absolute top-[47px] left-[20px] text-lg font-semibold text-gray">
        {brainstorming}
      </div>
      <div className="absolute top-[19px] left-[278px] text-base tracking-[-0.07em] font-extrabold text-gray">
        . . .
      </div>
      <div
        className="absolute top-[75px] left-[20px] inline-block w-[274px]"
        style={brainstormingBringsTeamStyle}
      >
        {brainstormingBringsTeamMe}
      </div>
      <div
        className="absolute top-[20px] left-[20px] w-9 h-[23px] text-peru"
        style={groupDiv2Style}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded bg-burlywood w-9 h-[23px]"
          style={rectangleDivStyle}
        />
        <div
          className="absolute top-[4px] left-[6px] font-medium"
          style={lowStyle}
        >
          {low}
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  files: PropTypes.string,
  group633: PropTypes.string,
  brainstorming: PropTypes.string,
  brainstormingBringsTeamMe: PropTypes.string,
  low: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propLeft1: PropTypes.any,
  propWidth: PropTypes.any,
  propColor: PropTypes.any,
  propWidth1: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propWidth2: PropTypes.any,
  propColor1: PropTypes.any,
};

export default GroupComponent;
