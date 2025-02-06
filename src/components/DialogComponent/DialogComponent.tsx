import { useContext } from "react";
import styles from "./DialogComponent.module.scss";
import DialogContext from "core/context/DialogContext";
import Message from "components/Message/Message";

function DialogComponent() {
  const { dialogId } = useContext(DialogContext);
  const messages = [
    "hello",
    "test",
    "check1",
    "check2",
    "check3",
    "check4",
    "check5",
    "check6",
  ];

  return (
    <div className={styles.dialogWrapper}>
      <div className={styles.header}>{dialogId}</div>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <Message text={message} type={index % 2 ? "in" : "out"} key={index} />
        ))}
      </div>
      <div className={styles.inputWrapper}>
        <input className={styles.input} placeholder="Введите сообщение..." />
      </div>
    </div>
  );
}

export default DialogComponent;
