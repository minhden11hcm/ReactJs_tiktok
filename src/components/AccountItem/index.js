import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b3b1b0c9af6f2a83c5f3f2411bd997ea~c5_100x100.jpeg?x-expires=1652608800&x-signature=YTtaUwgco9ffqiSHjEPnuvjaQqc%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("username")}>
          <span>ngocvanw</span>
          <FontAwesomeIcon className={cx("icon")} icon="fa-solid fa-circle-check" />
        </h4>
        <span className={cx("name")}>Dăn💫</span>
      </div>
    </div>
  );
}

export default AccountItem;
