import styles from "./App.module.scss";
import Navbar from "components/NavBar/NavBar";
import ContactsBlock from "components/ContactsBlock/ContactsBlock";
import MessagesBlock from "components/MessagesBlock/MessagesBlock";
import { useState } from "react";
import DialogContext from "core/context/DialogContext";
import { Dialog } from "core/types/common";
import DialogsContext from "core/context/DialogsContext";

const App: React.FunctionComponent<{}> = () => {
  const [currentDialog, setCurrentDialog] = useState<string | null>(null);
  const [dialogs, setDialogs] = useState<Array<Dialog>>([]);

  const handleChange = (dialogId: string) => {
    setCurrentDialog(dialogId);
  };

  const addDialog = (dialog: Dialog) => {
    setDialogs((prevDialogs) => [dialog, ...prevDialogs]);
  };

  return (
    <DialogsContext.Provider
      value={{
        dialogs,
        addDialog,
      }}
    >
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
  );
};

export default App;
