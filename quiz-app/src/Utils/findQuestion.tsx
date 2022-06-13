import { quizOne } from "../Data/GetQuiz";
import { Question } from "../Data/QuizType";

export default function findQuestion(no: number): Question {
  const [currQues] = quizOne.questions.filter((ques) => ques.points === no);
  return currQues;
}
