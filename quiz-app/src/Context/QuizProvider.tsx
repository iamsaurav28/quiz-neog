import React, { createContext, useReducer, useContext } from "react";
import { quizReducer } from "../Reducers/QuizReducer";
import { Quiz } from "../Data/QuizType";
import { quizOne, quizTwo } from "../Data/GetQuiz";
import { Action } from "../Reducers/QuizReducer";

// type Action = { type: "SET_ANSWER" } | { type: "SHOW_SCORE" };
type Dispatch = (action: Action) => void;
type StatusState = "starting" | "finished" | "reset";

export type InitialState = {
  currQues: number;
  quizzes: Quiz[];
  score: number;
  status: StatusState;
  loading: boolean;
};

// type Action =
//   | { type: "RESET" }
//   | { type: "INCREMENT"; payload: { score: number } }
//   | { type: "DECREMENT"; payload: { negativeScore: number } };

type QuizProviderProps = {
  children: React.ReactNode;
};

export const quizState: InitialState = {
  // player:"guest",
  currQues: 1,
  quizzes: [quizOne, quizTwo],
  score: 0,
  status: "starting",
  loading: false
};

export const QuizContext = createContext<{
  state: InitialState;
  dispatch: Dispatch;
}>({
  state: quizState,
  dispatch: () => undefined
});

export function QuizProvider({ children }: QuizProviderProps) {
  const [state, dispatch] = useReducer(quizReducer, quizState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
