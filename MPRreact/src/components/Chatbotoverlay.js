const Chatbotoverlay = () => {
  return (
    <div className="relative rounded-xl bg-black w-[380px] h-[401px] overflow-hidden max-w-full max-h-full text-left text-2xs text-whitesmoke-100 font-roboto">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-orange w-[380px] h-[60px] overflow-hidden text-lgi">
        <b className="absolute top-[10px] left-[17px]">Chatbot</b>
        <div className="absolute top-[39px] left-[17px] text-2xs">
          Powered by OpenAi
        </div>
      </div>
      <div className="absolute top-[355px] left-[17px] rounded-mini bg-whitesmoke-200 w-[346px] h-[35px] overflow-hidden text-white">
        <div className="absolute top-[0px] left-[289px] rounded-mini bg-gray-200 w-[57px] h-[35px] overflow-hidden" />
        <div className="absolute top-[11px] left-[305px]">Send</div>
        <div className="absolute top-[11px] left-[19px] text-gray-400">
          Enter you questions here.
        </div>
      </div>
      <div className="absolute top-[60px] left-[0px] w-[380px] h-[294px] overflow-hidden text-gray-300">
        <div className="absolute top-[24px] left-[17px] w-[204px] h-[37px] overflow-hidden">
          <img
            className="absolute top-[13px] left-[0px] w-6 h-6 object-cover"
            alt=""
            src="/chatgpt-1@2x.png"
          />
          <div className="absolute top-[0px] left-[29px] rounded-t-mini rounded-br-mini rounded-bl-none bg-whitesmoke-200 w-[175px] h-[37px] overflow-hidden">
            <div className="absolute top-[12px] left-[10px]">
              How can I be of help today
            </div>
          </div>
        </div>
        <div className="absolute top-[85px] left-[167px] w-[206px] h-[37px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] rounded-t-mini rounded-br-none rounded-bl-mini bg-whitesmoke-200 w-[175px] h-[37px] overflow-hidden">
            <div className="absolute top-[12px] left-[10px]">
              How can I be of help today
            </div>
          </div>
          <img
            className="absolute top-[13px] left-[182px] w-6 h-6 object-cover"
            alt=""
            src="/user-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbotoverlay;
