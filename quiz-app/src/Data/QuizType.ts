
export type Question = {
  question: string;
  points: number;
  answer: number | null;
  negativePoints?: number;
};

export type Quiz = {
  id: number;
  quizName: string;
  description: string;
  image: string;
  questions: Question[];
};
