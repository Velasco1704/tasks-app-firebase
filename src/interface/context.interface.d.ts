import { ModalState } from "./modalState.interface";

export interface ContextTasks {
  modalState: ModalState;
  setModalState: (value: ModalState) => void;
}
