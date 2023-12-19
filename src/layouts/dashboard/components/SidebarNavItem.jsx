import {Flex, Icon, Link} from "@chakra-ui/react";
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
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
export default SidebarNavItem;
