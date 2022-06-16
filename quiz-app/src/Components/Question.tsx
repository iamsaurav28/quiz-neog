import * as React from "react";
import Options from "./Options";
import { useState } from "react";
import { Result } from "./Result"
import "../Color/tailwind.css"

import { useParams } from "react-router-dom";
import { useQuiz } from "../Context/QuizProvider";

export default function QuestionComponent() {
  const { state, dispatch } = useQuiz();
  const { quizId } = useParams();
  const [showResult, setShowResult] = useState(false);
  const question_no = state.currQues;
  const ques = state.quizzes[Number(quizId) - 1].questions[state.currQues - 1];
  const nextQuestionHandler = () => {
    if (state.currQues === 5) {
      setShowResult(!showResult);
    } else {
      dispatch({ type: "NEXT_QUESTION" });
    }
  };
  return (
    <div>
      {!showResult ? (
        <>
          <p className="text-2xl">
            Question No. {state.currQues}/
            {state.quizzes[Number(quizId) - 1].questions.length}
          </p>
          <p className="text-2xl font-semibold">{ques.question}</p>
          <Options
            quizId={quizId}
            question_no={question_no}
            options={ques.options}
          />
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 focus:outline-none border-blue-500 hover:border-transparent rounded"
            onClick={nextQuestionHandler}
          >
            {state.currQues === 5 ? "Submit" : "Next Question"}
          </button>
        </>
      ) : (
        <Result />
      )}
    </div>
  );
}
