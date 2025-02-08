import DefaultUserIcon from "icons/default-user-icon.svg";

import styles from "./ContactItem.module.scss";
import { cx } from "@emotion/css";
import { isNull } from "lodash";
import { useContext } from "react";
import DialogContext from "core/context/DialogContext";
import AllDialogsContext from "core/context/AllDialogsContentext";

type Props = {
  title: string;
  lastMessageDate: string;
  dialogId: string | null;
  onClick?: (dialogId: string) => void;
};

function ContactItem({ title, lastMessageDate, dialogId }: Props) {
  const { dialogId: currentDialogId, changeDialogId } =
    useContext(DialogContext);
  const { allDialogs } = useContext(AllDialogsContext);
  const currentDialogMessages = allDialogs[String(dialogId)];

  const handleClick = () => {
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
        <div className={styles.lastMessage}>
          {currentDialogMessages?.[currentDialogMessages.length - 1]?.text ||
            ""}
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
