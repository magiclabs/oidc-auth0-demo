import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MagicWidget from "../components/MagicWidget";

const WalletPage = () => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [jwt, setJwt] = useState();

  useEffect(() => {
    const getToken = async () => {
      const token = await getIdTokenClaims();
      console.log(token.__raw);
      setJwt(token.__raw);
    };
    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated, jwt]);

  return (
    <div className="wallet-container">{jwt && <MagicWidget jwt={jwt} />}</div>
  );
};

export default WalletPage;
