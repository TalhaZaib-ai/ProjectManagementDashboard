import PropTypes from "prop-types";

const Vuesaxlinearmenu = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[21px] h-[21px] ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[71.43%] w-[70%] top-[14.29%] right-[15.71%] bottom-[14.29%] left-[14.29%]">
            <img
              className="absolute h-[33.33%] w-full top-[0%] right-[0%] bottom-[66.67%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-609.svg"
            />
            <img
              className="absolute h-[33.33%] w-full top-[66.67%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-609.svg"
            />
          </div>
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src
          />
        </div>
      </div>
    </div>
  );
};

Vuesaxlinearmenu.propTypes = {
  className: PropTypes.string,
};

export default Vuesaxlinearmenu;
