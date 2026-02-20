import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalList = {
  goals: CGoal[];
};

export default function CourseGoalList({ goals }: CourseGoalList) {
  return (
    <>
      <ul>
        {goals.map(({ title, description, id }) => (
          <li key={id}>
            <CourseGoal title={title}>
              <p>{description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
