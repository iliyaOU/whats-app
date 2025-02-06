import { Dialog } from "core/types/common";
import { createContext } from "react";

const DialogsContext = createContext({
  dialogs: [],
  addDialog: () => {},
} as { dialogs: Array<Dialog>; addDialog: (dialog: Dialog) => void });

export default DialogsContext;
