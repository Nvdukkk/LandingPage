import styles from "./Reason.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Reason() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className="head-line">
          Tại sao LadiPage là nền tảng phổ biến<br></br>#1 tại Việt Nam?
        </div>
        <div className={cx("reason")}>
          <div className={cx("reason-box1")}>
            <img
              src="https://w.ladicdn.com/s450x450/5c7362c6c417ab07e5196b05/group-20220701040452.png"
              alt=""
              className={cx("reason-img")}
            ></img>
            <div className={cx("head-line")}>Không cần lập trình</div>
            <div className={cx("sub-line")}>
              Biến các công việc vốn cần cả đội lập trình viên nay chỉ cần tới 1
              nhân sự thực hiện. Sử dụng thao tác kéo thả đơn giản như dùng
              Microsoft Office.
            </div>
          </div>
          <div className={cx("reason-box1")}>
            <img
              src="https://w.ladicdn.com/s450x450/5c7362c6c417ab07e5196b05/group-20220701040452.png"
              alt=""
              className={cx("reason-img")}
            ></img>
            <div className={cx("head-line")}>Không cần lập trình</div>
            <div className={cx("sub-line")}>
              Biến các công việc vốn cần cả đội lập trình viên nay chỉ cần tới 1
              nhân sự thực hiện. Sử dụng thao tác kéo thả đơn giản như dùng
              Microsoft Office.
            </div>
          </div>
          <div className={cx("reason-box1")}>
            <img
              src="https://w.ladicdn.com/s450x450/5c7362c6c417ab07e5196b05/group-20220701040452.png"
              alt=""
              className={cx("reason-img")}
            ></img>
            <div className={cx("head-line")}>Không cần lập trình</div>
            <div className={cx("sub-line")}>
              Biến các công việc vốn cần cả đội lập trình viên nay chỉ cần tới 1
              nhân sự thực hiện. Sử dụng thao tác kéo thả đơn giản như dùng
              Microsoft Office.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reason;
