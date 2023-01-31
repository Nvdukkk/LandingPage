import styles from './Introduce.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Introduce() {
    return (
      <div className={cx("wrapper")}>
        

        <div className={cx("background-img")}  >
            
            <div className={cx("content")}>

                <div className={cx("line1")}>
                    Landing Page Platform

                </div>

                <div className={cx("line2")}>
                #1 Nền tảng landing page cho <br></br>các hoạt động quảng cáo
                </div>
            
                <div className={cx("line3")}>
                Hiện thực hóa các mục tiêu marketing và tối đa hóa chuyển đổi

                </div>

                <div className={cx("line4")}>
                Không cần lập trình • Miễn phí hosting • Bảo mật dữ liệu
                </div>

                <div className={cx("line5")}>

                    <button className='white-btn heavy'>
                        Nhận tư vấn qua Livechat
                    </button>

                    <button className='primary-btn heavy'>
                        Sử dụng miễn phí ngay
                    </button>
                </div>
            </div>
        </div>

      </div>
    );
  }
  
export default Introduce;