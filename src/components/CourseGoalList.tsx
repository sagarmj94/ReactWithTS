import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./infoBox.tsx";
import type { ReactNode } from "react";

type CourseGoalList = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalList) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have not goal yet. Start adding some</InfoBox>
    );
  }

  let warningBox: ReactNode;

  console.log("goals", goals);
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate
      </InfoBox>
    );
  }
  return (
    <>
      <ul>
        {warningBox}
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
