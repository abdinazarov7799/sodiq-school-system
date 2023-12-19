import React from "react";
import LoginForm from "../components/LoginForm";
import { get } from "lodash";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import { URLS } from "../../../constants/url";
import { useSettingsStore, useStore } from "../../../store";
import usePostQuery from "../../../hooks/api/usePostQuery";
import { OverlayLoader } from "../../../components/ui/loader";
import {useTranslation} from "react-i18next";

const LoginContainer = ({ ...rest }) => {
  const {t} = useTranslation()
  const { mutate, isLoading } = usePostQuery({
    url: URLS.login,
    hideSuccessToast: true,
  });
  const setToken = useSettingsStore((state) =>
    get(state, "setToken", () => {})
  );
  const setAuth = useStore((state) => get(state, "setAuth", () => {}));
  const navigate = useNavigate();
  const loginRequest = (data) => {
    mutate(
      { url: URLS.login, attributes: data },
      {
        onSuccess: ({ data }) => {
          setToken(get(data, "access_token", null));
          setAuth(true);
          navigate("/auth");
          Swal.fire({
            position: "center",
            icon: "success",
            backdrop: "rgba(0,0,0,0.9)",
            background: "none",
            title: "Добро пожаловать в нашу систему",
            iconColor: "#0BC4EA ",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              title: "title-color",
            },
          });
        },
      }
    );
  };

  return (
    <>
      {isLoading && <OverlayLoader />}
      <LoginForm loginRequest={loginRequest} />
    </>
  );
};

export default LoginContainer;
