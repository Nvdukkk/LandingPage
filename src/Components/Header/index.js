import styles from './Header.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header() {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
            <div className="nav-bar-no-color nav-bar-items">
                ladipage
            </div>

            <div className={cx("header-navbar")}>
                <div className="nav-bar-no-color nav-bar-items">
                    Giải pháp
                </div>
                <div className="nav-bar nav-bar-items">
                    Công cụ
                </div>
                <a className="nav-bar heavy nav-bar-items">
                    Bảng giá
                </a>
                <a className="nav-bar nav-bar-items">
                    Tài liệu
                </a>
            </div>
            
            <div>
                <button className="white-btn heavy nav-bar-items">
                    Đăng nhập
                </button>
                <button className="primary-btn heavy nav-bar-items">
                    Đăng ký
                </button>
            </div>
        </div>
        
      </div>
    );
  }
  
export default Header;