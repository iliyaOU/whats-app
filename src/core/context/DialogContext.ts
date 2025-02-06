import { createContext } from "react";

const DialogContext = createContext({
  dialogId: null,
  changeDialogId: () => {},
} as { dialogId: number | null; changeDialogId: (dialogId: number) => void });

export default DialogContext;
