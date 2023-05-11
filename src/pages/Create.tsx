import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";
import "../styles/Create.scss";

export const Create: React.FC = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addDoc(collection(db, "tasks"), {
      title: formState.title,
      description: formState.description,
    }).then(() => navigate("/"));
  };

  return (
    <div className="create__container">
      <h1 className="create__h1">Create Your Task</h1>
      <form className="create__form" onSubmit={handleSubmit}>
        <div className="create__form__container">
          <input
            className="create__form__input"
            onChange={({ target }) =>
              setFormState({ ...formState, title: target.value })
            }
            placeholder="Title"
            type="text"
          />
          <textarea
            className="create__form__input create__form__textarea"
            onChange={({ target }) =>
              setFormState({ ...formState, description: target.value })
            }
            placeholder="Description"
          />
        </div>
        <div className="create__form__buttons__container">
          <button className="create__form__save__button" type="submit">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};
