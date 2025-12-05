import { Lesson } from '../../types';

export const lesson04: Lesson = {
  id: "l04",
  sequenceNumber: 4,
  title: "Pattern Recognition in Data",
  author: "Roshan Balla",
  unitSection: "Math-CS Connections",
  objectives: [
    "Interpret structured data (arrays) to identify repeating sequences.",
    "Formulate a prediction for the next item in a sequence based on identified rules."
  ],
  duration: "45 minutes",
  materials: [
    { name: "Spreadsheet Software (Google Sheets/Excel)", type: "digital" },
    { name: "Array visualizer", type: "digital" }
  ],
  steps: [
    {
      title: "Intro: What is Data?",
      duration: "10 min",
      instructorScript: "Data is just information organized so computers can read it. Show a list of temperatures for the week. This is an Array.",
      studentActivity: "List 5 things in their room as an 'Array'.",
      interactiveComponent: "none"
    },
    {
      title: "Activity: Spot the Trend",
      duration: "20 min",
      instructorScript: "Show a graph of social media usage over time. Ask students to describe the 'Slope' (Math concept) or 'Trend' (Data concept).",
      studentActivity: "Adjust graph points to create a positive trend.",
      interactiveComponent: "graph",
      interactiveData: { type: "scatter" },
      rationale: "**Discovery Learning**: Students manipulate data to 'discover' the relationship rather than being told."
    },
    {
      title: "Coding Connection: Iterating Data",
      duration: "10 min",
      instructorScript: "How does a computer find the highest number? It looks at each one, one by one. This is a linear search.",
      studentActivity: "Pseudocode a check for 'Is today hotter than yesterday?'",
      interactiveComponent: "sandbox",
      interactiveData: { placeholder: "List temps = [70, 72, 68]\nIf temps[1] > temps[0] then..." }
    },
    {
      title: "Reflection",
      duration: "5 min",
      instructorScript: "Why is organized data better than messy data?",
      studentActivity: "Discussion.",
      interactiveComponent: "none"
    }
  ],
  edPsychNotes: [
    { concept: "Discovery Learning", explanation: "Students interact with the graph to find the rule themselves.", chapterRef: "(Ch. 10: Constructivism)" },
    { concept: "Elaboration", explanation: "Connecting abstract arrays to physical objects in their room.", chapterRef: "(Ch. 8: Long-Term Memory)" },
    { concept: "Visual Scaffolding", explanation: "Using charts to represent abstract number arrays.", chapterRef: "(Ch. 10: Scaffolding)" },
    { concept: "Motivation (Utility Value)", explanation: "Using social media data makes the math relevant to their lives.", chapterRef: "(Ch. 11: Motivation)" }
  ],
  formativeAssessment: [
    {
      type: "multiple-choice",
      question: "In the array [2, 4, 6, 8], what comes next?",
      options: ["9", "10", "12", "8"],
      correctAnswer: "10"
    }
  ]
};