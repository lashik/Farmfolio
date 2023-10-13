import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { Button as BsButton } from "react-bootstrap";

const SectionCardForm = () => {
  return (
    <section className="absolute top-[7100px] left-[0px] bg-gray-300 w-[1440px] h-[400px] overflow-hidden text-left text-33xl text-white font-roboto">
      <Button
        className="absolute top-[257px] left-[497px]"
        sx={{ width: 208 }}
        color="primary"
        variant="contained"
      >
        Try it now
      </Button>
      <BsButton
        className="w-52 absolute top-[257px] left-[735px]"
        variant="primary"
      >
        Contact Sales
      </BsButton>
      <div className="absolute top-[88px] left-[567px] w-[305px] h-[61px] overflow-hidden">
        <h1 className="m-0 absolute top-[0px] left-[0px] text-inherit font-semibold font-inherit">
          Try it for free
        </h1>
      </div>
      <div className="absolute top-[185px] left-[425px] w-[589px] h-7 overflow-hidden text-5xl">
        <div className="absolute top-[0px] left-[0px]">
          No credit card required. Start your farming journey now.
        </div>
      </div>
    </section>
  );
};

export default SectionCardForm;
