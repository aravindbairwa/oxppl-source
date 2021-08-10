import image from "../../assets/profile_picture.svg";
import commentIcon from "../../assets/comment.svg";
import likeIcon from "../../assets/heart.svg";
import ellipsis from "../../assets/ellipsis.svg";
import verified from "../../assets/verified.svg";
import verifiedBw from "../../assets/verified_bw.svg";

function ListItem() {
  return (
    <div className="list-item">
      <img src={image} className="list-item__image" alt="search" />
      <div className="list-item__details">
        <div className="list-item__details--user-info">
          <div>
            {" "}
            <span className="user-name">
              Prasanna S
              <img src={verified} className="verified-icon" alt="search" />
            </span>
            <span className="wallet-name">0xPras</span>
            <span className="wallet-address">
              0x035...df435
              <img src={verifiedBw} className="verified-icon" alt="search" />
            </span>
            <span>24m</span>
          </div>
          <img src={ellipsis} className="ellipsis" alt="search" />
        </div>
        <div className="list-item__details--feed-info">
          Swaped <span className="dollerValue">$4,200,000</span> of{" "}
          <span className="weth-crypto">WETH</span>{" "}
          <span className="weth-change"> -100%</span> for{" "}
          <span className="atom-crypto">ATOM</span>{" "}
          <span className="atom-change">+28%</span>
        </div>
        <div className="list-item__details--user-actions">
          <div className="comment">
            <img src={commentIcon} className="comment__icon" alt="search" />
            <span className="comment__count">256</span>
          </div>
          <div className="like">
            <img src={likeIcon} className="like__icon" alt="search" />
            <span className="like__count">1.2K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListItem;
