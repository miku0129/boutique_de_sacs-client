import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.PROD
  ? import.meta.env.VITE_HANKO_API_URL_PROD
  : import.meta.env.VITE_HANKO_API_URL_DEV;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      window.alert(error.message);
    });
  }, []);

  return <hanko-profile />;
}
