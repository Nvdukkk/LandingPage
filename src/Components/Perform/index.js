import styles from "./Perform.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Perform() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className="head-line">
          Khi bạn đã có mục tiêu cụ thể, LadiPage<br></br>sẽ có công cụ giúp bạn
          thực hiện nó
        </div>
        <div className={cx("line")}>
          <div className={cx("container")}>
            <img
              src="https://w.ladicdn.com/s650x550/5c7362c6c417ab07e5196b05/gettyimages_medium_1032552940-20220701032714.jpg"
              alt=""
            ></img>
            <div className={cx("box")}>
              <div className={cx("box-line1")}>Doanh nghiệp</div>
              <div className={cx("box-line2")}>Đơn giản và chỉ cần 1 nhân sự triển khai giúp rút ngắn chạy chiến dịch digital marketing, không cần lập trình</div>
            </div>
          </div>
          <div className={cx("container")}>
            <img
              src="https://w.ladicdn.com/s650x550/5c7362c6c417ab07e5196b05/gettyimages_medium_1032552940-20220701032714.jpg"
              alt=""
            ></img>
            <div className={cx("box")}>
              <div className={cx("box-line1")}>Doanh nghiệp</div>
              <div className={cx("box-line2")}>Đơn giản và chỉ cần 1 nhân sự triển khai giúp rút ngắn chạy chiến dịch digital marketing, không cần lập trình</div>
            </div>
          </div>
          <div className={cx("container")}>
            <img
              src="https://w.ladicdn.com/s650x550/5c7362c6c417ab07e5196b05/gettyimages_medium_1032552940-20220701032714.jpg"
              alt=""
            ></img>
            <div className={cx("box")}>
              <div className={cx("box-line1")}>Doanh nghiệp</div>
              <div className={cx("box-line2")}>Đơn giản và chỉ cần 1 nhân sự triển khai giúp rút ngắn chạy chiến dịch digital marketing, không cần lập trình</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perform;
