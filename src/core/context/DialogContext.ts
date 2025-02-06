import { createContext } from "react";

const DialogContext = createContext({
  dialogId: null,
  changeDialogId: () => {},
} as { dialogId: string | null; changeDialogId: (dialogId: string) => void });

export default DialogContext;
