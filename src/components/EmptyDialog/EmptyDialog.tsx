import Button from "core/components/Button/Button";
import generalStyles from "generalStyles";
import styles from "./EmptyDialog.module.scss";
import Lock from "icons/lock-icon.svg";
import messagesPlaceholder from "../../core/images/messagesPlaceholder.png";

function EmptyDialog() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={messagesPlaceholder} alt="placeholder" />
        </div>
        <h1>Скачайте WhatsApp для Mac</h1>
        <div>
          Скачайте новое оптимизированное приложение для Mac с поддержкой
          функции звонков.
        </div>
        <Button className={generalStyles.mt32}>Установить из App Store</Button>
      </div>
      <div className={styles.footer}>
        <Lock height="12" width="10" /> Ваши личные сообщения защищены сквозным
        шифрованием
      </div>
    </div>
  );
}

export default EmptyDialog;
