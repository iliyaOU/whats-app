import { createContext } from "react";
import { AllDialogsType } from "core/types/common";

const AllDialogsContext = createContext({
  allDialogs: {},
  addMessageToChat: () => {},
} as { allDialogs: AllDialogsType; addMessageToChat: (dialogId: string, message: string, type: "in" | "out") => void });

export default AllDialogsContext;
