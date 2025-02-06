import styles from "./App.module.scss";
import Navbar from "components/NavBar/NavBar";
import ContactsBlock from "components/ContactsBlock/ContactsBlock";
import MessagesBlock from "components/MessagesBlock/MessagesBlock";
import { useState } from "react";
import DialogContext from "core/context/DialogContext";

const App: React.FunctionComponent<{}> = () => {
  const [currentDialog, setCurrentDialog] = useState<number | null>(null);

  const handleChange = (dialogId: number) => {
    setCurrentDialog(dialogId);
  };

  return (
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
  );
};

export default App;
