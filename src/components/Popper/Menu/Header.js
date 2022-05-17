import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <button className={cx("btn-back")} onClick={onBack}>
        <FontAwesomeIcon icon="fa-solid fa-angle-left" />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}

export default Header;
