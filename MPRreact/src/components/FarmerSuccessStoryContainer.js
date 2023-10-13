import { useMemo } from "react";

const FarmerSuccessStoryContainer = ({
  howAFarmerFromNashikGrew1,
  modernFarmingMethodsHaveO,
  yeilding1,
  propTop,
  propLeft,
  propHeight,
  propTop1,
  propHeight1,
  propTextDecoration,
  onReadMoreTextClick,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const frameDiv2Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop1,
      height: propHeight1,
    };
  }, [propTop1, propHeight1]);

  const modernFarmingMethodsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div
      className="absolute top-[3891px] left-[78px] w-[310px] h-[450px] overflow-hidden text-left text-xl text-black font-roboto"
      style={frameDiv1Style}
    >
      <div className="absolute top-[146px] left-[0px] bg-whitesmoke-200 w-[310px] h-[304px] overflow-hidden">
        <div
          className="absolute top-[20px] left-[11px] w-[286px] h-[55px] overflow-hidden text-5xl"
          style={frameDiv2Style}
        >
          <div className="absolute top-[-1px] left-[2px] inline-block w-[284px]">
            {howAFarmerFromNashikGrew1}
          </div>
        </div>
        <div
          className="absolute top-[109px] left-[11px] w-[286px] h-[70px] overflow-hidden text-gray-100"
          style={frameDiv3Style}
        >
          <div
            className="absolute top-[1px] left-[2px] inline-block w-[284px]"
            style={modernFarmingMethodsStyle}
          >
            {modernFarmingMethodsHaveO}
          </div>
        </div>
        <div className="absolute top-[251px] left-[196px] w-[101px] h-[29px] overflow-hidden text-pink">
          <div
            className="absolute top-[0px] left-[4px] cursor-pointer"
            onClick={onReadMoreTextClick}
          >
            Read more
          </div>
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] rounded-xl w-[310px] h-40 object-cover"
        alt=""
        src={yeilding1}
      />
    </div>
  );
};

export default FarmerSuccessStoryContainer;
