import styles from "./SubFooter.module.scss";
import classNames from "classnames/bind";
import CenterUseNowBtn from "../Button/CenterUseNowbtn";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const cx = classNames.bind(styles);

function SubFooter() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("text")}>
          <div className="head-line">
            Tối đa hóa hiệu quả marketing cùng
            400,000+ khách hàng của chúng tôi
          </div>
        </div>
        <div style={{marginBottom : 10}}>
          <CenterUseNowBtn />
        </div>
        <a href="/">
          <HiOutlineChatBubbleLeftRight /> Livechat để được tư vấn ngay
        </a>
      </div>
    </div>
  );
}

export default SubFooter;
