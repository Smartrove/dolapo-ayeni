import React from "react";

interface LogoProp {
  onClick: () => void;
}

const Logo: React.FC<LogoProp> = ({ onClick }) => {
  return (
    <img
      alt=""
      width={200}
      height={200}
      src="/assets/da-logo.svg"
      className=" w-[100px] lg:w-[100px]"
      onClick={onClick}
    />
  );
};

const LogoWhite = () => {
  return (
    <img
      alt=""
      width={500}
      height={500}
      src="/TT Blue 1 (1).png"
      className=" w-[150px] lg:w-[150px]"
    />
  );
};

export { Logo, LogoWhite };
