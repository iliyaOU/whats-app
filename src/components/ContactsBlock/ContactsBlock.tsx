import ButtonWithIcon from "core/components/ButtonWithIcon/ButtonWithIcon";
import NewChatIcon from "icons/new-chat-icon.svg";
import ShortDropdownIcon from "icons/short-dropdown-icon.svg";

import generalStyles from "generalStyles";
import styles from "./ContactsBlock.module.scss";
import SearchInput from "core/components/SearchInput/SearchInput";
import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import Badge from "components/Badge/Badge";
import ContactItem from "components/ContactItem/ContactItem";
import Button from "core/components/Button/Button";
import { cx } from "@emotion/css";

import DialogsContext from "core/context/DialogsContext";
import DialogContext from "core/context/DialogContext";

function ContactsBlock() {
  const [search, setSearch] = useState<null | string>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEnterPhone, setIsEnterPhone] = useState(false);
  const { dialogs, addDialog } = useContext(DialogsContext);
  const { changeDialogId } = useContext(DialogContext);

  const handleSearch = (newValue: string) => {
    setSearch(newValue);
  };

  const handleChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleCreateChat = () => {
    addDialog({
      dialogId: `${phoneNumber}@c.us`,
      phoneNumber,
    });
    changeDialogId(`${phoneNumber}@c.us`);
    setPhoneNumber("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLocaleLowerCase() === "enter") handleCreateChat();
  };

  return (
    <div className={styles.contactsBlock}>
      <div>
        <div className={styles.contactsHeader}>
          {isEnterPhone ? (
            <div className={cx(generalStyles.dFlex, generalStyles.gap8)}>
              <input
                type="tel"
                placeholder="Телефонный номер"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
                onKeyDown={handleKeyDown}
              />
              <Button onClick={handleCreateChat}>Создать чат</Button>
            </div>
          ) : (
            <h1>Чаты</h1>
          )}
          <div className={styles.icons}>
            <ButtonWithIcon>
              <NewChatIcon
                onClick={() => {
                  setIsEnterPhone((prevPhone) => !prevPhone);
                }}
              />
            </ButtonWithIcon>
            <ButtonWithIcon>
              <ShortDropdownIcon />
            </ButtonWithIcon>
          </div>
        </div>
        <div>
          <div className={styles.searchLine}>
            <SearchInput value={search} onChange={handleSearch} />
          </div>
          <div className={styles.badgesLine}>
            <Badge label="Все" active />
            <Badge label="Непрочитанное" />
            <Badge label="Избранное" />
            <Badge label="Группы" />
          </div>
          <div className={styles.contacts}>
            {dialogs.map((dialog) => (
              <ContactItem
                key={dialog.dialogId}
                title={dialog.phoneNumber}
                lastMessageDate="Сейчас"
                dialogId={dialog.dialogId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsBlock;
