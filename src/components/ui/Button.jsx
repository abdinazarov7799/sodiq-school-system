import React from "react";
import {Button} from "@chakra-ui/react";

export const ButtonFilled = ({children,...rest}) => {
  return <Button
      color={"white"}
      bg={"#0094FF"}
      border={'1px solid transparent'}
      _hover={{background: "#0094FFC6"}}
      borderRadius={'20px'}
      fontSize={'14px'}
      fontWeight={400}
      {...rest}>
      {children}
  </Button>
}

export const ButtonOutlined = ({children,...rest}) => {
  return <Button
      color={"#0094FF"}
      border={'1px solid #0094FF'}
      _hover={{background: "#0094FFC6",color: '#fff'}}
      borderRadius={'20px'}
      fontSize={'14px'}
      fontWeight={400}
      {...rest}>
    {children}
  </Button>
}
