import { Lesson } from '../../types';

export const lesson06: Lesson = {
  id: "l06",
  sequenceNumber: 6,
  title: "Functions as Mappings: Domain and Range",
  author: "Nathanael Seon",
  unitSection: "Algebraic Foundations",

  objectives: [
    "Explain a mathematical function as a mapping from domain to range.",
    "Create and represent a simple algebraic function using mapping diagrams."
  ],

  duration: "90 minutes",

  materials: [
    { name: "Virtual Whiteboard / Drawing Tool", type: "digital", url: "https://miro.com" },
    { name: "Teacher Laptop with Internet Access", type: "physical" },
    { name: "Classroom Projector/Smartboard", type: "physical" },
    { name: "Student Laptops/Chromebooks (1 per student)", type: "physical" }
  ],

  steps: [
    {
      title: "Real-World Connection: ID Badge Analogy",
      duration: "15 min",
      instructorScript:
        "Introduce functions using the analogy of a school ID badge: one ID grants access to one student. Emphasize the rule of one input leading to one output.",
      studentActivity:
        "Students discuss how the analogy maps to mathematical inputs and outputs.",
      interactiveComponent: "none",
      rationale:
        "Uses **Concrete Operational Thought** and **Analogical Transfer** to connect familiar systems to abstract concepts."
    },
    {
      title: "Direct Instruction & Concept Check",
      duration: "25 min",
      instructorScript:
        "Define function, domain, and range. Model mapping diagrams on the whiteboard. Show examples and non-examples, then poll students to classify each.",
      studentActivity:
        "Students respond to polls identifying valid and invalid functions.",
      interactiveComponent: "quiz",
      interactiveData: {
        question: "Which diagram represents a function?",
        options: ["Diagram A", "Diagram B", "Diagram C"],
        correct: "Diagram A"
      },
      rationale:
        "Provides **Immediate Feedback** through **Formative Assessment**, reinforcing correct mental models."
    },
    {
      title: "Collaborative Function Design",
      duration: "35 min",
      instructorScript:
        "Place students in small groups. Instruct them to design a function based on a real-world relationship, clearly defining inputs, outputs, and notation.",
      studentActivity:
        "Students collaboratively design and present a function mapping.",
      interactiveComponent: "sandbox",
      interactiveData: {
        placeholder:
          "// Example:\n// Input: hours worked\n// Output: money earned\nf(x) = 15x"
      },
      rationale:
        "Encourages **Cooperative Learning** through positive interdependence and shared responsibility."
    },
    {
      title: "Closing Reflection",
      duration: "15 min",
      instructorScript:
        "Ask students to reflect on how the one-input-one-output rule simplifies real-world systems. Facilitate brief discussion.",
      studentActivity:
        "Students articulate reflections verbally or in writing.",
      interactiveComponent: "none",
      rationale:
        "Supports **Metacognition** by prompting reflection on learning processes."
    }
  ],

  edPsychNotes: [
    {
      concept: "**Analogical Transfer (Concrete Operational Thought)**",
      explanation:
        "Using familiar ID systems helps students grasp abstract functional mappings.",
      chapterRef: "Chapter 2"
    },
    {
      concept: "**Immediate Feedback & Formative Assessment**",
      explanation:
        "Polling reveals misconceptions in real time.",
      chapterRef: "Chapter 7"
    },
    {
      concept: "**Cooperative Learning (Positive Interdependence)**",
      explanation:
        "Group design tasks require shared success.",
      chapterRef: "Chapter 10"
    },
    {
      concept: "**Metacognition (Self-Regulation)**",
      explanation:
        "Reflection strengthens schema integration and self-monitoring.",
      chapterRef: "Ch. 9, 13"
    }
  ],

  formativeAssessment: [
    {
      type: "reflection",
      question:
        "Why does requiring exactly one output for each input make functions easier to model in real-world situations?"
    }
  ]
};
