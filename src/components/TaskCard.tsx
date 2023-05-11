import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { Tasks } from "../interface/tasks.interface";
import { useContextTasks } from "../context";
import "../styles/TaskCard.scss";

export const TaskCard: React.FC<Tasks> = ({ id, title, description }) => {
  const { setModalState } = useContextTasks();
  const handleDelete = async (id: string) =>
    await deleteDoc(doc(db, "tasks", id));

  return (
    <div className="taskCard__container">
      <div className="taskCard__content__container">
        <h2 className="taskCard__h2 h2__title">{title}</h2>
        <h2 className="taskCard__h2 h2__description">{description}</h2>
      </div>
      <div className="taskCard__buttons__container">
        <button
          className="taskCard__button delete__button"
          onClick={() => handleDelete(id)}
          type="button"
        >
          DELETE
        </button>
        <button
          className="taskCard__button update__button"
          onClick={() => setModalState({ state: true, id, title, description })}
          type="button"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};
