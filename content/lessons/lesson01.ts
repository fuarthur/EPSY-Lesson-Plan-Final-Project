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
    { name: "Digital Whiteboard (Jamboard/Miro)", type: "digital", url: "https://miro.com"},
    { name: "Teacher Laptop with Internet Access", type: "physical" },
    { name: "Classroom Projector/Smartboard", type: "physical" },
    { name: "Student Laptops/Chromebooks (1 per student)", type: "physical" }
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
      studentActivity:
        "Students watch the video/GIF and type their explanation of the robot's error in the chat.",
      interactiveComponent: "none",
      rationale:
        "Uses **Scaffolding** by starting with a simple, concrete failure example and guiding students toward the need for precise, step-by-step instructions before introducing formal vocabulary."
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
      studentActivity:
        "Students listen, copy key definitions into notes, and suggest additional steps for the tooth-brushing example.",
      interactiveComponent: "none",
      rationale:
        "Supports **Working Memory** by chunking a familiar routine into short, ordered steps and using teacher modeling so students can follow the sequence without being overwhelmed."
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
        "Strengthens **Encoding** by translating a familiar real-world task into explicit pseudocode, and supports **Working Memory** by limiting contributions to one instruction at a time so students can track and revise the algorithm step-by-step."
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
        "Encourages **Metacognition** by having students reflect on how their instructions changed, and reinforces **Encoding** by asking students to articulate the key idea (precision) in their own words."
    }
  ],
  edPsychNotes: [
    {
      concept: "Scaffolding",
      explanation:
        "The teacher models decomposition with familiar examples and gradually shifts responsibility to students as they generate and refine precise instructions.",
      chapterRef: "(Chapter 2: Cognitive and Language Development)"
    },
    {
      concept: "Metacognition",
      explanation:
        "Students reflect on how their thinking changed as they debugged unclear instructions, increasing awareness of planning and revision strategies.",
      chapterRef: "(Chapter 8: The Information-Processing Approach)"
    },
    {
      concept: "Working Memory",
      explanation:
        "The lesson reduces cognitive overload by chunking tasks and collecting one instruction at a time so students can hold and revise steps efficiently.",
      chapterRef: "(Chapter 8: The Information-Processing Approach)"
    },
    {
      concept: "Encoding",
      explanation:
        "Turning a familiar task into pseudocode supports encoding by linking concrete experience to an abstract algorithmic representation.",
      chapterRef: "(Chapter 8: The Information-Processing Approach)"
    }
  ],
  formativeAssessment: [
    {
      type: "reflection",
      question: "Why is 'Make a sandwich' not a valid algorithm for a computer?"
    }
  ]
};
