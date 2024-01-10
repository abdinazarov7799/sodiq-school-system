import React from "react";
import {Button} from "@chakra-ui/react";

const ButtonBordered = ({children,...rest}) => {
  return <Button
      color={"white"}
      bg={"#0094FF"}
      _hover={{background: "#0094FFC6"}}
      borderRadius={'20px'}
      fontSize={'14px'}
      fontWeight={400}
      {...rest}>
      {children}
  </Button>
}
export default ButtonBordered
