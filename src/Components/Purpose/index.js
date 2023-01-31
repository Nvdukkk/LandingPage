import styles from './Purpose.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Purpose() {
    return (
      <div className={cx("wrapper")}>
           <div className={cx("content")}>

                <div className={cx("line1")}>
                Linh hoạt tùy biến theo mục tiêu <br></br> marketing của bạn

                </div>

                <div className={cx("line2")}>
                Tích hợp 100+ ứng dụng cao cấp giúp tối ưu chỉ số hiệu quả của landing page. Giờ đây,
                <br></br> các hoạt động marketing của doanh nghiệp sẽ được triển khai nhanh chóng và hiệu quả
                <br></br> hơn bao giờ hết
                </div>
            
                <div className={cx("line3")}>
                    <button className='purpose-btn heavy active'>
                    Phát triển kinh doanh
                    </button>

                    <button className='purpose-btn heavy'>
                    Thu data tiềm năng
                    </button>

                    <button className='purpose-btn heavy'>
                    Ra mắt bộ sưu tập
                    </button>

                    <button className='purpose-btn heavy'>
                    Xây dựng thương hiệu
                    </button>

                    <button className='purpose-btn heavy'>
                    Bùng nổ siêu sale
                    </button>

                </div>

                <div className={cx("line4")}>
                    <button className='purpose-btn heavy'>
                    Mục tiêu khác
                    </button>

                    <button className='purpose-btn heavy'>
                    Truyền thông sự kiện
                    </button>
                </div>
            </div>
            <div className={cx("box")}>
                

            </div>
    </div>

      
    );
  }
  
export default Purpose;