import ButtonWithIcon from "core/components/ButtonWithIcon/ButtonWithIcon";
import NewChatIcon from "icons/new-chat-icon.svg";
import ShortDropdownIcon from "icons/short-dropdown-icon.svg";

import generalStyles from "generalStyles";
import styles from "./ContactsBlock.module.scss";
import SearchInput from "core/components/SearchInput/SearchInput";
import { ChangeEvent, useContext, useState } from "react";
import Badge from "components/Badge/Badge";
import ContactItem from "components/ContactItem/ContactItem";
import Button from "core/components/Button/Button";
import { cx } from "@emotion/css";

import queries from "queries";
import DialogsContext from "core/context/DialogsContext";
import DialogContext from "core/context/DialogContext";

function ContactsBlock() {
  const [search, setSearch] = useState<null | string>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEnterPhone, setIsEnterPhone] = useState(false);
  const { addDialog, dialogs } = useContext(DialogsContext);
  const { changeDialogId } = useContext(DialogContext);

  const handleSearch = (newValue: string) => {
    setSearch(newValue);
  };

  const handleChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
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
              />
              <Button
                onClick={() => {
                  addDialog({
                    lastMessage: "",
                    dialogId: `${phoneNumber}@c.us`,
                    phoneNumber,
                  });
                  changeDialogId(`${phoneNumber}@c.us`);
                }}
              >
                Создать чат
              </Button>
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
                title={dialog.phoneNumber}
                lastMessage=""
                lastMessageDate="Вчера"
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
