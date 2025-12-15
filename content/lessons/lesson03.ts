import { Lesson } from '../../types';

export const lesson03: Lesson = {
  id: "l03",
  sequenceNumber: 3,
  title: "Translation: From f(x) to function()",
  author: "Roshan Balla",
  unitSection: "Math-CS Connections",
  objectives: [
    "Analyze the structural similarities and differences between mathematical function notation f(x) and programming syntax.",
    "Translate a linear algebraic equation into a code function that returns accurate values for a given domain."
  ],
  duration: "55 minutes",
  materials: [
    { name: "Slide Deck: The Syntax of Logic", type: "digital" },
    { name: "Digital Graphing Tool (Desmos/EduLogic Grapher)", type: "digital" },
    { name: "Worksheet: Function Translation Map", type: "digital" }
  ],
  steps: [
    {
      title: "Anticipatory Set: The Universal Language",
      duration: "10 min",
      instructorScript:
        "1. Write 'f(x) = 2x + 5' on the left side of the board. Write 'function f(x) { return 2*x + 5; }' on the right side.\n"
        + "2. Ask students: 'We know the left side is Math. The right side is JavaScript. Identify three visual similarities and one visual difference.'\n"
        + "3. Cold call students to share. Expected answers: Both have f, both have (x). Difference: The curly braces {} and the word 'return'.\n"
        + "4. Explain: 'Computer Science is just Applied Math. Today we are learning to translate between these two languages.'",
      studentActivity:
        "Students visually analyze the two equations and write down similarities/differences in their notebooks.",
      interactiveComponent: "none",
      rationale:
        "Activates the student's existing **Schema** for algebra. By mapping new information (code) onto this existing framework, we facilitate easier retrieval and understanding."
    },
    {
      title: "Direct Instruction: The 'Return' of the Range",
      duration: "15 min",
      instructorScript:
        "1. Project the slide on 'Inputs and Outputs'.\n"
        + "2. Say: 'In Algebra, you put a Domain value (x) in, and get a Range value (y) out. In CS, we call this the Parameter (input) and the Return Value (output).'\n"
        + "3. Demonstrate a 'Worked Example': Take the number 4. \n"
        + "   - Math: f(4) = 2(4)+5 = 13.\n"
        + "   - Code: Pass 4 into the function. The computer calculates 2*4+5 and 'returns' 13.\n"
        + "4. Emphasize: 'If you don't write RETURN in code, the answer is calculated but thrown away. In Math, the equals sign does that work for us.'",
      studentActivity:
        "Students copy the definition of 'Parameter' and 'Return Value' and trace the worked example in their notes.",
      interactiveComponent: "none",
      rationale:
        "Reduces load on **Working Memory**. By walking through a concrete example (the number 4), students can process the logic without holding the abstract definition in suspension."
    },
    {
      title: "Guided Activity: Visual Verification",
      duration: "20 min",
      instructorScript:
        "1. Open the Graph Manipulative.\n"
        + "2. Say: 'We are going to verify our code using a graph. If our code matches the math, the line will look the same.'\n"
        + "3. Assign the equation: y = 0.5x - 2.\n"
        + "4. Task: 'Write this as a code function in the sandbox. Then, calculate the points for x=0, x=2, x=4 manually. Check if the graph passes through them.'\n"
        + "5. Circulate and check: Are students using the correct syntax? Are they remembering the order of operations?",
      studentActivity:
        "Students write the code function, calculate 3 coordinates, and verify them against the visual line on the screen.",
      interactiveComponent: "graph",
      interactiveData: { type: "linear" },
      rationale:
        "Strengthens **Encoding** via dual channels. Processing the concept visually (graph) and semantically (code) creates multiple pathways for retrieval."
    },
    {
      title: "Closure: The 'Why' Question",
      duration: "10 min",
      instructorScript:
        "1. Ask the final checking question.\n"
        + "2. Say: 'Why do we need to be more explicit in code (typing 'return', 'function') than in math?'\n"
        + "3. Collect responses. Guide them to the realization that computers cannot infer intent; they are literal machines.",
      studentActivity:
        "Students respond to the reflection prompt.",
      interactiveComponent: "none",
      rationale:
        "Encourages **Elaboration**. Asking students to explain the *purpose* of the syntax forces deep processing, moving information from short-term to long-term memory."
    }
  ],
  edPsychNotes: [
    {
      concept: "Schema",
      explanation:
        "Connecting new coding syntax to the student's existing algebraic mental structures (schemas) to make the abstract concrete.",
      chapterRef: "(Ch. 8: The Information-Processing Approach)"
    },
    {
      concept: "Working Memory",
      explanation:
        "Using a step-by-step worked example manages cognitive load, allowing working memory to focus on the structure rather than calculation.",
      chapterRef: "(Ch. 8: The Information-Processing Approach)"
    },
    {
      concept: "Encoding",
      explanation:
        "Using both visual (graph) and verbal (code/text) representations improves the encoding of the concept into long-term memory.",
      chapterRef: "(Ch. 8: The Information-Processing Approach)"
    },
    {
      concept: "Elaboration",
      explanation:
        "The reflection question requires students to add meaning to the syntax rules, a process known as elaboration which aids retention.",
      chapterRef: "(Ch. 8: The Information-Processing Approach)"
    }
  ],
  formativeAssessment: [
    {
      type: "drag-drop",
      question: "In the code: 'function g(t) { return t + 1; }', what is 't' equivalent to in Algebra?",
      options: ["The Domain (Input)", "The Range (Output)", "The Constant"],
      correctAnswer: "The Domain (Input)"
    }
  ]
};