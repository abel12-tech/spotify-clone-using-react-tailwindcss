import PreviewContainer from "../components/PreviewContainer";
import Frame from "../components/Frame";
import AutoLayoutHorizontal1 from "../components/AutoLayoutHorizontal1";
import AutoLayoutHorizontal2 from "../components/AutoLayoutHorizontal2";
import BottomNavigationContainer from "../components/BottomNavigationContainer";

const Spotify = () => {
  return (
    <div className="w-full overflow-y-hidden h-[900px] relative leading-[normal] bg-dimgray-200 tracking-[normal] text-left text-mini text-darkgray-200 font-helvetica-neue mq850:h-auto mq850:min-h-[900]">
      <div className="absolute w-[calc(100%_-_241px)] top-[0px] right-[0px] left-[241px] bg-gray-400 h-16 hidden text-center">
        <img
          className="absolute top-[16px] left-[32px] rounded-2xl w-8 h-8"
          alt=""
          src="/frame.svg"
        />
        <img
          className="absolute top-[16px] left-[80px] rounded-2xl w-8 h-8"
          alt=""
          src="/frame-1.svg"
        />
        <b className="absolute top-[23px] left-[970.7px] inline-block min-w-[54px] whitespace-nowrap">
          Sign up
        </b>
        <div className="absolute top-[8px] left-[1057.6px] rounded-481xl bg-white flex flex-row items-start justify-start py-[15px] px-8 whitespace-nowrap text-black">
          <b className="relative inline-block min-w-[45px]">Log in</b>
        </div>
      </div>
      {/* <PreviewContainer /> */}
      <Frame />
      <AutoLayoutHorizontal1 />
      <h3 className="m-0 absolute top-[471.2px] left-[273px] text-[21px] leading-[27.5px] font-bold font-[inherit] text-white flex items-center mq450:text-[17px]">
        Spotify Playlists
      </h3>
      <b className="absolute top-[473.2px] left-[1353px] text-smi leading-[23px] inline-block text-darkgray-100 min-w-[53px]">
        Show all
      </b>
      <AutoLayoutHorizontal2 />
      <BottomNavigationContainer />
    </div>
  );
};

export default Spotify;
