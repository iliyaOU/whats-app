import styles from "./App.module.scss";
import Navbar from "components/NavBar/NavBar";
import ContactsBlock from "components/ContactsBlock/ContactsBlock";
import MessagesBlock from "components/MessagesBlock/MessagesBlock";
import { useEffect, useState } from "react";
import DialogContext from "core/context/DialogContext";
import { AllDialogsType, Dialog } from "core/types/common";
import DialogsContext from "core/context/DialogsContext";
import api from "core/api/api";
import AllDialogsContext from "core/context/AllDialogsContentext";

const App: React.FunctionComponent<{}> = () => {
  const [currentDialog, setCurrentDialog] = useState<string | null>(null);
  const [allDialogs, setAllDialogs] = useState<AllDialogsType>({});
  const [dialogs, setDialogs] = useState<Array<Dialog>>([]);

  const handleChange = (dialogId: string) => {
    setCurrentDialog(dialogId);
  };

  const addDialog = (dialog: Dialog) => {
    setDialogs((prevDialogs: Array<Dialog>) => {
      if (
        prevDialogs.find(
          (findDialog) => findDialog.dialogId === dialog.dialogId
        )
      )
        return prevDialogs;

      return [dialog, ...prevDialogs];
    });
  };

  const addMessageToChat = (
    dialogId: string,
    messageText: string,
    type: "in" | "out"
  ) => {
    if (!dialogs.find((dialog) => dialogId === dialog.dialogId))
      addDialog({
        dialogId,
        phoneNumber: dialogId?.replace("@c.us", ""),
      });

    setAllDialogs((prevObject: AllDialogsType) => {
      const prevMessages = prevObject[dialogId] || [];

      return {
        ...prevObject,
        [dialogId]: [...prevMessages, { text: messageText, type }],
      };
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      api.getNotificationMessage().then((response) => {
        if (!response) return;
        addMessageToChat(
          response?.senderData?.chatId,
          response?.messageData.textMessageData.textMessage,
          "in"
        );
      });
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <AllDialogsContext.Provider
      value={{
        allDialogs,
        addMessageToChat,
      }}
    >
      <DialogsContext.Provider value={{ dialogs, addDialog }}>
        <DialogContext.Provider
          value={{ dialogId: currentDialog, changeDialogId: handleChange }}
        >
          <div className={styles.mainWrapper}>
            <div className={styles.topStripe}></div>
            <div className={styles.mainBlock}>
              <Navbar />
              <ContactsBlock />
              <MessagesBlock />
            </div>
          </div>
        </DialogContext.Provider>
      </DialogsContext.Provider>
    </AllDialogsContext.Provider>
  );
};

export default App;
