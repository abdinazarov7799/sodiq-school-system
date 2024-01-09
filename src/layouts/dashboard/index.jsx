import React from "react";
import {
    Box, Flex,
    useColorModeValue,
} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import SidebarContent from "./components/SidebarContent";
import Nav from "./components/Nav.jsx";


export default function DashboardLayout() {

    return (
        <Flex minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <SidebarContent />
            <Box pl={'280px'} w="100%">
                <Box p="4">
                    <Outlet/>
                </Box>
            </Box>
        </Flex>
    );
}
