import React from 'react';
import {Outlet} from "react-router-dom";

import {
    Flex, Image,
    Stack,
} from '@chakra-ui/react';
import Img from '../../assets/images/authLayout.svg'
import styled from "styled-components";

const AuthBackGround = styled.div`
    width: 50%;
    background-image: linear-gradient(216deg, #1A81EC 0.74%, #002540 99.53%);
    position: relative;
    & img{
        position: absolute;
        bottom: 0;
        left: 0;
    }
`
const AuthLayout = ({...rest}) => {
    return (
        <Flex minH={'100vh'}>
            <AuthBackGround>
                <Image src={Img} position={"absolute"}/>
            </AuthBackGround>
            <Flex flex={1} align={'center'} justify={'center'} className={'bg'}>
                <Stack spacing={2} w={'full'} maxW={'md'}>
                    <div className="box">
                        <Outlet/>
                    </div>
                </Stack>
            </Flex>

        </Flex>
    );
};

export default AuthLayout;
