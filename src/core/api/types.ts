export type NotificationResponse = {
  receiptId: number;
  body: {
    typeWebhook: "outgoingMessageStatus" | "incomingMessageReceived";
    chatId: string;
    instanceData: {
      idInstance: number;
      wid: string;
      typeInstance: "whatsapp";
    };
    senderData: {
      chatId: string;
      chatName: string;
      sender: string;
      senderName: string;
      senderContactName: string;
    };
    messageData: {
      typeMessage: string;
      textMessageData: { textMessage: string };
    };
    timestamp: number;
    idMessage: string;
    status: "noAccount";
    sendByApi: boolean;
  };
};
