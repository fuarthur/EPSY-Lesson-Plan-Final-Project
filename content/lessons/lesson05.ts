import { Lesson } from '../../types';

export const lesson05: Lesson = {
  id: "l05",
  sequenceNumber: 5,
  title: "Variable Variables: Math vs. CS",
  author: "Nathanael Seon",
  unitSection: "Foundational Algebra",
  objectives: [
    "Distinguish between algebraic variables (unknowns) and programming variables (containers).",
    "Evaluate expressions where the variable's value changes over time (reassignment)."
  ],
  duration: "50 minutes",
  materials: [
    { name: "Virtual Cup/Container Labels", type: "digital" },
    { name: "Code Tracing Worksheet", type: "digital" }
  ],
  steps: [
    {
      title: "Misconception Check: x = x + 1",
      duration: "10 min",
      instructorScript: "Write 'x = x + 1' on board. Ask Math students if this is possible (No, 0 = 1 is false). Tell them in CS, it is valid. Why?",
      studentActivity: "Brainstorm why.",
      interactiveComponent: "none",
      rationale: "Addresses **Conceptual Change**. We must explicitly confront the conflict between their math knowledge and new CS knowledge."
    },
    {
      title: "Concept: The Container Metaphor",
      duration: "15 min",
      instructorScript: "In CS, x is a box labeled 'x'. We can take the number out, add 1, and put it back. Show animation of box.",
      studentActivity: "Drag and drop values into variables.",
      interactiveComponent: "sandbox",
      interactiveData: { placeholder: "var score = 0;\nscore = score + 10;\n// What is score now?" },
      rationale: "**Concrete Operational** support. Even high schoolers benefit from concrete metaphors for invisible digital processes."
    },
    {
      title: "Activity: Trace Tables",
      duration: "20 min",
      instructorScript: "We will track the value of 'score' and 'lives' through a game code snippet.",
      studentActivity: "Fill out a table tracking variable changes line by line.",
      interactiveComponent: "quiz",
      interactiveData: { question: "x = 5; x = x + 2; What is x?", options: ["5", "7", "Impossible"], correct: "7" }
    },
    {
      title: "Closure",
      duration: "5 min",
      instructorScript: "Review the difference: Math (Equality) vs CS (Assignment).",
      studentActivity: "Quick poll.",
      interactiveComponent: "none"
    }
  ],
  edPsychNotes: [
    { concept: "Conceptual Change", explanation: "Overcoming the misconception that x = x + 1 is mathematically impossible by redefining the context.", chapterRef: "(Ch. 8: Knowledge Construction)" },
    { concept: "Metaphor", explanation: "Using 'Variables as Containers' to ground abstract memory allocation.", chapterRef: "(Ch. 8: Imagery)" },
    { concept: "Working Memory", explanation: "Trace tables offload the need to remember previous values.", chapterRef: "(Ch. 8: Information Processing)" },
    { concept: "Interference", explanation: "Proactive interference from algebra is explicitly managed.", chapterRef: "(Ch. 7: Forgetting)" }
  ],
  formativeAssessment: [
    {
      type: "multiple-choice",
      question: "In code, what does the '=' sign usually mean?",
      options: ["Is equal to", "Assignment (puts value in)", "Compare"],
      correctAnswer: "Assignment (puts value in)"
    }
  ]
};