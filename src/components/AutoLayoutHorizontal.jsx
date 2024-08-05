import { useMemo } from "react";
import PropTypes from "prop-types";

const AutoLayoutHorizontal = ({
  className = "",
  genreCard,
  peacefulPiano,
  propMinWidth,
  propDisplay,
  relaxAndIndulgeWithBeauti,
}) => {
  const peacefulPianoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div
      className={`flex-1 rounded-[6.38px] bg-gray-300 flex flex-row items-start justify-start p-4 box-border min-w-[204px] max-w-[208px] text-left text-mini text-white font-helvetica-neue ${className}`}
    >
      <div className="h-[266.2px] flex-1 flex flex-col items-start justify-start gap-[15px]">
        <img
          className="w-[175.8px] h-[175.8px] relative rounded-[4.38px] object-cover"
          loading="lazy"
          alt=""
          src={genreCard}
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="overflow-hidden flex flex-row items-start justify-start pt-0 pb-[4.6px] pl-0 pr-0.5">
            <b
              className="relative leading-[26px] inline-block min-w-[107px]"
              style={peacefulPianoStyle}
            >
              {peacefulPiano}
            </b>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-0 pb-[0.8px] pl-0 pr-[33px] z-[1] mt-[-1px] text-sm text-darkgray-200">
            <div className="flex-1 relative leading-[22.4px]">
              {relaxAndIndulgeWithBeauti}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AutoLayoutHorizontal.propTypes = {
  className: PropTypes.string,
  genreCard: PropTypes.string,
  peacefulPiano: PropTypes.string,
  relaxAndIndulgeWithBeauti: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default AutoLayoutHorizontal;
