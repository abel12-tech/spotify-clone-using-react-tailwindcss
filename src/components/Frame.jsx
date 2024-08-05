import PropTypes from "prop-types";

const Frame = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[0px] left-[241px] bg-dimgray-200 w-[1199px] h-[332px] overflow-hidden flex flex-col items-start justify-start py-[88px] px-8 box-border max-w-full z-[1] text-left text-xl text-white font-helvetica-neue ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.6),_#121212)] z-[1]" />
      <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[59px] z-[2] mq450:text-base">
        Focus
      </a>
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full mt-[-23px] text-smi text-darkgray-100">
        <img
          className="h-[300px] w-[300px] absolute !m-[0] bottom-[-188px] left-[-32px] overflow-hidden shrink-0"
          alt=""
          src="/frame-2.svg"
        />
        <div className="flex-1 flex flex-row items-start justify-end max-w-full">
          <b className="absolute top-[473.2px]  text-smi leading-[23px] inline-block text-darkgray-100 min-w-[53px] z-[10]">
            Show all
          </b>
        </div>
      </div>
    </section>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
