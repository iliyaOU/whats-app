import styles from "./App.module.scss";
import Navbar from "components/NavBar/NavBar";
import ContactsBlock from "components/ContactsBlock/ContactsBlock";
import MessagesBlock from "components/MessagesBlock/MessagesBlock";
import { useCallback, useEffect, useState } from "react";
import DialogContext from "core/context/DialogContext";
import { AllDialogsType, Dialog } from "core/types/common";
import DialogsContext from "core/context/DialogsContext";
import queries from "core/api/api";
import AllDialogsContext from "core/context/AllDialogsContentext";
import { ApiCredentials } from "core/api/types";
import LoginPage from "components/LoginPage/LoginPage";
import ApiContext from "core/context/ApiCredentialsContext";

const App: React.FunctionComponent<{}> = () => {
  const [apiCredentials, setApiCredentials] = useState<ApiCredentials>({
    url: import.meta.env.VITE_API_URL,
    token_instance: import.meta.env.VITE_API_TOKEN_INSTANCE,
    id_instance: import.meta.env.VITE_ID_INSTANCE,
  });
  const [api, setApi] = useState<ReturnType<typeof queries.getApi>>(
    queries.getApi(apiCredentials)
  );
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

  const addMessageToChat = useCallback(
    (dialogId: string, messageText: string, type: "in" | "out") => {
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
    },
    [dialogs]
  );

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (
      !apiCredentials.url ||
      !apiCredentials.id_instance ||
      !apiCredentials.token_instance
    ) {
      intervalId && clearInterval(intervalId);
    } else {
      intervalId = setInterval(() => {
        api.getNotificationMessage().then((response) => {
          if (!response) return;
          addMessageToChat(
            response?.senderData?.chatId,
            response?.messageData.textMessageData.textMessage,
            "in"
          );
        });
      }, 5000);
    }
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [apiCredentials, addMessageToChat, api]);

  useEffect(() => {
    setApi(queries.getApi(apiCredentials));
  }, [apiCredentials]);

  if (
    !apiCredentials.url ||
    !apiCredentials.id_instance ||
    !apiCredentials.token_instance
  )
    return <LoginPage setApiCredentials={setApiCredentials} />;

  return (
    <ApiContext.Provider value={{ api }}>
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
    </ApiContext.Provider>
  );
};

export default App;
