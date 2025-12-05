import { Lesson } from '../../types';

export const lesson06: Lesson = {
  id: "l06",
  sequenceNumber: 6,
  title: "Looping through Linear Equations",
  author: "Nathanael Seon",
  unitSection: "Foundational Algebra",
  objectives: [
    "Apply iterative logic (loops) to solve linear algebraic sequences.",
    "Create a program that generates a table of values for a linear equation (y = mx + b)."
  ],
  duration: "50 minutes",
  materials: [
    { name: "Python/JS Sandbox", type: "digital" },
    { name: "Coordinate Plane Visualizer", type: "digital" }
  ],
  steps: [
    {
      title: "Warm-up: The Lazy Mathematician",
      duration: "10 min",
      instructorScript: "If I want to find y for x=1 to x=100 for y=2x+1, it takes forever. Programmers are lazy (efficient). We use loops.",
      studentActivity: "Calculate the first 3 manually.",
      interactiveComponent: "none",
      rationale: "**Motivation (Intrinsic)**: Showing how coding saves effort creates buy-in."
    },
    {
      title: "Instruction: For Loops",
      duration: "15 min",
      instructorScript: "Structure: Start at 0, Stop at 100, Step by 1. Inside the loop: Calculate y, Print it.",
      studentActivity: "Read code and predict output.",
      interactiveComponent: "none"
    },
    {
      title: "Integrated Activity: Plotting the Line",
      duration: "20 min",
      instructorScript: "Write a loop that generates points. We will see them appear on the graph. Change the slope (m) in the code, see the graph change.",
      studentActivity: "Code -> Visual feedback loop.",
      interactiveComponent: "graph",
      interactiveData: { type: "linear_interactive" },
      rationale: "**Feedback Loops**: Immediate visual confirmation of algebraic code helps internalize the concept of slope."
    },
    {
      title: "Final Unit Reflection",
      duration: "5 min",
      instructorScript: "How did math help us code? How did code help us understand math?",
      studentActivity: "Group discussion.",
      interactiveComponent: "none"
    }
  ],
  edPsychNotes: [
    { concept: "Intrinsic Motivation", explanation: "Framing programming as a tool for efficiency appeals to desire for mastery.", chapterRef: "(Ch. 11: Motivation)" },
    { concept: "Feedback", explanation: "Visual graph updates immediately based on code changes.", chapterRef: "(Ch. 11: Behavioral Views)" },
    { concept: "Transfer", explanation: "Applying algebra (y=mx+b) in a completely new context (loops).", chapterRef: "(Ch. 9: Transfer)" },
    { concept: "Cognitive Load", explanation: "Using the computer to do the calculation allows the student to focus on the pattern.", chapterRef: "(Ch. 8: Cognitive Load Theory)" }
  ],
  formativeAssessment: [
    {
      type: "reflection",
      question: "How is a For-Loop similar to a function table in math?",
    }
  ]
};