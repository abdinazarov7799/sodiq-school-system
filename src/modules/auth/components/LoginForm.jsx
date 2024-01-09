import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement, Image, Box,
} from "@chakra-ui/react";
import UserImg from '../../../assets/images/User.svg';
import LockImg from '../../../assets/images/Lock.svg';

export default function LoginForm({ loginRequest = () => {}, ...rest }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    const data = {
      login: values.login,
      password: values.password,
    };
    loginRequest(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box width={'500px'}>

        <FormControl isInvalid={errors.login} mb={'25px'}>
          <InputGroup>
            <InputLeftElement pointerEvents='none' p={2} height={'60px'}>
              <Image src={UserImg} width={24} height={24}/>
            </InputLeftElement>
            <Input
                height={'60px'}
                id="login"
                {...register("login", {
                  required: "Login is required",
                  minLength: { value: 5, message: "Minimum length should be 5" },
                })}
                type="tel"
                placeholder="Login"
            />
          </InputGroup>

          <FormErrorMessage>
            {errors.login && errors.login.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <InputGroup>
            <InputLeftElement pointerEvents='none' p={2} height={'60px'}>
              <Image src={LockImg} width={24} height={24}/>
            </InputLeftElement>
            <Input
                height={'60px'}
                id={"password"}
                type="password"
                placeholder={"Password"}
                {...register("password", {
                  required: "Password  is required",
                  minLength: { value: 4, message: "Minimum length should be 4" },
                })}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button
            mt={'230px'}
            background={'#002540'}
            _hover={{background: '#013d67'}}
            color={"white"}
            isLoading={isSubmitting}
            type="submit"
            width={'100%'}
        >
          Login
        </Button>
      </Box>
    </form>
  );
}
