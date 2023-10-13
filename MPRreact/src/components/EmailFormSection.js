import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const EmailFormSection = () => {
  return (
    <section className="absolute top-[7500px] left-[1px] bg-whitesmoke-200 w-[1440px] h-[378px] overflow-hidden text-left text-sm text-black font-roboto">
      <div className="absolute top-[36px] left-[739px] bg-gainsboro w-[411px] h-12 overflow-hidden text-xl">
        <div className="absolute top-[12px] left-[12px]">
          Enter your email address
        </div>
      </div>
      <div className="absolute top-[147px] left-[1025px] w-[153px] h-[137px] overflow-hidden">
        <div className="absolute top-[44px] left-[17px] w-[113px] h-[77px] overflow-hidden">
          <div className="absolute top-[-1px] left-[0px] w-[91px] h-5 overflow-hidden">
            <div className="absolute top-[0px] left-[1px] font-medium">
              Privacy Policy
            </div>
          </div>
          <div className="absolute top-[57px] left-[-1px] w-[92px] h-5 overflow-hidden">
            <div className="absolute top-[2px] left-[2px] font-medium">
              Crop Tracking
            </div>
          </div>
          <div className="absolute top-[27px] left-[-1px] w-16 h-5 overflow-hidden">
            <div className="absolute top-[2px] left-[2px] font-medium">
              Sitemap
            </div>
          </div>
        </div>
        <div className="absolute top-[11px] left-[12px] w-20 h-[21px] overflow-hidden">
          <b className="absolute top-[2px] left-[6px]">Chatbot</b>
        </div>
      </div>
      <div className="absolute top-[146px] left-[728px] w-[180px] h-[158px] overflow-hidden">
        <div className="absolute top-[12px] left-[17px] w-[85px] h-5 overflow-hidden">
          <b className="absolute top-[2px] left-[6px]">Help</b>
        </div>
        <div className="absolute top-[43px] left-[12px] w-[150px] h-[115px] overflow-hidden">
          <div className="absolute top-[-4px] left-[9px] w-[127px] h-[109px] overflow-hidden">
            <div className="absolute top-[59px] left-[0px] w-[105px] h-6 overflow-hidden">
              <div className="absolute top-[6px] left-[2px] font-medium">
                Farming Guides
              </div>
            </div>
            <div className="absolute top-[5px] left-[-1px] w-10 h-4 overflow-hidden">
              <div className="absolute top-[0px] left-[3px] font-medium">
                FAQ
              </div>
            </div>
            <div className="absolute top-[32px] left-[-1px] w-[113px] h-[23px] overflow-hidden">
              <div className="absolute top-[3px] left-[3px] font-medium">
                Customer Service
              </div>
            </div>
            <div className="absolute top-[95px] left-[-2px] w-[83px] h-[19px] overflow-hidden">
              <div className="absolute top-[0px] left-[4px] font-medium">
                Contact us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[42px] left-[36px] w-[271px] h-[54px] overflow-hidden text-base">
        <div className="absolute top-[6px] left-[11px]">
          <p className="m-0">{`Let's Stay in Touch! Sign Up to Our `}</p>
          <p className="m-0">Newsletter and Get the Best Deals!</p>
        </div>
      </div>
      <div className="absolute top-[144px] left-[45px] w-[168px] h-10 overflow-hidden text-13xl">
        <h2 className="m-0 absolute top-[0px] left-[2px] text-inherit font-normal font-inherit">
          FarmFolio
        </h2>
      </div>
      <div className="absolute top-[215px] left-[34px] w-[106px] h-[62px] overflow-hidden">
        <img
          className="absolute top-[17px] left-[13px] w-8 h-8 object-cover"
          alt=""
          src="/icon-instagram-1@2x.png"
        />
        <img
          className="absolute top-[17px] left-[53px] w-8 h-8 object-cover"
          alt=""
          src="/icon-facebook-1@2x.png"
        />
      </div>
      <Button
        className="w-[272px] absolute top-[29px] left-[1150px]"
        variant="primary"
      >
        Subscribe Now
      </Button>
    </section>
  );
};

export default EmailFormSection;
