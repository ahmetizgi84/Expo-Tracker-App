import { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

export const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
