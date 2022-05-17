import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import img from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-earth-africa" />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-circle-question" />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon="fa-solid fa-keyboard" />,
    title: "Keyboard shortcut",
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  //Handle
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //Handle change language
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 3000);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={img.logo} alt="tiktok" />
        </div>
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <h4 className={cx("search-label")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </WrapperPopper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              type="text"
              placeholder="Search account and video"
              spellCheck={false}
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
        </Tippy>

        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary>Log In</Button>

          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
