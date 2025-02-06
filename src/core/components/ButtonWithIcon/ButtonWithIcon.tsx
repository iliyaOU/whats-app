import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { css, cx } from "@emotion/css";

import styles from "./ButtonWithIcon.module.scss";
import { isUndefined } from "lodash";

type Props = {
  onClick?: () => void;
  active?: boolean;
  width?: string;
  height?: string;
  className?: string;
};

function ButtonWithIcon({
  onClick,
  active,
  width,
  height,
  children,
  className,
}: PropsWithChildren<Props & ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      onClick={onClick}
      className={cx(
        styles.buttonWithIcon,
        {
          [styles.active]: !!active,
          [css`
            width: ${width};
          `]: !isUndefined(width),
          [css`
            height: ${height};
          `]: !isUndefined(width),
        },
        className
      )}
    >
      {children}
    </button>
  );
}

export default ButtonWithIcon;
