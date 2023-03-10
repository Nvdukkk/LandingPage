import styles from "./Services.module.scss";
import classNames from "classnames/bind";
import { IoShirtOutline } from "react-icons/io5";
import UseNowbtn from "../Button/UseNowbtn";
import img1 from "./service1.jpg";

const cx = classNames.bind(styles);

function Services() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className="head-line">Tăng trưởng doanh số thương mại điện tử</div>
        <div className={cx("line2")}>
          Bằng cách đưa khách hàng từ mọi nơi về landing page đặt hàng, bạn sẽ
          rút ngắn quá trình tư vấn, tối ưu chi phí vận hành để tập trung tăng
          trưởng doanh số đa kênh
        </div>

        <div className={cx("line3")}>
          <button className={cx("active")}>
            <IoShirtOutline className={cx("icon")} />
            <br></br>
            <div style={{ width: 160 }}>Thời trang - Mỹ phẩm</div>
          </button>

          <button>
            <IoShirtOutline className={cx("icon")} />
            <br></br>
            <div style={{ width: 160 }}>Thời trang - Mỹ phẩm</div>
          </button>
          <button>
            <IoShirtOutline className={cx("icon")} />
            <br></br>
            <div style={{ width: 160 }}>Thời trang - Mỹ phẩm</div>
          </button>
          <button>
            <IoShirtOutline className={cx("icon")} />
            <br></br>
            <div style={{ width: 160 }}>Thời trang - Mỹ phẩm</div>
          </button>
          <button>
            <IoShirtOutline className={cx("icon")} />
            <br></br>
            <div style={{ width: 160 }}>Thời trang - Mỹ phẩm</div>
          </button>
        </div>

        <div className={cx("box")}>
          <img src={img1} alt="img1"></img>
          <div className={cx("box-text")}>
            <div className={cx("box-headline")}>Thời trang, Mỹ phẩm</div>
            <div className={cx("box-line1")}>
              Ứng dụng khi: Chạy chương trình ưu đãi, minigame tặng quà, giới
              thiệu sản phẩm mới, giới thiệu cửa hàng, tuyển đại lý - cộng tác
              viên,...
            </div>
            <div className={cx("use-btn")}>
              <UseNowbtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
