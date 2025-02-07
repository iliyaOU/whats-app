import axios from "axios";
import { NotificationResponse } from "./types";

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN_INSTANCE = import.meta.env.VITE_API_TOKEN_INSTANCE;
const ID_INSTANCE = import.meta.env.VITE_ID_INSTANCE;

const getNotificationMessage = async () => {
  const notificationResponse = await axios.get(
    `${API_URL}/waInstance${ID_INSTANCE}/receiveNotification/${API_TOKEN_INSTANCE}`
  );
  const notificationData: NotificationResponse = notificationResponse?.data;

  if (!notificationData?.receiptId) return null;

  await axios.delete(
    `${API_URL}/waInstance${ID_INSTANCE}/deleteNotification/${API_TOKEN_INSTANCE}/${notificationData.receiptId}`
  );

  if (notificationData.body.typeWebhook !== "incomingMessageReceived")
    return getNotificationMessage();

  return notificationData.body;
};

const sendMessage = (chatId: string, message: string) => {
  return axios.post(
    `${API_URL}/waInstance${ID_INSTANCE}/sendMessage/${API_TOKEN_INSTANCE}`,
    { chatId, message }
  );
};

export default { getNotificationMessage, sendMessage };
