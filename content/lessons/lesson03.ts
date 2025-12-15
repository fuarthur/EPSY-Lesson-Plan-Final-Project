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
    { name: "Digital Graphing Tool (Desmos/EduLogic Grapher)", type: "digital", url: "https://www.desmos.com/calculator" },
    { name: "Teacher Laptop with Internet Access", type: "physical" },
    { name: "Classroom Projector/Smartboard", type: "physical" },
    { name: "Student Laptops/Chromebooks (1 per student)", type: "physical" }
  ],
  steps: [
    {
      title: "Anticipatory Set: The Universal Language",
      duration: "10 min",
      instructorScript:
        "DO: Write 'f(x) = 2x + 5' on the left side of the whiteboard.\n"
        + "DO: Write 'function f(x) { return 2*x + 5; }' on the right side of the whiteboard.\n\n"
        + "SAY: 'We know the left side is Math. The right side is JavaScript. Identify three visual similarities and one visual difference.'\n\n"
        + "DO: Wait 60 seconds for students to observe.\n"
        + "DO: Cold call 3 students to share answers.\n"
        + "CHECK: Ensure students identify the parentheses '()' and the variable 'x'.\n\n"
        + "SAY: 'Computer Science is just Applied Math. Today we are learning to translate between these two languages.'",
      studentActivity:
        "Students visually analyze the two equations on the board and write down similarities/differences in their notebooks.",
      interactiveComponent: "none",
      rationale:
        "Activates the student's existing **Schema** for algebra. By mapping new information (code) onto this existing framework, we facilitate easier retrieval and understanding."
    },
    {
      title: "Direct Instruction: The 'Return' of the Range",
      duration: "15 min",
      instructorScript:
        "DO: Project Slide 3 ('Inputs and Outputs').\n\n"
        + "SAY: 'In Algebra, you put a Domain value (x) in, and get a Range value (y) out. In CS, we call this the Parameter (input) and the Return Value (output).'\n\n"
        + "DO: Walk to the whiteboard. Write the number '4'.\n"
        + "SAY: 'Let's trace this together. Math: f(4) = 2(4)+5 = 13.'\n"
        + "SAY: 'Code: Pass 4 into the function. The computer calculates 2*4+5 and 'returns' 13.'\n\n"
        + "SAY: 'If you don't write RETURN in code, the answer is calculated but thrown away. In Math, the equals sign does that work for us.'\n"
        + "CHECK: Ask students to give a thumbs up if they understand what 'Return' does.",
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
        "DO: Direct students to open the 'Digital Graphing Tool' link on their devices.\n\n"
        + "SAY: 'We are going to verify our code using a graph. If our code matches the math, the line will look the same.'\n\n"
        + "DO: Display the equation 'y = 0.5x - 2' on the board.\n"
        + "SAY: 'Task: Write this as a code function in the sandbox. Then, calculate the points for x=0, x=2, x=4 manually. Check if the graph passes through them.'\n\n"
        + "CHECK: Circulate the room. Look at student screens.\n"
        + "CHECK: Are they typing 'return'? Are they using '*' for multiplication? (0.5x is invalid in code, must be 0.5*x).",
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
        "DO: Show the final reflection question on the screen.\n\n"
        + "SAY: 'Why do we need to be more explicit in code (typing 'return', 'function') than in math?'\n\n"
        + "DO: Allow 2 minutes for silent writing.\n"
        + "SAY: 'Turn to your neighbor and share your answer.'\n"
        + "DO: Collect responses. Guide them to the realization that computers cannot infer intent; they are literal machines.",
      studentActivity:
        "Students respond to the reflection prompt, then share with a neighbor.",
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