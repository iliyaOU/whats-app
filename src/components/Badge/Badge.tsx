import { JSX } from "react";

import styles from "./Badge.module.scss";
import { cx } from "@emotion/css";

type Props = {
  label: string | JSX.Element;
  className?: string;
  active?: boolean;
};

function Badge({ label, className, active }: Props) {
  return (
    <button
      className={cx(styles.badge, className, { [styles.active]: !!active })}
    >
      {label}
    </button>
  );
}

export default Badge;
