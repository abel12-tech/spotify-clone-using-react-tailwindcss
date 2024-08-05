import AutoLayoutHorizontal from "./AutoLayoutHorizontal";
import PropTypes from "prop-types";

const AutoLayoutHorizontal1 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[134px] left-[273px] w-[1135px] overflow-hidden flex flex-row flex-wrap items-start justify-center gap-6 max-w-full z-[2] text-left text-mini text-white font-helvetica-neue ${className}`}
    >
      <AutoLayoutHorizontal
        genreCard="/frame-3@2x.png"
        peacefulPiano="Peaceful Piano"
        relaxAndIndulgeWithBeauti="Relax and indulge with beautiful piano pieces"
      />
      <div className="flex-1 rounded-[6.38px] bg-gray-300 flex flex-row items-start justify-start p-4 box-border min-w-[204px] max-w-[208px]">
        <div className="h-[266.2px] flex-1 flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-[175.8px] h-[175.8px] relative rounded-[4.38px] object-cover shrink-0"
            loading="lazy"
            alt=""
            src="/frame-4@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start shrink-0">
            <div className="overflow-hidden flex flex-row items-start justify-start pt-0 pb-[4.6px] pl-0 pr-[22px]">
              <b className="relative leading-[26px] inline-block min-w-[86px]">
                Deep Focus
              </b>
            </div>
            <div className="self-stretch h-[44.8px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-px pb-0 pl-0 pr-[13px] box-border text-sm text-darkgray-200">
              <div className="h-[64.8px] flex-1 relative leading-[22.4px] flex items-center">
                Keep calm and focus with ambient and post-rock music.
              </div>
            </div>
          </div>
        </div>
      </div>
      <AutoLayoutHorizontal
        genreCard="/frame-5@2x.png"
        peacefulPiano="Instrumental Study"
        propMinWidth="unset"
        propDisplay="unset"
        relaxAndIndulgeWithBeauti="Focus with soft study music in the background."
      />
      <AutoLayoutHorizontal
        genreCard="/frame-6@2x.png"
        peacefulPiano="Jazz Vibes"
        propMinWidth="77px"
        propDisplay="inline-block"
        relaxAndIndulgeWithBeauti="The original chill instrumental beats playlist."
      />
      <AutoLayoutHorizontal
        genreCard="/frame-7@2x.png"
        peacefulPiano="Focus Flow"
        propMinWidth="82px"
        propDisplay="inline-block"
        relaxAndIndulgeWithBeauti="Uptempo instrumental hip hop beats."
      />
    </section>
  );
};

AutoLayoutHorizontal1.propTypes = {
  className: PropTypes.string,
};

export default AutoLayoutHorizontal1;
