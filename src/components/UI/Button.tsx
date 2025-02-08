import { useDisclosure } from "@chakra-ui/react";
import RegisterButtonModal from "../../pages/Modalcomponents/LocationModal copy";

const SimpleButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button
        className="border rounded-md text-[#fff] bg-[#15265E] p-2 mt-4 w-[196px] mb-8 md:mb-4"
        onClick={() => onOpen()}
      >
        Register
      </button>
      <RegisterButtonModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default SimpleButton;
