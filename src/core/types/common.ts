export type Dialog = {
  dialogId: string;
  phoneNumber: string;
};

export type AllDialogsType = {
  [chatId in string]: Array<{ text: string; type: "in" | "out" }>;
};
