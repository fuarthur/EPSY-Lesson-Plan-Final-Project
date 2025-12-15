import { Lesson } from '../../types';

export const lesson05: Lesson = {
  id: "l05",
  sequenceNumber: 5,
  title: "Order of Operations & Variable Introduction (PEMDAS)",
  author: "Nathanael Seon",
  unitSection: "Algebraic Foundations",

  objectives: [
    "Apply the Order of Operations (PEMDAS) to evaluate complex algebraic expressions.",
    "Analyze and trace the value of a variable through substitution and re-assignment."
  ],

  duration: "90 minutes",

  materials: [
    { name: "Digital Whiteboard", type: "digital", url: "https://miro.com"},
    { name: "Teacher Laptop with Internet Access", type: "physical" },
    { name: "Classroom Projector/Smartboard", type: "physical" },
    { name: "Student Laptops/Chromebooks (1 per student)", type: "physical" }
  ],

  steps: [
    {
      title: "Warm-Up: Ambiguous Equation",
      duration: "10 min",
      instructorScript:
        "Present an intentionally ambiguous algebraic equation. Ask students to solve it independently without guidance. Launch a poll to check progress, then collect multiple answers. Acknowledge the ambiguity and model the correct solution using the digital whiteboard.",
      studentActivity:
        "Students independently solve the equation, submit progress via poll, and compare different answers during discussion.",
      interactiveComponent: "quiz",
      interactiveData: {
        question: "Why did different students get different answers?",
        options: [
          "Calculation mistakes",
          "Ambiguous order of operations",
          "Different variables",
          "Missing numbers"
        ],
        correct: "Ambiguous order of operations"
      },
      rationale:
        "Activates **Prior Knowledge** and creates **Cognitive Dissonance**, motivating students to resolve conflicting answers by learning PEMDAS rules."
    },
    {
      title: "Direct Instruction & Formal Modeling",
      duration: "20 min",
      instructorScript:
        "Systematically explain PEMDAS using the slide deck. Introduce variables as placeholders and model multiple worked examples, narrating each step explicitly.",
      studentActivity:
        "Students follow along, annotate examples, and ask clarification questions.",
      interactiveComponent: "none",
      rationale:
        "Reduces extraneous cognitive load through **Scaffolding** and explicit modeling, supporting **Cognitive Load Theory**."
    },
    {
      title: "Think-Pair-Share: PEMDAS & Variables",
      duration: "25 min",
      instructorScript:
        "Place students into breakout rooms. Instruct them to solve worksheet problems individually, then compare and agree on consensus answers. Close breakout rooms and solicit group responses.",
      studentActivity:
        "Students work individually, then collaboratively justify answers within small groups.",
      interactiveComponent: "sandbox",
      interactiveData: {
        placeholder: "// Trace each step carefully\n// Show intermediate values\nx = 3;\n2 * (x + 4) - 5;"
      },
      rationale:
        "Functions as **Formative Assessment** and supports **Social Constructivism** through collaborative meaning-making."
    },
    {
      title: "Guided Practice: Refactoring with Parentheses",
      duration: "35 min",
      instructorScript:
        "Present an equation that evaluates to 19. Challenge students to refactor it using parentheses to produce 59. Reveal and explain solutions step-by-step.",
      studentActivity:
        "Students experiment with refactoring expressions to reach a target result.",
      interactiveComponent: "none",
      rationale:
        "Promotes **Self-Regulated Learning** by requiring goal-setting, monitoring, and adjustment of strategies."
    }
  ],

  edPsychNotes: [
    {
      concept: "**Prior Knowledge Activation & Cognitive Dissonance**",
      explanation:
        "Ambiguous equations surface existing arithmetic schemas and create discomfort that motivates learning.",
      chapterRef: "Chapter 8"
    },
    {
      concept: "**Cognitive Load Theory (Scaffolding)**",
      explanation:
        "Explicit modeling reduces extraneous load and supports novice learners.",
      chapterRef: "Ch. 9–10"
    },
    {
      concept: "**Formative Assessment & Social Constructivism**",
      explanation:
        "Think-pair-share allows diagnosis of misconceptions and collaborative knowledge construction.",
      chapterRef: "Ch. 10, 16"
    },
    {
      concept: "**Self-Regulation (Goal Setting)**",
      explanation:
        "Refactoring tasks require students to plan, monitor, and adjust strategies.",
      chapterRef: "Chapter 13"
    }
  ],

  formativeAssessment: [
    {
      type: "reflection",
      question:
        "Why are parentheses the most powerful operator in PEMDAS, and how did they help you reach a target value?"
    }
  ]
};
