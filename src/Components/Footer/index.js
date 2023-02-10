import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import logobocongthuong from "./logobocongthuong.jpg";
import logo from "./logo.jpg";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("line1")}>
          <img src={logo} alt=""></img>
        </div>
        <div className={cx("line2")}>
          <div className={cx("col1")}>
            <div className={cx("hyper-line")}>
              CÔNG TY CỔ PHẦN CÔNG NGHỆ LADIPAGE VIỆT NAM
            </div>
            <div>
              Địa chỉ: Tầng 24, Tòa nhà MD Complex, 68 Nguyễn Cơ Thạch, Hà Nội
            </div>
            <div>Email: hotro@ladipage.vn - Website: https://ladipage.vn</div>
            <div>
              Hotline: 097 2220777 (Từ 8h00 – 22h00 các ngày từ thứ 2 đến Chủ
              nhật)
            </div>
            <div>Số giấy chứng nhận đăng ký kinh doanh: 0107613016</div>
            <div>
              Ngày cấp: 27/10/2016. Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà
              Nội
            </div>
            <div className={cx("hyper-line")}>
              ĐẠI DIỆN HCM: CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN IM
            </div>
            <div>18 Trần Thiện Chánh, Phường 12, Quận 10, TP. Hồ Chí Minh</div>
            <div>Hotline: 1900 636 040</div>
          </div>
          
          <div className={cx("responsive")}>
            <div className={cx("col2")}>
              <div className={cx("hyper-line")}>Tài liệu</div>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>

              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
            </div>
            <div className={cx("col3")}>
              <div className={cx("hyper-line")}>LadiPage</div>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
              <a href="#">Kho giao diện</a>
            </div>
          </div>
        </div>

        <div className={cx("line3")}>
          <div className={cx("center-line")}>
            CÔNG TY CỔ PHẦN CÔNG NGHỆ LADIPAGE VIỆT NAM
          </div>
          <div className={cx("icon")}>
            <span>
              <img src={logo} alt=""></img>
              <img src={logo} alt=""></img>
            </span>
            <span>
              <img src={logo} alt=""></img>
              <img src={logo} alt=""></img>
            </span>
            <span>
              <img src={logo} alt=""></img>
              <img src={logo} alt=""></img>
            </span>
          </div>
          <div className={cx("presented-by")}>
            <img src={logobocongthuong} alt=""></img>
            <div>©2022 All rights reserved LadiPage Vietnam</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
