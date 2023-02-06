import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import {BsList} from "react-icons/bs"
import logo from "./logo.jpg";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className="nav-bar-no-color nav-bar-items">
          <img src={logo} alt="" className={cx("logo")}></img>
        </div>

        <div className={cx("header-navbar")}>
          <div className="nav-bar-no-color nav-bar-items no-mobile">Giải pháp</div>
          <div className="nav-bar nav-bar-items no-mobile">Công cụ</div>
          <a href="/" className="nav-bar heavy nav-bar-items no-mobile">Bảng giá</a>
          <a href="/" className="nav-bar nav-bar-items no-mobile">Tài liệu</a>
        </div>

        <div className="no-mobile">
          <button className="white-btn heavy nav-bar-items">Đăng nhập</button>
          <button className="primary-btn heavy nav-bar-items">Đăng ký</button>
        </div>

        <button className="no-desktop header-btn" style={{backgroundColor: "white"}}>
          <BsList />
        </button>
      </div>
    </div>
  );
}

export default Header;
