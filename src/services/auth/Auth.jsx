import React, { useEffect } from "react";
import { InitialLoader } from "../../components/ui/loader";
import { KEYS } from "../../constants/key";
import { URLS } from "../../constants/url";
import useGetAllQuery from "../../hooks/api/useGetAllQuery";
import { useStore } from "../../store";
import {get} from "lodash";
import useAuth from "../../hooks/auth/useAuth";

const Auth = ({ children, ...rest }) => {
  const {token} = useAuth({})
  const setUser = useStore((state) => get(state, "setUser", () => {}));
  const setAuth = useStore((state) => get(state, "setAuth", () => {}));
  const { data, isLoading } = useGetAllQuery({
    key: KEYS.getMe,
    url: URLS.getMe,
    hideErrorMsg: true,
    enabled:!!token
  });

  useEffect(() => {
    if (get(data, "data")) {
      setUser(get(data, "data", {}));
      setAuth(true);
    }
  }, [data]);

  if (isLoading) {
    return <InitialLoader />;
  }
  return <>{children}</>;
};

export default Auth;
