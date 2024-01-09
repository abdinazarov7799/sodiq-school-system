import {
    Box,
    Button,
    Flex,
    HStack, Image, Menu,
    MenuButton,
    MenuItem,
    MenuList, Select,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import {FiChevronDown} from "react-icons/fi";
import {get, isEqual} from "lodash";
import React from "react";
import {useSettingsStore} from "../../../store/index.js";
import uzbFlag from "../../../assets/images/uzbekistan-flag.png";
import engFlag from "../../../assets/images/usa-flag.png";
import ruFlag from "../../../assets/images/russian-flag.png";
import {useTranslation} from "react-i18next";


const LanguageChanger = () => {
    const languages = [
        {id: 1, title: "Uz", image: uzbFlag},
        {id: 2, title: "En", image: engFlag},
        {id: 3, title: "Ru", image: ruFlag},
    ];
    const {t,i18n} = useTranslation()
    const lang = useSettingsStore((state) => get(state, "lang"));
    const setLang = useSettingsStore((state) => get(state, "setLang", () => {}));
    const changeLang = (code) => {
        setLang(code);
        return i18n.changeLanguage(code);
    };

  return(
      <>
          <Menu>
              <MenuButton
                  p={0}
                  as={Button}
                  transition="all 0.3s"
                  background={'transparent'}
                  _hover={{background: 'transparent'}}
                  _focus={{background: 'transparent'}}
              >
                  <Flex alignItems={"center"}>
                      {languages?.map((language) => (
                          (isEqual(get(language,'title'),lang)) && (
                              <Image src={language.image} borderRadius={'30px'} w="30px" h="30px" objectFit={"cover"}/>
                          )
                      ))}
                      <FiChevronDown style={{fontSize: '35px'}}/>
                  </Flex>
              </MenuButton>
              <MenuList
                  bg={useColorModeValue("white", "gray.900")}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                  p={0}
              >
                  {languages?.map((language, index) => (
                      <MenuItem
                          key={index}
                          onClick={() => {
                              changeLang(get(language, "title"));
                          }}
                      >
                          <Flex alignItems={"center"}>
                              <img
                                  src={get(language, "image")}
                                  style={{
                                      width: 30,
                                  }}
                              />
                              <Text ml={2}>{t(get(language, "title"))}</Text>
                          </Flex>
                      </MenuItem>
                  ))}
              </MenuList>
          </Menu>
      </>
  )
}
export default LanguageChanger;
