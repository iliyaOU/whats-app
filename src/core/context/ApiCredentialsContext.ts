import { createContext } from "react";
import api from "core/api/api";

const ApiContext = createContext({
  api: api.getApi({}),
} as { api: ReturnType<typeof api.getApi> });

export default ApiContext;
