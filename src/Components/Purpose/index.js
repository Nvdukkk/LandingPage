import styles from "./Purpose.module.scss";
import classNames from "classnames/bind";
import img1 from "./Purpose1.jpg";
import UseNowbtn from "../Button/UseNowbtn";

const cx = classNames.bind(styles);

function Purpose() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className="head-line">
          Linh hoạt tùy biến theo mục tiêu marketing của bạn
        </div>

        <div className="second-line">
          Tích hợp 100+ ứng dụng cao cấp giúp tối ưu chỉ số hiệu quả của landing
          page. Giờ đây, các hoạt động marketing của doanh nghiệp sẽ được triển
          khai nhanh chóng và hiệu quả hơn bao giờ hết
        </div>

        <div className={cx("line3")}>
          <button className="purpose-btn heavy active">
            Phát triển kinh doanh
          </button>

          <button className="purpose-btn heavy">Thu data tiềm năng</button>

          <button className="purpose-btn heavy no-mobile">
            Ra mắt bộ sưu tập
          </button>

          <button className="purpose-btn heavy no-mobile">
            Xây dựng thương hiệu
          </button>

          <button className="purpose-btn heavy no-mobile">
            Bùng nổ siêu sale
          </button>
        </div>

        <div className={cx("line4")}>
          <button className="purpose-btn heavy no-mobile">Mục tiêu khác</button>

          <button className="purpose-btn heavy no-mobile">
            Truyền thông sự kiện
          </button>
        </div>
      </div>

      <div className={cx("box")}>
        <div className={cx("box-content")}>
          <img src={img1} alt="img1"></img>

          <div className={cx("box-text")}>
            <div className={cx("box-headline")}>
              Tăng trưởng doanh số đa kênh
            </div>
            <div className={cx("box-line1")}>
              Sử dụng sales page để thuyết phục khách hàng ra quyết định đặt mua
              nhanh chóng, tối đa hóa tỉ lệ chuyển đổi từ quảng cáo và gia tăng
              doanh số đa kênh.
            </div>
            <div className={cx("box-line2")} style={{ fontWeight: 600 }}>
              Tối ưu hơn khi có các tính năng:
            </div>
            <div>
              Landing Page, Popup Upsell và Cross-sell, Sticky bar, <br></br>
              Countdown, Notify...
            </div>
            <div className={cx("usenowbtn")}>
              <UseNowbtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
