import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SectionCard3 = () => {
  return (
    <section className="absolute top-[0px] left-[2px] bg-whitesmoke-200 w-[900px] h-[800px] overflow-hidden text-left text-33xl text-black font-roboto">
      <div className="absolute top-[218px] left-[200px] w-[385px] h-32 overflow-hidden">
        <h1 className="m-0 absolute top-[6px] left-[1px] text-inherit font-bold font-inherit">
          <p className="m-0">{`Stay Ahead with `}</p>
          <p className="m-0">FarmFolio</p>
        </h1>
      </div>
      <img
        className="absolute top-[372px] left-[626px] w-[264px] h-[209px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <div className="absolute top-[447px] left-[201px] w-[259px] h-8 overflow-hidden text-5xl">
        <div className="absolute top-[2px] left-[2px]">
          The Power of FarmFolio
        </div>
      </div>
      <Button
        className="w-[410px] absolute top-[552px] left-[200px]"
        variant="primary"
      >{`Get Started `}</Button>
    </section>
  );
};

export default SectionCard3;
