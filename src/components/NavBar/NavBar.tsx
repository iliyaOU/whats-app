import styles from "./NavBar.module.scss";
import generalStyles from "generalStyles";
import MessageIcon from "icons/message-icon.svg";
import StatusIcon from "icons/status-icon.svg";
import CommunityIcon from "icons/community-icon.svg";
import SettingsIcon from "icons/settings-icon.svg";
import DefaultUserIcon from "icons/default-user-icon.svg";
import ButtonWithIcon from "core/components/ButtonWithIcon/ButtonWithIcon";

function Navbar({}) {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__icons_block}>
        <ButtonWithIcon active>
          <MessageIcon className={generalStyles.iconSmall} />
        </ButtonWithIcon>
        <ButtonWithIcon>
          <StatusIcon className={generalStyles.iconSmall} />
        </ButtonWithIcon>
        <ButtonWithIcon>
          <CommunityIcon className={generalStyles.iconSmall} />
        </ButtonWithIcon>
      </div>
      <div className={styles.navbar__icons_block}>
        <ButtonWithIcon>
          <SettingsIcon className={generalStyles.iconSmall} />
        </ButtonWithIcon>
        <ButtonWithIcon className={generalStyles.p0}>
          <DefaultUserIcon className={generalStyles.iconMedium} />
        </ButtonWithIcon>
      </div>
    </div>
  );
}

export default Navbar;
