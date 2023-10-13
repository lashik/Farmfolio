import { useCallback } from "react";
import CardLogin from "../components/CardLogin";
import SectionCard3 from "../components/SectionCard3";
import EasyToUseContainer from "../components/EasyToUseContainer";
import SimplicityCard from "../components/SimplicityCard";
import FarmerSuccessStoryContainer from "../components/FarmerSuccessStoryContainer";
import SectionCard1 from "../components/SectionCard1";
import SectionCard2 from "../components/SectionCard2";
import SectionCard from "../components/SectionCard";
import EmailFormSection from "../components/EmailFormSection";
import SectionCardForm from "../components/SectionCardForm";
import ChatbotForm from "../components/ChatbotForm";

const Desktop1 = () => {
  const onReadMoreTextClick = useCallback(() => {
    window.open("https://mahadhan.co.in/farmer-nashik-grew-195-quintal-onion/");
  }, []);

  const onReadMoreText1Click = useCallback(() => {
    window.open(
      "https://mahadhan.co.in/mahadhan-helps-farmers-get-good-pomegranate-produce/"
    );
  }, []);

  const onReadMoreText2Click = useCallback(() => {
    window.open("https://mahadhan.co.in/7-tips-get-best-wheat-produce/");
  }, []);

  return (
    <div className="relative bg-white w-full h-[7878px] overflow-hidden text-left text-xl text-black font-roboto">
      <div className="absolute top-[0px] left-[898px] w-[538px] h-[800px] overflow-hidden">
        <img
          className="absolute top-[279px] left-[146px] w-[245px] h-[243px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <CardLogin />
      </div>
      <SectionCard3 />
      <section
        className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-[878px] h-[110px] overflow-hidden text-left text-13xl text-black font-roboto"
        id="header"
      >
        <div className="absolute top-[34px] left-[48px] w-[140px] h-[42px] overflow-hidden">
          <h2 className="m-0 absolute top-[2px] left-[4px] text-inherit font-bold font-inherit">
            Welcome
          </h2>
        </div>
        <div className="absolute top-[0px] left-[212px] w-[666px] h-[110px] overflow-hidden text-lgi">
          <div className="absolute top-[43px] left-[444px]">Chatbot</div>
          <div className="absolute top-[44px] left-[201px]">Market</div>
          <div className="absolute top-[43px] left-[38px]">Dashboard</div>
          <div className="absolute top-[44px] left-[332px]">Crop</div>
          <div className="absolute top-[43px] left-[583px]">Profile</div>
        </div>
      </section>
      <section className="absolute top-[793px] left-[0px] bg-whitesmoke-200 w-[1440px] h-[400px] overflow-hidden text-left text-5xl text-black font-roboto">
        <div className="absolute top-[169px] left-[20px] w-[1400px] h-[31px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_12.5px)] right-[528px] tracking-[0.09em]">
            Join Thousands of Farmers
          </div>
        </div>
        <div className="absolute top-[226px] left-[457px] w-[526px] h-[174px] overflow-hidden text-center">
          <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_266px)] tracking-[0.09em] inline-block w-[529px] h-[174px]">
            <p className="[margin-block-start:0] [margin-block-end:18px]">{`Gather for the second revolution lead by `}</p>
            <p className="[margin-block-start:0] [margin-block-end:18px]">
              Artificial Intelligence. Ease of access and
            </p>
            <p className="m-0">available 24/7.</p>
          </div>
        </div>
      </section>
      <EasyToUseContainer
        featureImageUrl="/image-3@2x.png"
        featureDescription="Easy to Use"
        agriculturalServicesText="Agricultural Services"
        buttonText="Learn More"
      />
      <SimplicityCard />
      <EasyToUseContainer
        featureImageUrl="/image-32@2x.png"
        featureDescription="Tailored Solutions"
        agriculturalServicesText="For all Farmers"
        buttonText="Explore"
        propTop="2879px"
        propLeft="-4px"
        propWidth="339px"
      />
      <section className="absolute top-[3600px] left-[0px] bg-gray-300 w-[1440px] h-[630px] overflow-hidden text-left text-33xl text-white font-roboto">
        <div className="absolute top-[94px] left-[545px] w-[340px] h-[57px] overflow-hidden">
          <h1 className="m-0 absolute top-[-5px] left-[6px] text-inherit font-bold font-inherit">
            Read Our Blog
          </h1>
        </div>
        <div className="absolute top-[188px] left-[641px] w-[154px] h-6 overflow-hidden text-5xl">
          <div className="absolute top-[-3px] left-[2px]">Stay Informed</div>
        </div>
      </section>
      <FarmerSuccessStoryContainer
        howAFarmerFromNashikGrew1="How a farmer from Nashik grew 195 quintal onion"
        modernFarmingMethodsHaveO="Modern farming methods have often proven effective and have delivered outstanding results. "
        yeilding1="/yeilding-1@2x.png"
        onReadMoreTextClick={onReadMoreTextClick}
      />
      <FarmerSuccessStoryContainer
        howAFarmerFromNashikGrew1="How Mahadhan Helps Farmers Get A Good Pomegranate Produce"
        modernFarmingMethodsHaveO="Mahadhan’s fertilisers have constantly delivered results and played a significant role in farmers’ success stories"
        yeilding1="/prome-1@2x.png"
        propTop="3886px"
        propLeft="575px"
        propHeight="83px"
        propTop1="122px"
        propHeight1="93px"
        propTextDecoration="none"
        onReadMoreTextClick={onReadMoreText1Click}
      />
      <FarmerSuccessStoryContainer
        howAFarmerFromNashikGrew1="7 tips to get the best Wheat produce"
        modernFarmingMethodsHaveO="Wheat is one of the most important food crops in the world and wheat farming requires proper planning to produce a high yield."
        yeilding1="/13-1@2x.png"
        propTop="3891px"
        propLeft="1072px"
        propHeight="83px"
        propTop1="108px"
        propHeight1="116px"
        propTextDecoration="unset"
        onReadMoreTextClick={onReadMoreText2Click}
      />
      <SectionCard1 />
      <div className="absolute top-[4878px] left-[452px] w-[589px] h-[50px] overflow-hidden">
        <div className="absolute top-[1px] left-[-5px]" />
      </div>
      <div className="absolute top-[4965px] left-[287px] w-[864px] h-[25px] overflow-hidden">
        <div className="absolute top-[2px] left-[2px]">
          Stay up to date with the latest market trends and get information
          about farming from our chatbot.
        </div>
      </div>
      <div className="absolute top-[5064px] left-[200px] rounded-xl bg-whitesmoke-200 w-[310px] h-[350px] overflow-hidden">
        <img
          className="absolute top-[40px] left-[40px] w-[97px] h-[19px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="absolute top-[89px] left-[40px]">
          <p className="m-0">{`This website is so helpful `}</p>
          <p className="m-0">{`and provides great `}</p>
          <p className="m-0">{`insights. I'm very happy I `}</p>
          <p className="m-0">{`discovered this and can `}</p>
          <p className="m-0">only recommend it.</p>
        </div>
        <div className="absolute top-[265px] left-[110px] text-base">
          Kashik farmer
        </div>
        <div className="absolute top-[289px] left-[110px] text-sm">
          FarmFolio User
        </div>
        <img
          className="absolute top-[260px] left-[40px] w-[50px] h-[49.7px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
      <div className="absolute top-[5064px] left-[565px] rounded-xl bg-whitesmoke-200 w-[310px] h-[350px] overflow-hidden">
        <img
          className="absolute top-[40px] left-[40px] w-[97px] h-[19px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="absolute top-[89px] left-[40px]">
          <p className="m-0">{`Five stars experience for `}</p>
          <p className="m-0">me.Love this website.</p>
        </div>
        <div className="absolute top-[265px] left-[110px] text-base">
          Kashik farmer
        </div>
        <div className="absolute top-[289px] left-[110px] text-sm">
          FarmFolio User
        </div>
        <img
          className="absolute top-[260px] left-[40px] w-[50px] h-[49.7px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
      <div className="absolute top-[5064px] left-[930px] rounded-xl bg-whitesmoke-200 w-[310px] h-[350px] overflow-hidden">
        <img
          className="absolute top-[40px] left-[40px] w-[97px] h-[19px] object-cover"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="absolute top-[89px] left-[40px]">
          <p className="m-0">{`Once you try FarmFolio, `}</p>
          <p className="m-0">{`you will never go back. `}</p>
          <p className="m-0">It's amazing to connect</p>
          <p className="m-0">with other farmers.</p>
        </div>
        <div className="absolute top-[265px] left-[110px] text-base">
          Kashik farmer
        </div>
        <div className="absolute top-[289px] left-[110px] text-sm">
          FarmFolio User
        </div>
        <img
          className="absolute top-[260px] left-[40px] w-[50px] h-[49.7px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
      </div>
      <SectionCard2 />
      <SectionCard />
      <EmailFormSection />
      <SectionCardForm />
      <ChatbotForm />
    </div>
  );
};

export default Desktop1;
