import {useTranslation} from "react-i18next";
import {Box, CloseButton, Flex, Icon, Image, Link, Text, useColorModeValue} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {get} from "lodash";
import React from "react";
import {FiGrid} from "react-icons/fi";
import SidebarNavItem from "./SidebarNavItem.jsx";


const LinkItems = [
    {name: "Sinflar", icon: FiGrid, url: "/classes"},
    {name: "O'qituvchilar", icon: FiGrid, url: "/teachers"},
    {name: "O'quvchilar", icon: FiGrid, url: "/students"},
    {name: "Fanlar", icon: FiGrid, url: "/sciences"},
    {name: "Dars jadval", icon: FiGrid, url: "/lesson-plan"},
    {name: "Jurnal", icon: FiGrid, url: "/journal"},
    {name: "KPI", icon: FiGrid, url: "/kpi"},
];

const SidebarContent = ({onClose, ...rest}) => {
    const {t} = useTranslation();
    return (
        <>
            <Box
                transition="3s ease"
                bg={'#002540'}
                borderRight="1px"
                w={{base: "full", md: 60}}
                pos="fixed"
                h="full"
                {...rest}
            >
                {LinkItems.map((link,index) => {
                    return (
                        <NavLink to={get(link, "url")} key={index}>
                            <SidebarNavItem icon={get(link,"icon")}>
                                {t(get(link,"name",""))}
                            </SidebarNavItem>
                        </NavLink>
                    )
                })}
            </Box>
        </>
    );
};
export default SidebarContent;
