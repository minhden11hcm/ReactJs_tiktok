import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as WrapperPopper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
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
