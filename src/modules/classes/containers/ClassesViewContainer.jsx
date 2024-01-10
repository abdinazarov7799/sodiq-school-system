import Nav from "../../../layouts/dashboard/components/Nav.jsx";
import React, {useState} from "react";
import {
    Box,
    Divider, Drawer, DrawerBody, DrawerContent, DrawerOverlay,
    Flex, Grid,
    Image, SimpleGrid, Stat, StatHelpText, StatLabel, StatNumber,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {ButtonFilled, ButtonOutlined} from '../../../components/ui/Button.jsx'
import {get} from "lodash";
import mockData from "../../../mock/mockData.js";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import KuratotImg from '../../../assets/images/KuratorImg.svg';
import UserInfoAvatar from '../../../assets/images/userInfoAvatar.png';
import TelIcon from '../../../assets/images/tel.svg';
import SmsIcon from '../../../assets/images/sms.svg';
import {CustomViewTable} from "../../../components/ui/Table.jsx";
import Pagination from "../../../components/pagination/index.jsx";

const ClassesViewContainer = () => {
    let {id} = useParams()
    const {t} = useTranslation();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [viewID, setViewID] = useState();
    const [page, setPage] = useState(0);
    const classData = get(mockData,`classesGroupTableData.tbody`,[])[id];
    const viewData = get(mockData,'classesViewTableData.tbody', {})[viewID];


    const handleInfo = (i) => {
        setViewID(i)
        onOpen();
    }
  return(
      <>
          <Nav backIcon={true} moduleName={'Sinf ma`lumotlari'}/>
          <Flex w={"100%"} justifyContent={"space-between"}>
              <Box pl={6}>
                <Text fontSize={24} mb={8}>{get(classData,[1],'')}</Text>
                <Flex>
                    <Image src={KuratotImg}/>
                    <Box ml={4}>
                        <Text color={'#002540'} fontSize={18} fontWeight={500}>{get(classData,[4],'')}</Text>
                        <Text color={'#C7C7C7'} fontSize={14}>{t('Kurator')}</Text>
                    </Box>
                </Flex>
              </Box>
              <Box>
                  <Flex alignItems={"center"} justifyContent={"end"} flexDirection={"column"}>
                      <ButtonFilled w={'166px'} mb={3}>
                          {t('Tahrirlash')}
                      </ButtonFilled>
                      <ButtonOutlined w={'166px'}>
                          {t("O'chirish")}
                      </ButtonOutlined>
                  </Flex>
              </Box>
          </Flex>
          <Divider my={5}/>
          <Box pl={6}>
              <Flex>
                  <Text fontWeight={600} fontSize={15} mr={2}>
                      Tashkil qilindi:
                  </Text>
                  <Text fontWeight={400} fontSize={14}>
                      15.09.2022
                  </Text>
              </Flex>
              <Flex>
                  <Text fontWeight={600} fontSize={15} mr={2}>
                      Jami o`quvchi:
                  </Text>
                  <Text fontWeight={400} fontSize={14}>
                      21 nafar
                  </Text>
              </Flex>
          </Box>
          <Tabs mt={3} position="relative" variant="unstyled">
              <TabList ml={6}>
                  <Tab>Guruh №1</Tab>
                  <Tab>Fanlar</Tab>
              </TabList>
              <TabIndicator
                  mt="-1.5px"
                  height="2px"
                  bg="blue.500"
                  borderRadius="1px"
              />
              <TabPanels p={0}>
                  <TabPanel>
                      <CustomViewTable
                          tableData={get(mockData,'classesViewTableData', {})}
                          handleInfo={handleInfo}
                          // handleDelete={handleDelete}
                          // handleEdit={handleEdit}
                          // handleMore={handleMore}
                      />
                      <Pagination
                          itemTotalSize={get(mockData,'classesViewTableData.tbody',[]).length}
                          setPage={setPage}
                          pageCount={get(mockData, "classesViewTableData.totalPages", 0)}
                          page={page}
                      />
                      <Drawer placement={'right'} size={'md'} onClose={onClose} isOpen={isOpen}>
                          <DrawerOverlay />
                          <DrawerContent>
                              <DrawerBody>
                                  <Flex flexDirection={"column"} alignItems={"center"} pt={12} px={8}>
                                      <Image width={132} height={132} src={UserInfoAvatar}/>
                                      <Text fontSize={24} fontWeight={500} mt={5}>{get(viewData,[1],'')}</Text>
                                      <Text fontSize={14} color={"#9E99A6"} mt={2}>id: {get(viewData,[0],'')}</Text>
                                      <Flex justifyContent={"space-between"} width={'100%'} mt={5}>
                                          <Flex alignItems={"center"}>
                                              <Image src={TelIcon}/>
                                              <Text ml={2}>{get(viewData,[2],'')}</Text>
                                          </Flex>
                                          <Flex alignItems={"center"}>
                                              <Image src={SmsIcon}/>
                                              <Text ml={2}>info@gmail.com</Text>
                                          </Flex>
                                      </Flex>
                                  </Flex>
                                  <Divider my={8}/>
                                  <Box>
                                      <Stat mb={5}>
                                          <StatLabel fontWeight={500}>About</StatLabel>
                                          <StatHelpText fontSize={13}>
                                              Cristiano Ronaldo, in full Cristiano Ronaldo dos Santos Aveiro
                                              (born February 5, 1985, Funchal, Madeira, Portugal), Portuguese
                                              football (soccer) forward who was one of the greatest players of his
                                              generation. Ronaldo's father, José Dinis Aveiro, was the
                                          </StatHelpText>
                                      </Stat>
                                     <SimpleGrid columns={2} gap={4}>
                                         <Stat>
                                             <StatLabel fontWeight={500}>Tug`ulgan sana</StatLabel>
                                             <StatHelpText fontSize={13}>01.02.2005</StatHelpText>
                                         </Stat>
                                         <Stat>
                                             <StatLabel fontWeight={500}>Login</StatLabel>
                                             <StatHelpText fontSize={13}>AB123456</StatHelpText>
                                         </Stat>
                                         <Stat>
                                             <StatLabel fontWeight={500}>Jinsi</StatLabel>
                                             <StatHelpText fontSize={13}>Erkak</StatHelpText>
                                         </Stat>
                                         <Stat>
                                             <StatLabel fontWeight={500}>Parol</StatLabel>
                                             <StatHelpText fontSize={13}>AB123456</StatHelpText>
                                         </Stat>
                                         <Stat>
                                             <StatLabel fontWeight={500}>Manzil</StatLabel>
                                             <StatHelpText fontSize={13}>Toshkent sh. Chilonzor t. Muqumiy 18A uy</StatHelpText>
                                         </Stat>
                                         <Stat>
                                             <StatLabel fontWeight={500}>O`qish summasi</StatLabel>
                                             <StatHelpText fontSize={13}>UZS 1.200.000</StatHelpText>
                                         </Stat>
                                         <Stat>
                                             <StatLabel fontWeight={500}>User name</StatLabel>
                                             <StatHelpText fontSize={13}>zoir_s</StatHelpText>
                                         </Stat>
                                     </SimpleGrid>
                                  </Box>
                              </DrawerBody>
                          </DrawerContent>
                      </Drawer>
                  </TabPanel>
              </TabPanels>
          </Tabs>
      </>
  )
}
export default ClassesViewContainer;
