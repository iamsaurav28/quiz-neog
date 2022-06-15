

import { Quiz } from "./QuizType";
// answer: null
const quizOne: Quiz = {
  id: 1,
  quizName: "SHARARAT Thoda jadu Thodi Nazakat",
  description:
      "lets begin with a quiz of our childhood magic show",
  image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Shararathh.jpg",
  questions: [
    {
      question:
        "what they speak before doing magic?",
      points: 1,
      answer: null,
      negativePoints: 5,
   
    },
    {
      question:
        "What was the neighour aunty name?",
      points: 2,
      answer: null,
     
    },
    {
      question: "who was the bigger magician than nani?",
      points: 3,
      answer: null,
      
    },
    {
      question: " Who is Jiya best friend?",
      points: 4,
      answer: null,
      
    },
    {
      question: "who is crush of jiya?",
      points: 5,
      answer: null,
        }
  ]
};

const quizTwo: Quiz = {
  id: 2,
 quizName: "SHAKA LAKA BOOM BOOM",
  description:
  " if you remember this 90s show lets have some fun with the quiz",
  image:
    "https://m.media-amazon.com/images/M/MV5BMTI0NDQxNTgtNjM0Ni00MDEyLTg5OWEtYzY4NTg4MDY0M2RlXkEyXkFqcGdeQXVyNjc0NjQzNTI@._V1_.jpg",

  questions: [
    {
      question: "from where magic comes?",
      points: 1,
      answer: null,
      negativePoints: 5,
     
    },
    {
      question: "who irriates sanju mostly ?",
      points: 2,
      answer: null,
      negativePoints: 5,
       },
    {
      question:
        "Who has magic to pass from walls ?",
      points: 3,
      answer: null,
      negativePoints: 5,
    },
    {
      question:
        "whats real name of sanju?",
      points: 4,
      answer: null,
      negativePoints: 5,
         },
    {
      question: "on which channel , this show was telecast?",
      points: 5,
      answer: null,
      negativePoints: 5,
     }
  ]
};

export { quizOne };
export { quizTwo };