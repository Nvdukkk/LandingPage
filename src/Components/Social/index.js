import styles from "./Social.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Social() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className="head-line">Kết nối đa nền tảng tự động sau 1 click</div>
        <div className="second-line">
          Đo lường chuyển đổi tự động từ Facebook, Google Analytics, Google Ads,
          TikTok,... Kết nối
          <br></br>dữ liệu linh hoạt đa nền tảng với kho ứng dụng từ LadiPage.
          Kết nối với website: WordPress, <br></br> Shopify, Sapo, Haravan,
          iTop, Web riêng,...
        </div>

        <div className={cx("wave")}></div>

        <img
          src="https://w.ladicdn.com/s450x400/5c7362c6c417ab07e5196b05/14-20220701034920.png"
          alt=""
          className={cx("logo1")}
        ></img>
        <img
          src="https://w.ladicdn.com/s500x550/5c7362c6c417ab07e5196b05/group1222-20220701034805.png"
          alt=""
          className={cx("ladi-logo")}
        ></img>
      </div>
    </div>
  );
}

export default Social;
