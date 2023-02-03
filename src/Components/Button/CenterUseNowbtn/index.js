import styles from "./CenterUseNowBtn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CenterUseNowBtn() {
  return <button className={cx("usenow-btn")}>Sử dụng miễn phí ngay</button>;
}

export default CenterUseNowBtn;
