import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import styles from "./DialogComponent.module.scss";
import DialogContext from "core/context/DialogContext";
import Message from "components/Message/Message";
import AllDialogsContext from "core/context/AllDialogsContentext";
import api from "core/api/api";

function DialogComponent() {
  const { dialogId } = useContext(DialogContext);
  const { allDialogs, addMessageToChat } = useContext(AllDialogsContext);
  const [messageString, setMessageString] = useState("");

  const messages = allDialogs[dialogId as string] || [];

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageString(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLocaleLowerCase() === "enter") {
      addMessageToChat(String(dialogId), messageString, "out");
      api.sendMessage(String(dialogId), messageString);
      setMessageString("");
    }
  };

  return (
    <div className={styles.dialogWrapper}>
      <div className={styles.header}>{dialogId}</div>
      <div className={styles.messages}>
        {messages.map(({ text, type }, index) => (
          <Message text={text} type={type} key={index} />
        ))}
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          value={messageString}
          onChange={handleChangeInput}
          placeholder="Введите сообщение..."
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default DialogComponent;
