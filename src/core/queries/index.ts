import axios from "axios";

const API_URL = import.meta.env.API_URL || "https://1103.api.green-api.com";
const ID_INSTANCE =
  import.meta.env.ID_INSTANCE || "https://1103.media.green-api.com";
const API_TOKEN_INSTANCE =
  import.meta.env.API_TOKEN_INSTANCE ||
  "e1976e67849d4e3cbc8e9a715d67ada3c987bd8902064e39b5";

const sendMessage = (dialogId: string, message: string) => {
  axios.post(
    `${API_URL}/waInstance${ID_INSTANCE}/sendMessage/${API_TOKEN_INSTANCE}`,
    { chatId: `${dialogId}`, message }
  );
};

export default { sendMessage };
