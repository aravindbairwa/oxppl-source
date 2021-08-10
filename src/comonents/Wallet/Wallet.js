import coinbase from "../../assets/coinbase.svg";
import metamask from "../../assets/metamask.svg";
import walletConnect from "../../assets/wallet_connect.svg";
import userDefault from "../../assets/user_default.svg";

function Wallet() {
  return (
    <div className="wallet">
      <div className="wallet__user">
        <img src={userDefault} className="wallet__user--icon" alt="user-icon" />
      </div>

      <div className="wallet__connect">
        <p className="wallet__connect--title">Connect your wallet</p>
        <div className="wallet__connect--features">
          <ul>
            <li>Add your updates</li>
            <li>Customize your Feed</li>
            <li>Join Communities</li>
            <li>Enable Messaging</li>
          </ul>
        </div>
        <button className="wallet__connect--metamask">
          MetaMask <img src={metamask} className="icon" alt="metamask" />
        </button>
        <button className="wallet__connect--wallet-connect">
          WalletConnect{" "}
          <img src={walletConnect} className="icon" alt="walletconnecct" />
        </button>
        <button className="wallet__connect--coinbase">
          Coinbase
          <img src={coinbase} className="icon" alt="coinbase" />
        </button>
        <p className="wallet__connect--privacy">
          How is your privacy protected?
        </p>
      </div>
    </div>
  );
}

export default Wallet;
