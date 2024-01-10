import {useTranslation} from "react-i18next";
import React from "react";
import {
    Button,
    Flex, Image, Input, InputGroup, InputLeftElement, Text,
    useColorModeValue,
} from "@chakra-ui/react";
import LanguageChanger from "../../../components/ui/languageChanger/languageChanger.jsx";
import ThemeImg from  '../../../assets/images/theme.svg'
import {get} from "lodash";
import SearchImg from "../../../assets/images/Search.svg";
import {CgChevronLeft} from "react-icons/cg";

const Nav = (props) => {
    const {t} = useTranslation();
    const getBack = () => {

    }
    return (
        <Flex
            mb={'20px'}
            px={'10px'}
            py={'8px'}
            height="53px"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderRadius={"30px"}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={"space-between"}
        >
            <Flex alignItems={"center"}>
                {get(props, 'backIcon',false) &&
                    <Text cursor={"pointer"} onClick={getBack}><CgChevronLeft size={20} /></Text>}
                <Text ml={2}>
                    {get(props,'moduleName','')}
                </Text>
            </Flex>

            <Flex width={'40%'}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Image src={SearchImg}/>
                    </InputLeftElement>
                    <Input
                        borderRadius={"20px"}
                        fontSize={12}
                        background={'#F0F0F0'}
                        placeholder="Qidirish..."
                    />
                </InputGroup>
                {
                    get(props,'indexPage',false) && (
                        <>
                            <Button borderRadius={'30px'} p={0} mx={3} variant={'unstyled'}>
                                <Image src={ThemeImg} w="30px" h="30px" m={0}/>
                            </Button>
                            <LanguageChanger />
                        </>
                    )
                }
           </Flex>
        </Flex>
    );
};
export default Nav;
