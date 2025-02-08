import axios from "axios";
import { ApiCredentials, NotificationResponse } from "./types";

const getApi = (apiCredentials: ApiCredentials) => {
  const API_URL = apiCredentials.url;
  const API_TOKEN_INSTANCE = apiCredentials.token_instance;
  const ID_INSTANCE = apiCredentials.id_instance;

  const getNotificationMessage = async () => {
    const notificationResponse = await axios.get(
      `${API_URL}/waInstance${ID_INSTANCE}/receiveNotification/${API_TOKEN_INSTANCE}`
    );
    const notificationData: NotificationResponse = notificationResponse?.data;

    if (!notificationData?.receiptId) return null;

    await axios.delete(
      `${API_URL}/waInstance${ID_INSTANCE}/deleteNotification/${API_TOKEN_INSTANCE}/${notificationData.receiptId}`
    );

    if (notificationData.body.typeWebhook === "incomingMessageReceived")
      return notificationData.body;

    return null;
  };

  const sendMessage = (chatId: string, message: string) => {
    return axios.post(
      `${API_URL}/waInstance${ID_INSTANCE}/sendMessage/${API_TOKEN_INSTANCE}`,
      { chatId, message }
    );
  };

  return { getNotificationMessage, sendMessage };
};

export default { getApi };
