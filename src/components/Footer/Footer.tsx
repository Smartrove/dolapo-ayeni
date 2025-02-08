const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/hibahmarketingandmedia", "_blank");
  };
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/company/btwawi/", "_blank");
  };
  const handleIGClick = () => {
    window.open("https://www.instagram.com/btwawi/", "_blank");
  };
  const handleYoutubeClick = () => {
    window.open(
      "https://youtube.com/@businessthewayallaahwantsit?si=e2ZSjbcN0wmhF85F",
      "_blank"
    );
  };
  const handleWhatsappClick = () => {
    window.open("http://wa.me/2347064797961", "_blank");
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[25rem] mt-[3rem] mx-[3rem] mb-[1rem]"
      style={{ borderTop: "1px solid #96A5FF", paddingTop: ".5rem" }}
    >
      <div className="flex md:flex-row justify-center items-center gap-8">
        <div>
          <p className="text-[14px] text-[#000000] font-[400]">Copyright</p>
        </div>
        <div>
          <p className="text-[14px] text-[#000000] font-[400]">{year}</p>
        </div>
        <div>
          <p className="text-[14px] text-[#000000] font-[400]">BTWAWI</p>
        </div>
      </div>
      <div className="flex items-center gap-8 cursor-pointer">
        <img
          src="/assets/facebook.svg"
          width={30}
          height={30}
          alt=""
          onClick={handleFacebookClick}
        />
        <img
          src="/assets/instagram.svg"
          width={30}
          height={30}
          alt=""
          onClick={handleIGClick}
        />
        <img
          src="/assets/linkedin-btw.svg"
          width={30}
          height={30}
          alt=""
          onClick={handleLinkedinClick}
        />
        <img
          src="/assets/youtube.svg"
          width={120}
          height={120}
          alt=""
          onClick={handleYoutubeClick}
        />
      </div>

      <button
        onClick={handleWhatsappClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 10px",
          backgroundColor: "#2563EB",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <img
          src="/assets/whatsapp.png"
          width={20}
          height={20}
          alt="whatsapp
        "
        />
      </button>
    </div>
  );
};

export default Footer;
