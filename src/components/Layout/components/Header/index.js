import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import img from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
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

var currentUser = true;
function Header() {
  const menuUser = [
    {
      icon: <FontAwesomeIcon icon="fa-regular fa-user" />,
      title: "View Profile",
      to: "/@ngocvanw",
    },
    {
      icon: <FontAwesomeIcon icon="fa-brands fa-tiktok" />,
      title: "Get coins",
      to: "/coins",
    },
    {
      icon: <FontAwesomeIcon icon="fa-solid fa-gear" />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
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
        <HeadlessTippy
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
        </HeadlessTippy>

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 700]} content="Upload Video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-up" />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log In</Button>
            </>
          )}

          <Menu
            items={currentUser ? menuUser : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b3b1b0c9af6f2a83c5f3f2411bd997ea~c5_100x100.jpeg?x-expires=1652929200&x-signature=aKVa29dL%2FAAFKlVL7q5lIzMstao%3D"
                alt="Dăn"
                className={cx("user-avatar")}
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
