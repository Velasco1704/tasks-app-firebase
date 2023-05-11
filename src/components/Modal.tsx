import { db } from "../config/firebase.config";
import { useContextTasks } from "../context";
import { doc, updateDoc } from "firebase/firestore";
import "../styles/Modal.scss";

export const Modal: React.FC = () => {
  const { modalState, setModalState } = useContextTasks();
  const handleUpdate = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateDoc(doc(db, "tasks", modalState.id), {
      title: modalState.title,
      description: modalState.description,
    });
    setModalState({ ...modalState, state: false });
  };

  return (
    <div className="modal__background">
      <div className="modal__container">
        <form className="modal__form" onSubmit={handleUpdate}>
          <div className="modal__inputs__container">
            <input
              className="modal__form__input"
              onChange={({ target }) =>
                setModalState({ ...modalState, title: target.value })
              }
              value={modalState.title}
              type="text"
            />
            <textarea
              className="modal__form__input modal__form__textarea"
              onChange={({ target }) =>
                setModalState({ ...modalState, description: target.value })
              }
              value={modalState.description}
            />
          </div>
          <div className="modal__buttons__container">
            <button
              className="modal__form__button form__save__button"
              type="submit"
            >
              SAVE
            </button>
            <button
              className="modal__form__button form__delete__button"
              onClick={() => setModalState({ ...modalState, state: false })}
              type="button"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
