import styles from './CustomerLists.module.scss'
import classNames from "classnames/bind";
import f88 from './f88.jpg'

const cx = classNames.bind(styles);

function CustomerLists() {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("content")}>
            <div className={cx("text")}>
            Tin dùng bởi <span style={{ fontWeight:"bold" }}>485.243+ </span> 
            khách hàng, <span style={{ fontWeight:"bold" }}>5.388.078+ </span> 
            Landing Page được khởi tạo
            </div>

            <div className={cx("logos")}>
                <img
                src={f88}
                alt="f88"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            </div>
            

            <div className={cx("logos")}>
                <img
                src={f88}
                alt="f88"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            
                <img
                src={f88}
                alt="f88"
                className="no-mobile"
                ></img>
            </div>
            {/* TRUYỀN PROPS */}
        </div>
      </div>
    );
  }
  
export default CustomerLists;