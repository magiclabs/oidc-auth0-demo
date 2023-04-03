import { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";
import PulseLoader from "react-spinners/PulseLoader";
import ClipLoader from "react-spinners/ClipLoader";
import { ethers } from "ethers";

const MagicWidget = ({ user, signOut }) => {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [transaction, setTransaction] = useState({
    address: "",
    amount: "",
  });
  const [isSending, setIsSending] = useState(false);
  const magicPublishableKey = "pk_live_E4F135AEC08C0BEB";
  const providerId = "iADLL3f93drBVBQpvwiAWnnBwfrFY4vR_IE5Z7Ob3Uc=";
  const jwt = user.signInUserSession.idToken.jwtToken;

  const magic = new Magic(magicPublishableKey, {
    network: "goerli",
    extensions: [new OpenIdExtension()],
  });

  const provider = new ethers.BrowserProvider(magic.rpcProvider);

  const loginWithMagic = async () => {
    await magic.openid.loginWithOIDC({ jwt, providerId });
    const data = await magic.user.getMetadata();

    setAddress(data.publicAddress);
    setIsConnected(true);
  };

  const getBalance = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
      const weiBalance = await provider.getBalance(address);
      const ethBalance = ethers.formatEther(weiBalance);
      setBalance(ethBalance);
    }
  };

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const sendTransaction = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const signer = provider.getSigner();
      const tx = (await signer).sendTransaction({
        to: transaction.address,
        value: ethers.parseEther(transaction.amount),
        gas: 21000,
      });
      console.log("sent transaction...");
      (await tx).wait();
      console.log(`Transaction successful with hash: ${(await tx).hash}`);
      setIsSending(false);
      setTransaction({ address: "", amount: "" });
    } catch (error) {
      console.log(error);
      setIsSending(false);
    }
  };

  const logout = async () => {
    setIsConnected(false);
    signOut();
    await magic.user.logout();
  };

  useEffect(() => {
    loginWithMagic();
  }, []);

  useEffect(() => {
    if (address) {
      getBalance();
    }
  }, [address]);

  return (
    <div className="wallet-widget">
      <h2 className="wallet-title">Wallet</h2>
      <div>
        <h3>
          Status:{" "}
          {isConnected ? (
            <span className="connected">Connected</span>
          ) : (
            <span className="disconnected">Disconnected</span>
          )}
        </h3>
      </div>
      {!address || !balance ? (
        <PulseLoader
          cssOverride={{ margin: "60px" }}
          loading={!address || !balance}
          color="#6851ff"
        />
      ) : (
        <div>
          <div>
            <div className="info-container">
              <h4>Address</h4>
              <p>{address}</p>
            </div>
            <div className="info-container">
              <h4>Balance</h4>
              <p>{balance} ETH</p>
            </div>
            <div>
              <button className="small-button" onClick={getBalance}>
                Refresh
              </button>
              <a
                href="https://goerlifaucet.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="small-button">Get ETH</button>
              </a>
            </div>
            <a
              href={`/mws-cognito-demo/?token=${jwt}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="reveal-button">Reveal Private Key</button>
            </a>
          </div>
          <hr />
          <div className="send-container">
            <h3>Send Transaction</h3>
            <form onSubmit={sendTransaction}>
              <input
                className="form-input"
                name="address"
                value={transaction.address}
                onChange={handleChange}
                placeholder="Receiving Address"
              />
              <input
                className="form-input"
                name="amount"
                value={transaction.amount}
                onChange={handleChange}
                placeholder="Amount (ETH)"
              />
              <button
                type="submit"
                className="send-button"
                disabled={isSending}
              >
                {isSending ? <ClipLoader color="white" /> : "Send"}
              </button>
            </form>
          </div>
          <hr />
          <button className="sign-out-button" onClick={logout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default MagicWidget;
