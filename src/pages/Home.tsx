import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";
import { Tasks } from "../interface/tasks.interface";
import { TaskCard } from "../components/TaskCard";
import { useContextTasks } from "../context";
import { Modal } from "../components/Modal";
import "../styles/Home.scss";

export const Home: React.FC = () => {
  const { modalState } = useContextTasks();
  const [tasks, setTasks] = useState<Tasks[]>();

  useEffect(() => {
    const getTasks = onSnapshot(
      collection(db, "tasks"),
      (snapshot) => {
        const list: Tasks[] = [];
        snapshot.docs.forEach((doc) =>
          list.push({ ...doc.data(), id: doc.id })
        );
        setTasks(list);
      },
      (error) => console.log(error)
    );
    return () => getTasks();
  }, []);

  return (
    <div className="home__container">
      {tasks?.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="home__cards__container">
          {tasks?.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </div>
      )}
      {modalState.state && <Modal />}
    </div>
  );
};
