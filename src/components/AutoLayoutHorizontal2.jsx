import AutoLayoutHorizontal from "./AutoLayoutHorizontal";
import PropTypes from "prop-types";

const AutoLayoutHorizontal2 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[518.2px] left-[273px] w-[1135px] overflow-hidden flex flex-row flex-wrap items-start justify-center gap-6 max-w-full text-left text-mini text-white font-helvetica-neue ${className}`}
    >
      <AutoLayoutHorizontal
        genreCard="/frame-8@2x.png"
        peacefulPiano="Today's Top Hits"
        propMinWidth="118px"
        propDisplay="inline-block"
        relaxAndIndulgeWithBeauti="Ed Sheeran is on top of the Hottest 50!"
      />
      <div className="flex-1 rounded-[6.38px] bg-gray-300 flex flex-row items-start justify-start p-4 box-border min-w-[204px] max-w-[208px]">
        <div className="h-[266.2px] flex-1 flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-[175.8px] h-[175.8px] relative rounded-[4.38px] object-cover"
            loading="lazy"
            alt=""
            src="/frame-9@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-start justify-start pt-0 pb-[4.6px] pl-0 pr-px z-[1]">
              <b className="relative leading-[26px] inline-block min-w-[75px]">
                RapCaviar
              </b>
            </div>
            <div className="self-stretch h-[44.8px] relative overflow-hidden shrink-0 z-[0] text-sm text-darkgray-200">
              <div className="absolute top-[1px] left-[0px] leading-[22.4px] flex items-center w-[166.1px] h-[64.8px]">
                New music from Roddy Ricch, Kodak Black, NLE Choppa and BIA.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-[6.38px] bg-gray-300 flex flex-row items-start justify-start p-4 box-border min-w-[204px] max-w-[208px] text-base">
        <div className="h-[266.2px] flex-1 flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-[175.8px] h-[175.8px] relative rounded-[4.38px] object-cover"
            loading="lazy"
            alt=""
            src="/frame-10@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-start justify-start pt-0 pb-[4.6px] pl-0 pr-px z-[1]">
              <b className="relative leading-[26px] inline-block min-w-[100px]">
                All Out 2010s
              </b>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-0 pb-[0.8px] pl-0 pr-[21px] z-[0] mt-[-1px] text-sm text-darkgray-200">
              <div className="flex-1 relative leading-[22.4px]">
                The biggest songs of the 2010s.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-[6.38px] bg-gray-300 flex flex-row items-start justify-start p-4 box-border min-w-[204px] max-w-[208px]">
        <div className="h-[266.2px] flex-1 flex flex-col items-start justify-start gap-[15px]">
          <img
            className="w-[175.8px] h-[175.8px] relative rounded-[4.38px] object-cover"
            loading="lazy"
            alt=""
            src="/frame-11@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-start justify-start pt-0 pb-[4.6px] pl-0 pr-5 z-[1]">
              <b className="relative leading-[26px] inline-block min-w-[102px]">
                Rock Classics
              </b>
            </div>
            <div className="self-stretch h-[44.8px] relative overflow-hidden shrink-0 z-[0] text-sm text-darkgray-200">
              <div className="absolute top-[1px] left-[0px] leading-[22.4px] flex items-center w-[168.6px] h-[87.2px]">{`Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters`}</div>
            </div>
          </div>
        </div>
      </div>
      <AutoLayoutHorizontal
        genreCard="/frame-12@2x.png"
        peacefulPiano="Chill Hits"
        propMinWidth="65px"
        propDisplay="inline-block"
        relaxAndIndulgeWithBeauti="Kick back to the best new and recent chill hits."
      />
    </section>
  );
};

AutoLayoutHorizontal2.propTypes = {
  className: PropTypes.string,
};

export default AutoLayoutHorizontal2;
