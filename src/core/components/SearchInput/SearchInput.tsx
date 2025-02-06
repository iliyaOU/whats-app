import { cx } from "@emotion/css";
import styles from "./SearchInput.module.scss";
import { ChangeEvent } from "react";
import { isNull } from "lodash";
import SearchIcon from "icons/search-icon.svg";

type Props = {
  value: string | null;
  onChange: (newValue: string) => void;
  className?: string;
};

function SearchInput({ value, onChange, className }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={cx(styles.searchInput, className)}>
      <SearchIcon width="26px" height="26px" className={styles.icon} />
      <input
        type="text"
        value={isNull(value) ? "Поиск" : value}
        onChange={handleChange}
        className={cx(styles.searchInput, className)}
      />
    </div>
  );
}

export default SearchInput;
