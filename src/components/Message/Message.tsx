import { cx } from "@emotion/css";
import styles from "./Message.module.scss";

type Props = {
  text: string;
  type: "in" | "out";
};

function Message({ text, type }: Props) {
  return (
    <div
      className={cx(styles.messageWrapper, {
        [styles.in]: type === "in",
        [styles.out]: type === "out",
      })}
    >
      <span
        className={cx(styles.messageDecor, {
          [styles.in]: type === "in",
          [styles.out]: type === "out",
        })}
      />
      <div
        className={cx(styles.message, {
          [styles.in]: type === "in",
          [styles.out]: type === "out",
        })}
      >
        {text}
      </div>
    </div>
  );
}

export default Message;
