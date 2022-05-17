import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [],onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParrent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParrent) {
              setHistory((prev) => [...prev, item.children]);
            }else{
                onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      animation={false}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx("menu-wrapper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() =>
                  setHistory((prev) => prev.splice(prev.length - 1, 1))
                }
              />
            )}
            {renderItems()}
          </WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
