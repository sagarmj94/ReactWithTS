import CourseGoal from "./components/CourseGoal";
import "./App.css";
import goalimg from "./assets/goalimg.jpg";
import Header from "./components/Header";
import { useState } from "react";

type CourseGoad = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoad[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoad = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalimg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map(({ title, description, id }) => (
          <li key={id}>
            <CourseGoal title={title}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
