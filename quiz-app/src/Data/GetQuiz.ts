
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
      options: [
        {
          text: "akad bakad bomba boo",
          isRight: false
        },
        {
          text: "shring wring sharvaling",
          isRight: true
        },
        {
          text: "altu jalal tu",
          isRight: false
        },
        {
          text: "ami jeto ma",
          isRight: false
        }
      ]
    },
    {
      question:
        "What was the neighour aunty name?",
      points: 2,
      answer: null,
      options: [
        {
          text: "pinky aunty",
          isRight: false
        },
        {
          text: "shanti aunty",
          isRight: true
        },
        {
          text: "laxmi aunty",
          isRight: false
        },
        {
          text: "babli aunty",
          isRight: false
        }
      ]
    },
    {
      question: "who was the bigger magician than nani?",
      points: 3,
      answer: null,
      options: [
        {
          text: "masum pari",
          isRight: false
        },
        {
          text: "shri devi",
          isRight: false
        },
        {
          text: "Rani devi",
          isRight: true
        },
        {
          text: "apsara pari",
          isRight: false
        }
      ]
    },
    {
      question: " Who is Jiya best friend?",
      points: 4,
      answer: null,
      options: [
        {
          text: "parminder",
          isRight: false
        },
        {
          text: "dhruv",
          isRight: false
        },
        {
          text: "minki",
          isRight: false
        },
        {
          text: "meeta",
          isRight: true
        }
      ]
    },
    {
      question: "who is crush of jiya?",
      points: 5,
      answer: null,
      options: [
        {
          text: "dhruv",
          isRight: true
        },
        {
          text: "neil",
          isRight: false
        },
        {
          text: "raja",
          isRight: false
        },
        {
          text: "aman",
          isRight: false
        }
      ]
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
      options: [
        {
          text: "magic pencil",
          isRight: true
        },
        {
          text: "magic pen",
          isRight: false
        },
        {
          text: "magic ring",
          isRight: false
        },
        {
          text: "magic diamond",
          isRight: false
        }
      ]
    },
    {
      question: "who irriates sanju mostly ?",
      points: 2,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "sanjana",
          isRight: false
        },
        {
          text: "chandu",
          isRight: true
        },
        {
          text: "tito",
          isRight: false
        },
        {
          text: "ritu",
          isRight: false
        }
      ]
    },
    {
      question:
        "Who has magic to pass from walls ?",
      points: 3,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "sanju",
          isRight: false
        },
        {
          text: "montu",
          isRight: false
        },
        {
          text: "jhumru",
          isRight: true
        },
        {
          text: "ritu",
          isRight: false
        }
      ]
    },
    {
      question:
        "whats real name of sanju?",
      points: 4,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "rahul vaidya",
          isRight: false
        },
        {
          text: "akash vaidya",
          isRight: false
        },
        {
          text: "kinshuk vaidya",
          isRight: true
        },
        {
          text: "ram vaidya",
          isRight: false
        }
      ]
    },
    {
      question: "on which channel , this show was telecast?",
      points: 5,
      answer: null,
      negativePoints: 5,
      options: [
        {
          text: "star utsav",
          isRight: false
        },
        {
          text: "star one",
          isRight: false
        },
        {
          text: "zee tv",
          isRight: false
        },
        {
          text: "star plus",
          isRight: true
        }
      ]
    }
  ]
};

export { quizOne };
export { quizTwo };