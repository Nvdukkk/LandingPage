import styles from "./Tools.module.scss";
import classNames from "classnames/bind";
import tool1 from "./Tool1.jpg";

const cx = classNames.bind(styles);

function Tools() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("line1")}>
          Giúp bạn thu về nhiều khách hàng hơn từ Tiktok hay bất cứ đâu
        </div>
        <div className={cx("line2")}>
          Bộ 10 công cụ tối đa hóa chuyển đổi của LadiPage sẽ khiến khách hàng
          tin tưởng lựa chọn thương hiệu của bạn ngay từ lần đầu tiên truy cập
          landing page
        </div>

        <div className={cx("line3")}>
          <button>
            <img src={tool1} alt="tool1"></img>
          </button>

          <button>
            <img src={tool1} alt="tool1"></img>
          </button>

          <button>
            <img src={tool1} alt="tool1"></img>
          </button>

          <button>
            <img src={tool1} alt="tool1"></img>
          </button>

          
          
        </div>

        <div className={cx("line3")}>
          <button>
            <img src={tool1} alt="tool1"></img>
          </button>

          <button>
            <img src={tool1} alt="tool1"></img>
          </button>

          <button>
            <img src={tool1} alt="tool1"></img>
          </button>

          <button>
            <img src={tool1} alt="tool1"></img>
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default Tools;
