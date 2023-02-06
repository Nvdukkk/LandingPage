import styles from "./Livechat.module.scss";
import classNames from "classnames/bind";
import img1 from "./supporter1.jpg"
import img2 from "./livechat1.jpg"
import img3 from "./livechat2.jpg"
import img4 from "./livechat3.jpg"

const cx = classNames.bind(styles);

function Livechat() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("image")}>
            <img src={img1} alt="" className={cx("supporter-img")}></img>
            <img src={img2} alt="" className={cx("livechat-img1")}></img>
            <img src={img3} alt="" className={cx("livechat-img2")}></img>
            <img src={img4} alt="" className={cx("livechat-img3")}></img>

        </div>
        <div className={cx("text")}>
            <div className={cx("head-line")}>Gặp thao tác khó,<br></br>có livechat lo</div>
            <div className={cx("sub-line")}>Chúng tôi sẽ không bỏ lỡ bất kỳ tin nhắn của bạn và luôn sẵn sàng
             hướng dẫn chi tiết các bước sử dụng các công cụ trong vòng 5 phút.
            Livechat ngay với LadiPage </div>
        </div>
      </div>
    </div>
  );
}

export default Livechat;
