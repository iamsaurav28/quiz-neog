import * as React from "react";
import "../Color/tailwind.css";
import { useQuiz } from "../Context/QuizProvider";
import { Link } from "react-router-dom";

export function Home() {
  const { state } = useQuiz();
  return (
    <div>
      <p className="text-6xl"> </p>
      <div className="flex justify-center flex-wrap">
        {state.quizzes.map((quiz) => {
          return (
            <div className="w-64 border content-center m-3">
              <img src={quiz.image} className="w-full" alt="..." />
              <div className="p-4">
                <h5 className="text-lg text-red-500 font-bold tracking-widest mb-2 uppercase">
                  {quiz.quizName}
                </h5>
                <p>{quiz.description}</p>
                <Link to={`/quiz/${quiz.id}`}>
                  <button className="bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 inline-block mt-4 rounded content-center">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
