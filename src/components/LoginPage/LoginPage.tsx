import { Dispatch, SetStateAction, useState } from "react";
import styles from "./LoginPage.module.scss";
import { ApiCredentials } from "core/api/types";

type Props = {
  setApiCredentials: Dispatch<SetStateAction<ApiCredentials>>;
};

function LoginPage({ setApiCredentials }: Props) {
  const [formFields, setFormFields] = useState<ApiCredentials>({});

  const handleSubmit = () => {
    setApiCredentials(formFields);
  };

  const handleChangeField = (fieldName: string, newValue: string) => {
    setFormFields((prevFields) => ({ ...prevFields, [fieldName]: newValue }));
  };

  return (
    <div className={styles.loginPage}>
      <h2>Авторизация</h2>
      <div className={styles.loginForm}>
        <div className={styles.formInputs}>
          <div className={styles.formInput}>
            <label>API_URL</label>
            <input
              placeholder="API_URL"
              value={formFields.url}
              onChange={(e) => handleChangeField("url", e.target.value)}
              type="password"
            />
          </div>
          <div className={styles.formInput}>
            <label>API_TOKEN_INSTANCE</label>
            <input
              placeholder="API_TOKEN_INSTANCE"
              value={formFields.token_instance}
              onChange={(e) =>
                handleChangeField("token_instance", e.target.value)
              }
              type="password"
            />
          </div>
          <div className={styles.formInput}>
            <label>ID_INSTANCE</label>
            <input
              value={formFields.id_instance}
              placeholder="ID_INSTANCE"
              onChange={(e) => handleChangeField("id_instance", e.target.value)}
              type="password"
            />
          </div>
        </div>
        <button onClick={handleSubmit} className={styles.submitButton}>
          login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
