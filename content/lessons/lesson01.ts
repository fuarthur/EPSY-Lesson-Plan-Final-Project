import { Lesson } from '../../types';

export const lesson01: Lesson = {
  id: "l01",
  sequenceNumber: 1,
  title: "The Sandwich Algorithm: Decomposing Problems",
  author: "Arthur Fu",
  unitSection: "Algorithmic Thinking",
  objectives: [
    "Analyze a daily task by decomposing it into discrete, sequential steps.",
    "Create a precise algorithm (pseudocode) that a 'computer' (teacher) can execute without error."
  ],
  duration: "45 minutes",
  materials: [
    { name: "Digital Whiteboard (Jamboard/Miro)", type: "digital" },
    { name: "Virtual Sandwich Maker Simulator", type: "digital", url: "#sandbox" },
    { name: "Slide Deck: Intro to Algorithms", type: "digital" }
  ],
  steps: [
    {
      title: "Warm-up: The Robot Error",
      duration: "5 min",
      instructorScript: "Display a funny video/GIF of a robot failing a task because instructions were vague. Ask class: 'Why did the robot fail?' Emphasize that computers have no common sense.",
      studentActivity: "Type answer in chat.",
      interactiveComponent: "none",
      rationale: "Activates **Prior Knowledge** about technology and sets the stage for the need for precision."
    },
    {
      title: "Direct Instruction: Decomposition",
      duration: "10 min",
      instructorScript: "Define 'Decomposition': breaking complex problems into small parts. Define 'Algorithm': a step-by-step list of instructions. Show example: Brushing teeth.",
      studentActivity: "Listen and take guided notes.",
      interactiveComponent: "none"
    },
    {
      title: "Guided Activity: The Exact Sandwich",
      duration: "20 min",
      instructorScript: "I am the robot. You must tell me how to make a PB&J sandwich. If you say 'put jelly on bread', I might put the jar on the bread. You must be specific.",
      studentActivity: "Students type specific commands. 'Open jar. Insert knife. Scoop jelly.'",
      interactiveComponent: "sandbox",
      interactiveData: { placeholder: "1. Pick up knife by the handle...\n2. Insert knife into peanut butter jar..." },
      rationale: "Uses **Scaffolding**. The teacher acts as the compiler providing immediate feedback on syntax errors (logical errors)."
    },
    {
      title: "Closure & Reflection",
      duration: "10 min",
      instructorScript: "Review the 'bugs' we found. Ask: How does this relate to math problems?",
      studentActivity: "Complete exit ticket.",
      interactiveComponent: "none"
    }
  ],
  edPsychNotes: [
    { concept: "Metacognition", explanation: "Students monitor their own thinking process by debugging their instructions.", chapterRef: "(Ch. 7: Metacognition)" },
    { concept: "Scaffolding", explanation: "Teacher acts as a scaffold by executing instructions literally, demonstrating errors safely.", chapterRef: "(Ch. 10: Constructivism)" },
    { concept: "Immediate Feedback", explanation: "Students see the result of their code (sandwich construction) instantly.", chapterRef: "(Ch. 11: Behavioral Views)" },
    { concept: "Zone of Proximal Development", explanation: "The task is slightly beyond their ability to do perfectly, but achievable with teacher guidance.", chapterRef: "(Ch. 2: Cognitive Development)" }
  ],
  formativeAssessment: [
    {
      type: "reflection",
      question: "Why is 'Make a sandwich' not a valid algorithm for a computer?",
    }
  ]
};