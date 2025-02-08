import axios from "axios";

const API_URL = import.meta.env.API_URL;
const ID_INSTANCE = import.meta.env.ID_INSTANCE;
const API_TOKEN_INSTANCE = import.meta.env.API_TOKEN_INSTANCE;

const sendMessage = (dialogId: string, message: string) => {
  axios.post(
    `${API_URL}/waInstance${ID_INSTANCE}/sendMessage/${API_TOKEN_INSTANCE}`,
    { chatId: `${dialogId}`, message }
  );
};

export default { sendMessage };
