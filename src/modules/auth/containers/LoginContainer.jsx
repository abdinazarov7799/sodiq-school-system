import React from "react";
import LoginForm from "../components/LoginForm";
import {get, isEqual} from "lodash";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { URLS } from "../../../constants/url";
import { useSettingsStore, useStore } from "../../../store";
import usePostQuery from "../../../hooks/api/usePostQuery";
import { OverlayLoader } from "../../../components/ui/loader";
import {useTranslation} from "react-i18next";
import {Heading} from "@chakra-ui/react";
import mockData from "../../../mock/mockData.js";
import {toast} from "react-toastify";

const LoginContainer = ({ ...rest }) => {
  const {t} = useTranslation()
  const { mutate, isLoading } = usePostQuery({
    url: URLS.login,
    hideSuccessToast: true,
  });
  const setToken = useSettingsStore((state) => get(state, "setToken", () => {}));
  const setAuth = useStore((state) => get(state, "setAuth", () => {}));
  const navigate = useNavigate();
  const loginRequest = (data) => {
    // mutate(
    //   { url: URLS.login, attributes: data },
    //   {
    //     onSuccess: ({ data }) => {
    //       setToken(get(data, "access_token", null));
    //       setAuth(true);
    //       navigate("/auth");
    //     },
    //   }
    // );
    if (isEqual(get(data, 'login',null),get(mockData,'login',null)) &&
        isEqual(get(data, 'password',null),get(mockData,'password',null))){
        setToken(get(mockData, "access_token", null));
        setAuth(true);
        navigate("/auth");
    }else {
      toast.error('Login yoki parol xato kiritilgan!')
    }
  };

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Heading mb={'69px'}>Kirish</Heading>
      <LoginForm loginRequest={loginRequest} />
    </>
  );
};

export default LoginContainer;
