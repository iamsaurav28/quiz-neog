import * as React from "react";
import "../Color/tailwind.css";
import { useQuiz } from "../Context/QuizProvider";
import { Link, useParams } from "react-router-dom";

export function Result() {
  const { state, dispatch } = useQuiz();
  // const { quizId } = useParams();
  return (
    <>
      <p className="text-3xl">Guest, Your Score is {state.score}</p>
      {/* <Link to={`/quiz/${quizId}`}>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Play Again
        </button>
      </Link> */}
      <Link to="/">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Back to Home
        </button>
      </Link>
    </>
  );
}
