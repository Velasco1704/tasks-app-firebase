import { createContext, useContext, useState } from "react";
import { ModalState } from "../interface/modalState.interface";
import { ContextTasks } from "../interface/context.interface";

const Context = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useContextTasks = () => {
  const context = useContext(Context);
  if (!context) throw new Error("No TasksProvider");
  return context as ContextTasks;
};

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalState>({
    state: false,
    id: "",
    title: "",
    description: "",
  });
  return (
    <Context.Provider value={{ modalState, setModalState }}>
      {children}
    </Context.Provider>
  );
};
