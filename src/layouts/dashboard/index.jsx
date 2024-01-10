import React from "react";
import {
    Box, Flex,
    useColorModeValue,
} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import SidebarContent from "./components/SidebarContent";


export default function DashboardLayout() {

    return (
        <Flex minH="100vh" bg={useColorModeValue("#F1F5F8", "gray.900")}>
            <SidebarContent />
            <Box pl={'280px'} w="100%">
                <Box p="4">
                    <Outlet/>
                </Box>
            </Box>
        </Flex>
    );
}
