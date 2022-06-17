export type Option = {
  text: string;
  /**This indicated if the answer is right or wrong */
  isRight: boolean;
};

export type Question = {
  question: string;
  points: number;
  answer: number | null;
  options: Option[];
  negativePoints?: number;
};

export type Quiz = {
  id: number;
  quizName: string;
  description: string;
  image: string;
  questions: Question[];
};
