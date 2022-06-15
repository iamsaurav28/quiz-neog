import { InitialState } from "../Context/QuizProvider";
import { quizState } from "../Context/QuizProvider";
export type Action =
  | { type: "NEXT_QUESTION" }
  | { type: "RESET" }
  | {
      type: "INCREMENT";
      payload: { score: number; answer: number; id: number; quizId: string };
    }
  | { type: "DECREMENT"; payload: { negativeScore: number } };

export function quizReducer(state: InitialState, action: Action) {
  switch (action.type) {
    case "NEXT_QUESTION":
      return { ...state, currQues: state.currQues + 1 };
    case "RESET":
      return { ...quizState };
    case "INCREMENT":
      console.log("INCREMENT " + action.payload.answer);
      const newQuestions = state.quizzes[
        Number(action.payload.quizId) - 1
      ].questions.map((el) =>
        el.points === action.payload.id
          ? { ...el, answer: action.payload.answer }
          : { ...el }
      );
      const quizzes = state.quizzes.map((el) => ({
        ...el,
        questions: [...newQuestions]
      }));
      return {
        ...state,
        quizzes: [...quizzes],
        score: state.score + action.payload.score
      };
    // case "DECREMENT":
    //   return {
    //     ...state,
    //     // answer: action.payload.idx,
    //     score: state.score - action.payload.negativeScore
    //   };
    default:
      return state;
  }
}
