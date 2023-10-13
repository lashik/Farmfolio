import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SectionCard2 = () => {
  return (
    <section className="absolute top-[5600px] left-[0px] bg-whitesmoke-200 w-[1440px] h-[700px] overflow-hidden text-left text-xl text-black font-roboto">
      <div className="absolute top-[243px] left-[744px] w-[552px] h-80 overflow-hidden">
        <img
          className="absolute top-[1px] left-[6px] w-[534px] h-[309px] object-cover"
          alt=""
          src="/image-10@2x.png"
        />
      </div>
      <div className="absolute top-[163px] left-[196px] w-[124px] h-9 overflow-hidden">
        <div className="absolute top-[7px] left-[4px] font-medium">
          DASHBOARD
        </div>
      </div>
      <div className="absolute top-[225px] left-[192px] w-[382px] h-[94px] overflow-hidden text-23xl">
        <h1 className="m-0 absolute top-[-4px] left-[8px] text-inherit font-bold font-inherit">
          <p className="m-0">{`Experience the best `}</p>
          <p className="m-0">farming tools</p>
        </h1>
      </div>
      <div className="absolute top-[351px] left-[194px] w-[480px] h-[62px] overflow-hidden">
        <div className="absolute top-[10px] left-[6px]">
          <p className="m-0">{`Sign up for a free demo and we will show you how to `}</p>
          <p className="m-0">track your crops and manage your farm.</p>
        </div>
      </div>
      <Button
        className="w-[272px] absolute top-[477px] left-[200px]"
        variant="primary"
      >
        Sign up
      </Button>
    </section>
  );
};

export default SectionCard2;
