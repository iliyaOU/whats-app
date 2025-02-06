import EmptyDialog from "components/EmptyDialog/EmptyDialog";
import styles from "./Messages.module.scss";
import { useContext } from "react";
import DialogContext from "core/context/DialogContext";
import DialogComponent from "components/DialogComponent/DialogComponent";

function MessagesBlock() {
  const { dialogId } = useContext(DialogContext);

  return (
    <div className={styles.messageBlock}>
      {dialogId ? <DialogComponent /> : <EmptyDialog />}
    </div>
  );
}

export default MessagesBlock;
