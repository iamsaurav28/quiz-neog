import { Option, Question } from "../Data/QuizType";

function calculateScore(
  currentScore: number,
  question: Question,
  selectedOption: Option
): number {
  const negativePoint = question.negativePoints ? question.negativePoints : 0;
  return selectedOption.isRight
    ? currentScore + question.points
    : currentScore - negativePoint;
}

export { calculateScore };