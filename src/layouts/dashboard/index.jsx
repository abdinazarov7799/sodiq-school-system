import React from "react";
import {
    Box,
    useColorModeValue,
} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import SidebarContent from "./components/SidebarContent";
import Nav from "./components/Nav.jsx";


export default function DashboardLayout() {

    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <Nav />
            <SidebarContent />
            <Box p="4">
                <Outlet/>
            </Box>
        </Box>
    );
}
