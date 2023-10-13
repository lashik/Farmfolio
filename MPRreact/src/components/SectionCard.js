import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SectionCard = () => {
  return (
    <section className="absolute top-[6300px] left-[0px] bg-whitesmoke-200 w-[1440px] h-[800px] overflow-hidden text-left text-23xl text-black font-roboto">
      <div className="absolute top-[225px] left-[192px] w-[423px] h-[94px] overflow-hidden">
        <h1 className="m-0 absolute top-[-4px] left-[8px] text-inherit font-bold font-inherit">
          <p className="m-0">Connect the apps that</p>
          <p className="m-0">you use everyday</p>
        </h1>
      </div>
      <div className="absolute top-[351px] left-[194px] w-[480px] h-[62px] overflow-hidden text-xl">
        <div className="absolute top-[10px] left-[6px]">
          <p className="m-0">{`Discover how you can integrate FarmFolio with your `}</p>
          <p className="m-0">current toolstack.</p>
        </div>
      </div>
      <Button
        className="w-[272px] absolute top-[477px] left-[200px]"
        variant="primary"
      >
        Connect tools
      </Button>
      <div className="absolute top-[487px] left-[870px] w-[180px] h-[180px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[180px] h-[180px]" />
        <img
          className="absolute top-[43px] left-[55px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/icon-google-drive-1@2x.png"
        />
      </div>
      <div className="absolute top-[287px] left-[983px] w-[150px] h-[150px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[150px] h-[150px]" />
        <img
          className="absolute top-[45px] left-[45px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/icon-google-1@2x.png"
        />
      </div>
      <div className="absolute top-[83px] left-[770px] w-[180px] h-[180px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[180px] h-[180px]" />
        <img
          className="absolute top-[55px] left-[55px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/icon-slack-1@2x.png"
        />
      </div>
      <div className="absolute top-[398px] left-[1184px] w-[180px] h-[180px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[180px] h-[180px]" />
        <img
          className="absolute top-[55px] left-[55px] w-[70px] h-[70px] object-cover"
          alt=""
          src="/icon-dropbox-1@2x.png"
        />
      </div>
      <div className="absolute top-[170px] left-[1209px] w-40 h-40 overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-40 h-40" />
        <img
          className="absolute top-[50px] left-[50px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/icon-gitlab-1@2x.png"
        />
      </div>
      <div className="absolute top-[565px] left-[635px] w-[150px] h-[150px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[150px] h-[150px]" />
        <img
          className="absolute top-[45px] left-[45px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/icon-discord-1@2x.png"
        />
      </div>
      <div className="absolute top-[598px] left-[1090px] w-[150px] h-[150px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[150px] h-[150px]" />
        <img
          className="absolute top-[45px] left-[45px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/icon-github-1@2x.png"
        />
      </div>
      <div className="absolute top-[330px] left-[715px] w-40 h-40 overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-40 h-40" />
        <img
          className="absolute top-[50px] left-[50px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/icon-reddit-1@2x.png"
        />
      </div>
      <div className="absolute top-[55px] left-[1015px] w-40 h-40 overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-40 h-40" />
        <img
          className="absolute top-[50px] left-[50px] w-[60px] h-[60px] object-cover"
          alt=""
          src="/icon-google-1@2x.png"
        />
      </div>
    </section>
  );
};

export default SectionCard;
