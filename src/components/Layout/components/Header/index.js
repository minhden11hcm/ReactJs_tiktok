import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import img from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={img.logo} alt="tiktok" />
        </div>

        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search account and video"
            spellcheck={false}
          />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
          </button>
          <FontAwesomeIcon
            className={cx("loading")}
            icon="fa-solid fa-spinner"
          />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
