import React, { createContext, useContext } from "react";
import { Quiz } from "../Data/QuizType";
import { quizOne, quizTwo } from "../Data/GetQuiz";


type Dispatch = () => void;


export type InitialState = {
  currQues: number;
  quizzes: Quiz[];
 
};



export const quizState: InitialState = {
  currQues: 1,
  quizzes: [quizOne, quizTwo],

};

export const QuizContext = createContext<{
  state: InitialState;
  dispatch: Dispatch;
}>({
  state: quizState,
  dispatch: () => undefined
});


export function useQuiz() {
  return useContext(QuizContext);
}
