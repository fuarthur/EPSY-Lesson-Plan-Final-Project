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
      instructorScript:
        "1. Share screen and play a short video or GIF of a robot failing a simple task because the instructions were vague.\n"
        + "2. Say: 'Watch what happens when the robot follows unclear directions. What went wrong?'\n"
        + "3. Ask students to type their ideas in the chat: 'Why did the robot fail? What was missing from the instructions?'\n"
        + "4. Emphasize aloud: 'Computers do not have common sense. They only follow exactly what we tell them.'",
      studentActivity: "Students watch the video/GIF and type their explanation of the robot's error in the chat.",
      interactiveComponent: "none",
      rationale:
        "Activates **Prior Knowledge** about everyday technology and highlights the need for precise steps before formal definitions."
    },
    {
      title: "Direct Instruction: Decomposition and Algorithms",
      duration: "10 min",
      instructorScript:
        "1. Display the slide titled 'Decomposition & Algorithms.'\n"
        + "2. Say: 'Decomposition means breaking a complex problem into smaller, manageable parts.' Write the word and a simple definition on the slide.\n"
        + "3. Say: 'An algorithm is a step-by-step list of instructions that a computer can follow.'\n"
        + "4. Model an example: 'Let’s decompose brushing teeth.' Write small steps, such as 'pick up toothbrush,' 'put toothpaste on brush,' 'move brush in small circles,' etc.\n"
        + "5. Ask students: 'Which step would come first? Which step would come next? What happens if we skip a step?' Call on 1–2 volunteers or have them answer in chat.",
      studentActivity: "Students listen, copy key definitions into notes, and suggest additional steps for the tooth-brushing example.",
      interactiveComponent: "none",
      rationale:
        "Provides clear **Scaffolding** by modeling how to break a familiar task into ordered steps before students attempt their own."
    },
    {
      title: "Guided Activity: The Exact Sandwich",
      duration: "20 min",
      instructorScript:
        "1. Say: 'Now I will pretend to be a robot. You will give me instructions to make a peanut butter and jelly sandwich.'\n"
        + "2. Explain the rule: 'I will follow your instructions literally. If you say \"put jelly on bread,\" I might put the entire jar on top of the bread.'\n"
        + "3. Open the Virtual Sandwich Maker Simulator or use the camera to show the materials (bread, jar, knife).\n"
        + "4. Ask students to submit one command at a time in the chat, such as 'Pick up the knife by the handle' or 'Open the peanut butter jar.'\n"
        + "5. Act out or simulate each command exactly as written. When a command is unclear, exaggerate the mistake and say: 'The algorithm had a bug.'\n"
        + "6. After several steps, pause and ask: 'How could we fix this instruction?' Work with the class to rewrite it in a more precise way.",
      studentActivity:
        "Students collaboratively type specific commands (e.g., 'Open the jar by twisting the lid counterclockwise') and watch the teacher-robot execute them, then help debug unclear steps.",
      interactiveComponent: "sandbox",
      interactiveData: {
        placeholder:
          "Example pseudocode:\n"
          + "1. Pick up the knife by the handle with your right hand.\n"
          + "2. Use your left hand to hold the peanut butter jar.\n"
          + "3. Twist the lid counterclockwise until it comes off...\n"
      },
      rationale:
        "Uses **Scaffolding** by having the teacher act as the 'computer' and provides **Immediate Feedback** when vague instructions cause visible errors, helping students refine their algorithms."
    },
    {
      title: "Closure & Reflection: Debugging Our Thinking",
      duration: "10 min",
      instructorScript:
        "1. Share a slide titled 'What Did We Learn?' listing a few of the funniest or most confusing commands from the activity.\n"
        + "2. Say: 'Let’s look at some of our “bugs.” Why did each one cause a problem? How did we fix it?'\n"
        + "3. Ask students: 'How is writing an algorithm like showing your work in a math problem? Where else in school do you need to be this precise?'\n"
        + "4. Post the reflection prompt: 'Why is \"Make a sandwich\" not a valid algorithm for a computer?' and give students quiet time to respond.",
      studentActivity:
        "Students discuss how the commands were improved, then individually answer the reflection prompt in an exit ticket or short written response.",
      interactiveComponent: "none",
      rationale:
        "Encourages **Metacognition** by having students reflect on how their own instructions changed and why precision matters in both computing and math."
    }
  ],
  edPsychNotes: [
    {
      concept: "Prior Knowledge",
      explanation: "The warm-up connects to students’ existing experiences with robots and technology to make the new idea of algorithms more meaningful.",
      chapterRef: "(Ch. 6: Prior Knowledge and Learning)"
    },
    {
      concept: "Scaffolding",
      explanation: "The teacher models decomposition with a familiar task and then supports students as they write their own sandwich algorithms.",
      chapterRef: "(Ch. 10: Constructivism)"
    },
    {
      concept: "Immediate Feedback",
      explanation: "When vague steps lead to silly robot behavior, students see right away that their algorithm needs revision.",
      chapterRef: "(Ch. 11: Behavioral Views)"
    },
    {
      concept: "Metacognition",
      explanation: "The closing reflection invites students to think about how they think and how they can plan clearer algorithms in the future.",
      chapterRef: "(Ch. 7: Metacognition)"
    }
  ],
  formativeAssessment: [
    {
      type: "reflection",
      question: "Why is 'Make a sandwich' not a valid algorithm for a computer?"
    }
  ]
};
