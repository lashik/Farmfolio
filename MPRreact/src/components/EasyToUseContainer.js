import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const EasyToUseContainer = ({
  featureImageUrl,
  featureDescription,
  agriculturalServicesText,
  buttonText,
  propTop,
  propLeft,
  propWidth,
}) => {
  const feature1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section
      className="absolute top-[1193px] left-[0px] w-[1440px] h-[732px] overflow-hidden text-left text-xl text-black font-roboto"
      style={feature1Style}
    >
      <div className="absolute top-[237px] left-[200px] rounded-xl bg-whitesmoke-200 w-[470px] h-[340px] overflow-hidden">
        <img
          className="absolute top-[62px] left-[120px] w-[229px] h-[216px] object-cover"
          alt=""
          src={featureImageUrl}
        />
      </div>
      <div className="absolute top-[174px] left-[751px] w-[689px] h-[433px] overflow-hidden">
        <div className="absolute top-[40px] left-[20px] w-[650px] h-6 overflow-hidden text-silver">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Features
          </div>
        </div>
        <div
          className="absolute top-[89px] left-[21px] w-[223px] h-[47px] overflow-hidden text-23xl"
          style={frameDivStyle}
        >
          <h1 className="m-0 absolute top-[-4px] left-[-1px] text-inherit font-semibold font-inherit">
            {featureDescription}
          </h1>
        </div>
        <div className="absolute top-[221px] left-[17px] w-[190px] h-8 overflow-hidden">
          <div className="absolute top-[3px] left-[2px]">
            {agriculturalServicesText}
          </div>
        </div>
        <Button
          className="w-[215px] absolute top-[380px] left-[19px]"
          variant="primary"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default EasyToUseContainer;
