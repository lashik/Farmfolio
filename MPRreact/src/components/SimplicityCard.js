import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SimplicityCard = () => {
  return (
    <section className="absolute top-[2036px] left-[-1px] w-[1440px] h-[732px] overflow-hidden text-left text-xl text-black font-roboto">
      <div className="absolute top-[149px] left-[79px] w-[689px] h-[433px] overflow-hidden">
        <div className="absolute top-[192px] left-[118px] w-[277px] h-8 overflow-hidden">
          <div className="absolute top-[2px] left-[4px]">
            Efficient and Effective Services
          </div>
        </div>
        <div className="absolute top-[1px] left-[122px] w-[650px] h-6 overflow-hidden text-silver">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Features
          </div>
        </div>
        <div className="absolute top-[54px] left-[122px] w-[309px] h-[47px] overflow-hidden text-23xl">
          <h1 className="m-0 absolute top-[-4px] left-[-1px] text-inherit font-semibold font-inherit">
            Simplicity is Key
          </h1>
        </div>
        <Button
          className="w-[215px] absolute top-[377px] left-[117px]"
          variant="primary"
        >
          Learn More
        </Button>
      </div>
      <div className="absolute top-[194px] left-[771px] rounded-xl bg-whitesmoke-200 w-[470px] h-[340px] overflow-hidden">
        <img
          className="absolute top-[62px] left-[120px] w-[229px] h-[216px] object-cover"
          alt=""
          src="/image-31@2x.png"
        />
      </div>
    </section>
  );
};

export default SimplicityCard;
