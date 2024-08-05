import PropTypes from "prop-types";

const BottomNavigationContainer = ({ className = "" }) => {
  return (
    <div
      className={`fixed h-full overflow-hidden top-[0px] left-[0px] bg-black w-[241px] flex flex-row items-start justify-start z-[1] text-left text-smi text-darkgray-100 font-helvetica-neue ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 gap-[24.8px]">
        <div className="flex flex-row items-start justify-start py-0 px-6">
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <img
              className="h-10 w-[131px] relative"
              loading="lazy"
              alt=""
              src="/frame-13.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-2">
          <div className="self-stretch rounded flex flex-row items-start justify-start py-2 pl-4 pr-[130px] gap-4 text-white">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/frame-14.svg"
            />
            <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-0 pb-[0.4px] pl-0 pr-px">
              <a className="[text-decoration:none] relative leading-[23px] font-bold text-[inherit] inline-block min-w-[37px]">
                Home
              </a>
            </div>
          </div>
          <div className="self-stretch rounded flex flex-row items-start justify-start py-2 pl-4 pr-[124px] gap-4">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/frame-141.svg"
            />
            <div className="overflow-hidden flex flex-row items-start justify-start pt-0 pb-[0.4px] pl-0 pr-px">
              <a className="[text-decoration:none] relative leading-[23px] font-bold text-[inherit] inline-block min-w-[44px]">
                Search
              </a>
            </div>
          </div>
          <div className="self-stretch rounded flex flex-row items-start justify-start py-2 pl-4 pr-[90px] gap-4">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/frame-142.svg"
            />
            <div className="overflow-hidden flex flex-row items-start justify-start pt-0 pb-[0.4px] pl-0 pr-1">
              <a className="[text-decoration:none] relative leading-[23px] font-bold text-[inherit] inline-block min-w-[75px] whitespace-nowrap">
                Your Library
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start text-white">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start shrink-0">
            <div className="self-stretch h-10 flex flex-row items-start justify-start py-2 pl-6 pr-[122px] box-border relative opacity-[0.7]">
              <div className="overflow-hidden flex flex-row items-start justify-start py-0.5 pl-0 pr-1">
                <b className="relative inline-block min-w-[90px]">
                  Create Playlist
                </b>
              </div>
              {/* <img
                className="h-[calc(100%_-_16px)] w-[calc(100%_-_217px)] absolute !m-[0] top-[8px] right-[193px] bottom-[8px] left-[24px] rounded-sm max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/frame-17.svg"
              /> */}
            </div>
            {/* <div className="self-stretch flex flex-row items-start justify-start py-2 pl-6 pr-16 relative">
              <div className="h-[23.4px] flex-1 overflow-hidden flex flex-row items-start justify-start py-0.5 pl-0 pr-1 box-border opacity-[0.7]">
                <b className="relative leading-[23px] inline-block min-w-[77px]">
                  Liked Songs
                </b>
              </div>
              <img
                className="h-[calc(100%_-_16px)] w-[calc(100%_-_217px)] absolute !m-[0] top-[8px] right-[193px] bottom-[8px] left-[24px] rounded-sm max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src="/frame-171.svg"
              />
            </div> */}
          </div>
          {/* <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-8 px-0 gap-8 shrink-0 z-[1] mt-[-0.1px] text-2xs text-darkgray-200">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-6 pb-[1.6px] gap-1.5">
              <div className="self-stretch h-[94.8px] flex flex-col items-start justify-start pt-1.5 px-0 pb-[70.8px] box-border gap-[13.6px]">
                <div className="flex flex-row items-start justify-start gap-[15.8px]">
                  <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[27px]">
                    Legal
                  </a>
                  <div className="relative leading-[18px] inline-block min-w-[73px]">
                    Privacy Center
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[7.6px] text-3xs">
                  <div className="flex flex-row items-start justify-start gap-[21.6px]">
                    <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[63px]">
                      Privacy Policy
                    </a>
                    <div className="relative text-2xs leading-[18px] inline-block min-w-[41px]">
                      Cookies
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[16.3px] text-2xs">
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                      <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[52px]">
                        About Ads
                      </a>
                    </div>
                    <img
                      className="h-[31.6px] w-[25px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/frame-19.svg"
                    />
                  </div>
                </div>
              </div>
              <a className="[text-decoration:none] relative leading-[18px] text-darkgray-100 inline-block min-w-[41px]">
                Cookies
              </a>
            </div>
            <div className="w-[143.9px] flex flex-row items-start justify-start py-0 px-6 box-border">
              <button className="cursor-pointer border-dimgray-100 border-[1px] border-solid py-1.5 px-[13px] bg-[transparent] flex-1 rounded-481xl flex flex-row items-start justify-start gap-1 hover:bg-gray-600 hover:border-gray-100 hover:border-[1px] hover:border-solid hover:box-border">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/frame-20.svg"
                />
                <b className="relative text-smi inline-block font-helvetica-neue text-white text-center min-w-[46px]">
                  English
                </b>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

BottomNavigationContainer.propTypes = {
  className: PropTypes.string,
};

export default BottomNavigationContainer;
