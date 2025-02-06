import DefaultUserIcon from "icons/default-user-icon.svg";

import styles from "./ContactItem.module.scss";
import { cx } from "@emotion/css";
import { isNull } from "lodash";
import { useContext } from "react";
import DialogContext from "core/context/DialogContext";

type Props = {
  title: string;
  lastMessage: string;
  lastMessageDate: string;
  dialogId: number | null;
  onClick?: (dialogId: number) => void;
};

function ContactItem({ title, lastMessage, lastMessageDate, dialogId }: Props) {
  const { dialogId: currentDialogId, changeDialogId } =
    useContext(DialogContext);

  const handleClick = () => {
    console.log({ dialogId, currentDialogId });
    if (!isNull(dialogId)) {
      changeDialogId(dialogId);
    }
  };

  return (
    <div
      className={cx(styles.contactItem, {
        [styles.contactItem_active]: dialogId === currentDialogId,
      })}
      onClick={handleClick}
    >
      <div>
        <DefaultUserIcon width="49px" height="49px" className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.contactText}>
          <span className={styles.title}>{title}</span>
          <div className={styles.lastMessageDate}>{lastMessageDate}</div>
        </div>
        <div className={styles.lastMessage}>{lastMessage}</div>
      </div>
    </div>
  );
}

export default ContactItem;
