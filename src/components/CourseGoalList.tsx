import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalList = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalList) {
  return (
    <>
      <ul>
        {goals.map(({ title, description, id }) => (
          <li key={id}>
            <CourseGoal id={id} title={title} onDelete={onDeleteGoal}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
