import { Lesson } from '../../types';

export const lesson03: Lesson = {
  id: "l03",
  sequenceNumber: 3,
  title: "Visualizing Functions: Input -> Output",
  author: "Roshan Balla",
  unitSection: "Math-CS Connections",
  objectives: [
    "Differentiate between input (domain) and output (range) in both code functions and mathematical functions.",
    "Translate a data table into a visual graph to identify trends."
  ],
  duration: "45 minutes",
  materials: [
    { name: "Desmos or similar Graphing Calculator", type: "link" },
    { name: "Interactive Function Machine", type: "digital" }
  ],
  steps: [
    {
      title: "Warm-up: The Function Machine",
      duration: "10 min",
      instructorScript: "Draw a box. Number 2 goes in, 4 comes out. 3 goes in, 6 comes out. What is the rule?",
      studentActivity: "Guess the rule (x * 2).",
      interactiveComponent: "none",
      rationale: "Activates **Pattern Recognition** and builds self-efficacy with easy wins."
    },
    {
      title: "Deep Dive: Coding vs. Math Functions",
      duration: "15 min",
      instructorScript: "In Math: f(x) = x + 1. In Code: function addOne(x) { return x + 1; }. Discuss similarities. The 'return' is the output.",
      studentActivity: "Write a simple function in pseudocode.",
      interactiveComponent: "sandbox",
      interactiveData: { placeholder: "function triple(number) {\n  return number * 3;\n}" }
    },
    {
      title: "Visualization Activity",
      duration: "15 min",
      instructorScript: "We have a list of inputs and outputs. Let's plot them. Humans process images faster than numbers.",
      studentActivity: "Manipulate the graph to match the function data.",
      interactiveComponent: "graph",
      interactiveData: { type: "linear" }, // Config for the component
      rationale: "**Dual Coding Theory**: combining verbal definition with visual graphs enhances memory."
    },
    {
      title: "Check for Understanding",
      duration: "5 min",
      instructorScript: "Quiz on vocabulary.",
      studentActivity: "Poll.",
      interactiveComponent: "none"
    }
  ],
  edPsychNotes: [
    { concept: "Dual Coding", explanation: "Using both text (code) and visual (graphs) to represent the same concept.", chapterRef: "(Ch. 8: Cognitive Views)" },
    { concept: "Pattern Recognition", explanation: "Identifying the rule governing inputs and outputs.", chapterRef: "(Ch. 8: Information Processing)" },
    { concept: "Self-Efficacy", explanation: "Starting with simple arithmetic patterns builds confidence before syntax.", chapterRef: "(Ch. 11: Motivation)" },
    { concept: "Prior Knowledge", explanation: "Leveraging algebra knowledge of f(x) to explain code functions.", chapterRef: "(Ch. 7: Knowledge Construction)" }
  ],
  formativeAssessment: [
    {
      type: "drag-drop",
      question: "Match the term: Input -> Domain, Output -> Range",
    }
  ]
};