import { Lesson } from '../../types';

export const lesson02: Lesson = {
  id: "l02",
  sequenceNumber: 2,
  title: "Logic Gates & Decision Trees",
  author: "Arthur Fu",
  unitSection: "Algorithmic Thinking",
  objectives: [
    "Identify basic boolean operators (AND, OR, NOT) in real-world scenarios.",
    "Construct a decision tree to solve a binary classification problem."
  ],
  duration: "50 minutes",
  materials: [
    { name: "Logic Gate Visualizer Tool", type: "digital" },
    { name: "Worksheet: The Club Bouncer", type: "digital" }
  ],
  steps: [
    {
      title: "Hook: The Club Bouncer",
      duration: "10 min",
      instructorScript: "Imagine a club bouncer. You can enter IF you are over 18 AND have a ticket. What if you have a ticket but are 17? What if we change AND to OR?",
      studentActivity: "Vote on who gets in based on different rules.",
      interactiveComponent: "quiz",
      interactiveData: { question: "Rule: Shoes OR Shirt required. I have Shoes but no Shirt. Do I enter?", options: ["Yes", "No"], correct: "Yes" },
      rationale: "Uses **Anchored Instruction** by placing abstract logic in a realistic, relatable narrative."
    },
    {
      title: "Concept: Conditionals",
      duration: "15 min",
      instructorScript: "Introduce IF, ELSE IF, ELSE. Connect to flowcharts (diamonds).",
      studentActivity: "Draw a flowchart for 'Should I wear a raincoat?'",
      interactiveComponent: "none"
    },
    {
      title: "Activity: Logic Puzzles",
      duration: "20 min",
      instructorScript: "Students work in pairs to solve logic gate puzzles (e.g., light switch circuits).",
      studentActivity: "Pair programming/solving.",
      interactiveComponent: "sandbox",
      interactiveData: { placeholder: "IF (raining AND cold) THEN \n  Wear Coat \nELSE \n  Wear T-Shirt" },
      rationale: "**Cooperative Learning** allows students to verbalize their logic, reinforcing the concepts."
    },
    {
      title: "Wrap Up",
      duration: "5 min",
      instructorScript: "Summary of boolean logic.",
      studentActivity: "Submit flowcharts.",
      interactiveComponent: "none"
    }
  ],
  edPsychNotes: [
    { concept: "Anchored Instruction", explanation: "Using the 'Club Bouncer' scenario anchors abstract logic in reality.", chapterRef: "(Ch. 9: Complex Cognition)" },
    { concept: "Cooperative Learning", explanation: "Pair activity promotes social negotiation of meaning.", chapterRef: "(Ch. 10: Social Constructivism)" },
    { concept: "Working Memory", explanation: "Using visual flowcharts offloads cognitive load from holding steps in mind.", chapterRef: "(Ch. 8: Information Processing)" },
    { concept: "Transfer", explanation: "Explicitly discussing how this logic applies to math inequalities (x > 5).", chapterRef: "(Ch. 9: Transfer of Learning)" }
  ],
  formativeAssessment: [
    {
      type: "multiple-choice",
      question: "Which operator requires BOTH conditions to be true?",
      options: ["OR", "AND", "NOT", "XOR"],
      correctAnswer: "AND"
    }
  ]
};