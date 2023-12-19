import {
    Box,
    Button,
    Flex,
    HStack, Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import {FiChevronDown} from "react-icons/fi";
import {get} from "lodash";
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
      <Menu>
          <MenuButton
              as={Button}
              transition="all 0.3s"
              _focus={{boxShadow: "none"}}
          >
              <HStack>
                  <VStack
                      display={{base: "flex", md: "flex"}}
                      alignItems="flex-start"
                      ml="2"
                  >
                      <Text fontSize="md" fontWeight={600}>{lang}</Text>
                  </VStack>
              </HStack>
          </MenuButton>
          <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              p={0}
          >
              {languages?.map((language, index) => (
                  get(language, "title") !== lang && (
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
                  )
              ))}
          </MenuList>
      </Menu>
  )
}
export default LanguageChanger;
