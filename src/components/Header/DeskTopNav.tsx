import { Flex, Text, Link } from "@chakra-ui/react";
import { NavLinks } from "../../data/NavLinks";

const DeskTopNav = () => {
  return (
    <Flex
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"2rem"}
      fontWeight={"400"}
    >
      {NavLinks.map((item, index) => (
        <Text
          as={Link}
          href={item.link}
          key={index}
          fontSize={"14px"}
          fontWeight={"400"}
          fontFamily={"Poppins"}
          _hover={{
            cursor: "pointer",
            color: "#495057",
            textDecor: "none",
          }}
          lineHeight={"32px"}
        >
          {item.navitem}
        </Text>
      ))}
    </Flex>
  );
};

export default DeskTopNav;
