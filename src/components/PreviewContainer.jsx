import PropTypes from "prop-types";

const PreviewContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[832.2px] left-[0px] bg-gray-300 border-gray-200 border-t-[1px] border-solid box-border w-full flex flex-row items-start justify-start max-w-full ${className}`}
    >
      <div className="h-px w-[1440px] relative overflow-hidden shrink-0 hidden max-w-full">
        <div className="absolute w-[calc(100%_-_1347px)] top-[-2px] right-[20px] left-[1327px] rounded-sm bg-gray-500 flex flex-row items-start justify-start">
          <div className="h-1 flex-1 relative rounded-sm overflow-hidden">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-sm bg-white h-full" />
          </div>
        </div>
      </div>
      <footer className="flex-1 [background:linear-gradient(90deg,_#af2896,_#509bf5)] flex flex-row items-start justify-between pt-[11px] pb-[7.4px] pl-[15px] pr-6 box-border max-w-full gap-5 text-left text-xs text-white font-helvetica-neue mq850:flex-wrap">
        <div className="w-[636.1px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] box-border max-w-full">
          <div className="relative tracking-[1.2px] leading-[19.2px] uppercase shrink-0">
            Preview of Spotify
          </div>
          <div className="h-[24.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-mini">
            <div className="mt-[-1.8px] relative leading-[26px] shrink-0">
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed.
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[15px] pl-[34px] pr-[33px] bg-white rounded-481xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-gainsboro">
          <b className="relative text-mini inline-block font-helvetica-neue text-black text-center min-w-[86px]">
            Sign up free
          </b>
        </button>
      </footer>
    </div>
  );
};

PreviewContainer.propTypes = {
  className: PropTypes.string,
};

export default PreviewContainer;
