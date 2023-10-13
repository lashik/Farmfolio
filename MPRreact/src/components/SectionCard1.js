import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SectionCard1 = () => {
  return (
    <section className="absolute top-[4429px] left-[0px] w-[1440px] h-[273px] overflow-hidden text-left text-23xl text-black font-roboto">
      <Button
        className="w-[272px] absolute top-[217px] left-[584px]"
        variant="primary"
      >
        Get started
      </Button>
      <div className="absolute top-[46px] left-[428px] w-[589px] h-[50px] overflow-hidden">
        <h1 className="m-0 absolute top-[1px] left-[-5px] text-inherit font-bold font-inherit">
          Take Your Farm to New Heights
        </h1>
      </div>
      <div className="absolute top-[126px] left-[578px] w-[232px] h-5 overflow-hidden text-xl">
        <div className="absolute top-[2px] left-[2px]">
          Meet our Farming Experts
        </div>
      </div>
    </section>
  );
};

export default SectionCard1;
