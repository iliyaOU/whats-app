import EmptyDialog from "components/EmptyDialog/EmptyDialog";
import styles from "./Messages.module.scss";
type Props = {
  dialogId?: string;
};

function MessagesBlock({ dialogId }: Props) {
  return (
    <div className={styles.messageBlock}>
      {dialogId ? <></> : <EmptyDialog />}
    </div>
  );
}

export default MessagesBlock;
