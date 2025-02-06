import ButtonWithIcon from "core/components/ButtonWithIcon/ButtonWithIcon";
import NewChatIcon from "icons/new-chat-icon.svg";
import ShortDropdownIcon from "icons/short-dropdown-icon.svg";

import generalStyles from "generalStyles";
import styles from "./ContactsBlock.module.scss";
import SearchInput from "core/components/SearchInput/SearchInput";
import { useState } from "react";
import Badge from "components/Badge/Badge";
import ContactItem from "components/ContactItem/ContactItem";
import Button from "core/components/Button/Button";
import { cx } from "@emotion/css";

function ContactsBlock() {
  const [search, setSearch] = useState<null | string>(null);
  const [isEnterPhone, setIsEnterPhone] = useState(false);

  const handleSearch = (newValue: string) => {
    setSearch(newValue);
  };

  return (
    <div className={styles.contactsBlock}>
      <div>
        <div className={styles.contactsHeader}>
          {isEnterPhone ? (
            <div className={cx(generalStyles.dFlex, generalStyles.gap8)}>
              <input type="tel" placeholder="Телефонный номер" />
              <Button onClick={() => {}}>Написать</Button>
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
            <ContactItem
              title="Contact1"
              lastMessage="Message"
              lastMessageDate="Вчера"
              dialogId={1}
            />
            <ContactItem
              title="Contact2"
              lastMessage="longlongmessagelonglongmessagelonglongmessagelonglongmessagelonglongmessagelonglongmessagelonglongmessagelonglongmessagelonglongmessage"
              lastMessageDate="Вчера"
              dialogId={2}
            />
            <ContactItem
              title="Contact3"
              dialogId={3}
              lastMessage="Message33333333333333333333333333333"
              lastMessageDate="Вчера"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsBlock;
