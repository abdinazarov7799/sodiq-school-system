import {useTranslation} from "react-i18next";
import React from "react";
import {
    Flex, Text,
    useColorModeValue,
} from "@chakra-ui/react";
import LanguageChanger from "../../../components/ui/languageChanger/languageChanger.jsx";

const Nav = () => {
    const {t} = useTranslation();
    return (
        <Flex
            width={'80%'}
            float={"right"}
            mx={'20px'}
            mt={'20px'}
            px={'20px'}
            height="53px"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderRadius={"30px"}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={"space-between"}
        >
            <Text fontWeight={500} fontSize={'15px'}>Sinflar</Text>
            <LanguageChanger />
        </Flex>
    );
};
export default Nav;
