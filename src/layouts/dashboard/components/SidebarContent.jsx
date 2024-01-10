import {useTranslation} from "react-i18next";
import {Box, Button, Divider, Flex, Image, Text} from "@chakra-ui/react";
import {NavLink, useNavigate} from "react-router-dom";
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
import Swal from "sweetalert2";
import {useSettingsStore, useStore} from "../../../store/index.js";
import storage from "../../../services/storage/index.js";

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
    const setUser = useStore((state) => get(state, "setUser", () => {}));
    const setAuth = useStore((state) => get(state, "setAuth", () => {}));
    const clearToken = useSettingsStore((state) => get(state, "setToken", () => {}));
    const navigate = useNavigate();
    const logout = () => {
        Swal.fire({
            title: t("Chiqishga ishonchingiz komilmi?"),
            icon: "warning",
            backdrop: "rgba(0,0,0,0.9)",
            background: "none",
            showCancelButton: true,
            confirmButtonColor: "#13D6D1",
            confirmButtonText: t("Ha albatta"),
            cancelButtonText: t("Ortga qaytish"),
            customClass: {
                title: "title-color",
                content: "text-color",
                icon: "icon-color",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                setAuth(false);
                setUser(null);
                clearToken(null);
                storage.remove("settings");
                navigate("/auth");
            }
        });
    };
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
                        <Button variant={'unstyled'}
                                display={"flex"}
                                alignItems={"center"}
                                w={"100%"}
                                justifyContent={"start"}
                                onClick={logout}
                        >
                            <Image src={LogInImg} mr={4}/>
                            <Text color={"white"} fontWeight={400}>Chiqish</Text>
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};
export default SidebarContent;
