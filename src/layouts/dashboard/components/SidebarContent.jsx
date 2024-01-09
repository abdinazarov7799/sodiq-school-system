import {useTranslation} from "react-i18next";
import {Box, Divider, Flex, Image, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {get} from "lodash";
import React from "react";
import SidebarNavItem from "./SidebarNavItem.jsx";
import ClassesImg from '../../../assets/images/classes.svg';
import TeachersImg from '../../../assets/images/teachers.svg';
import StudentsImg from '../../../assets/images/students.svg';
import SciencesImg from '../../../assets/images/sciences.svg';
import LessonPlanImg from '../../../assets/images/lessontable.svg';
import JournalImg from '../../../assets/images/journal.svg';
import KPIImg from '../../../assets/images/kpi.svg';
import Avatar from '../../../assets/images/Avatar.svg';
import LogInImg from '../../../assets/images/log-in.svg';
import mockData from "../../../mock/mockData.js";

const LinkItems = [
    {name: "Sinflar", icon: ClassesImg, url: "/classes"},
    {name: "O'qituvchilar", icon: TeachersImg, url: "/teachers"},
    {name: "O'quvchilar", icon: StudentsImg, url: "/students"},
    {name: "Fanlar", icon: SciencesImg, url: "/sciences"},
    {name: "Dars jadval", icon: LessonPlanImg, url: "/lesson-plan"},
    {name: "Jurnal", icon: JournalImg, url: "/journal"},
    {name: "KPI", icon: KPIImg, url: "/kpi"},
];

const SidebarContent = ({onClose, ...rest}) => {
    const {t} = useTranslation();
    return (
        <>
            <Box
                transition="3s ease"
                bg={'#002540'}
                borderRight="1px"
                w={'280px'}
                position={"fixed"}
                h="100%"
                {...rest}
            >
                <Flex alignItems={"center"} justifyContent={"space-between"} p={4}>
                    <Image src={Avatar} ml={4}/>
                    <Box>
                        <Text color={"white"}>{get(mockData,'userName','')}</Text>
                        <Text color={'#0094FF'} fontSize={12}>{get(mockData,'userRole','')}</Text>
                    </Box>
                    <Image src={LogInImg} ml={8}/>
                </Flex>
                <Divider mb={10}/>
                {LinkItems.map((link,index) => {
                    return (
                        <NavLink to={get(link, "url")} key={index}>
                            <SidebarNavItem icon={get(link,"icon")}>
                                {t(get(link,"name",""))}
                            </SidebarNavItem>
                        </NavLink>
                    )
                })}
                <Box position={"absolute"} bottom={0} left={0} w={"100%"}>
                    <Divider />
                    <Flex p={6}>
                        <Image src={LogInImg} mr={4}/>
                        <Text color={"white"}>Chiqish</Text>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};
export default SidebarContent;
