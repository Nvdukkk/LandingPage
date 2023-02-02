import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>

        <div className={cx("line1")}> ladipage</div>
        <div className={cx("hyper-line heavy")}>CÔNG TY CỔ PHẦN CÔNG NGHỆ LADIPAGE VIỆT NAM</div>
    
      </div>
    </div>
  );
}

export default Footer;