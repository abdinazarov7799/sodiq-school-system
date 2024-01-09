import {Flex, Icon, Image, Link} from "@chakra-ui/react";
import React from "react";


const SidebarNavItem = ({icon, children}) => {
    return (
        <Link
            href="#"
            style={{textDecoration: "none"}}
            _focus={{boxShadow: "none"}}
        >
            <Flex
                align="center"
                py="3"
                pl="8"
                mr="10"
                my={"2"}
                borderEndRadius={'34px'}
                role="group"
                cursor="pointer"
                textColor={"white"}
                _hover={{
                    bg: "#0094FF",
                    color: "white",
                }}
            >
                {icon && (
                    <Image src={icon} mr={3} w={'18px'} h={"18px"}/>
                )}
                {children}
            </Flex>
        </Link>
    );
};
export default SidebarNavItem;
