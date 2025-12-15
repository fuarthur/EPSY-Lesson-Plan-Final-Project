import { Lesson } from '../../types';

export const lesson04: Lesson = {
  id: "l04",
  sequenceNumber: 4,
  title: "Iterating Reality: Arrays and Linear Search",
  author: "Roshan Balla",
  unitSection: "Math-CS Connections",
  objectives: [
    "Apply 0-based indexing rules to locate and retrieve specific data points within a structured array.",
    "Evaluate a dataset using an iterative loop concept to identify specific conditions (e.g., maximum value)."
  ],
  duration: "55 minutes",
  materials: [
    { name: "Code Sandbox Environment", type: "digital", url: "https://codesandbox.io/" },
    { name: "Set of 5 numbered index cards (physical)", type: "physical" },
    { name: "Teacher Laptop with Internet Access", type: "physical" },
    { name: "Classroom Projector/Smartboard", type: "physical" },
    { name: "Student Laptops/Chromebooks (1 per student)", type: "physical" }
  ],
  steps: [
    {
      title: "Hook: The Off-By-One Error",
      duration: "10 min",
      instructorScript:
        "DO: Project an image of a parking lot with numbered spots 0, 1, 2, 3.\n\n"
        + "SAY: 'If I park in the first spot, what is my spot number?' (Wait for answer: 0).\n"
        + "SAY: 'Humans count 1, 2, 3. Computers count 0, 1, 2. This is called Zero-Indexing.'\n\n"
        + "DO: Write on whiteboard: SCORES = [90, 85, 100].\n"
        + "SAY: 'What is SCORES[1]?'\n"
        + "DO: Wait for students to say 90. Then shake head.\n"
        + "SAY: 'No, SCORES[0] is 90. SCORES[1] is 85.'\n"
        + "CHECK: Ask a student to identify the value of SCORES[2]. (Answer: 100).",
      studentActivity:
        "Students participate in the rapid-fire Q&A, correcting their initial intuition to match the computer's logic.",
      interactiveComponent: "none",
      rationale:
        "Addresses the student's prior knowledge and potential misconceptions through social dialogue, a key component of the **Social Constructivist Approach**."
    },
    {
      title: "Activity: The Human Loop",
      duration: "15 min",
      instructorScript:
        "DO: Call 5 volunteers to the front of the room.\n"
        + "DO: Hand each student a random numbered index card.\n"
        + "DO: Line them up side-by-side facing the class.\n\n"
        + "SAY: 'I am the Loop Variable 'i'. I start at index 0.' (Stand in front of the first student).\n"
        + "SAY: 'I am looking for the highest number. Current Max is 0.'\n"
        + "DO: Walk to student 0. Look at card. Compare to Max. Update Max if needed.\n"
        + "DO: Take a visible step to student 1.\n\n"
        + "SAY: 'Class, what do I do now?' (Expected: Compare and move).\n"
        + "DO: Repeat until the end of the line.\n"
        + "SAY: 'This physical walking is exactly what the 'FOR LOOP' does in the computer.'",
      studentActivity:
        "Selected students act as data points. The rest of the class directs the teacher's movement, verbalizing the comparison logic.",
      interactiveComponent: "none",
      rationale:
        "Applies **Situated Cognition**. By placing the abstract concept of iteration into a physical, social context (the human line), learning becomes embedded in the activity and environment."
    },
    {
      title: "Collaborative Coding: The Weather Analyst",
      duration: "20 min",
      instructorScript:
        "DO: Assign students into pairs.\n"
        + "DO: Direct them to the Code Sandbox link.\n\n"
        + "SAY: 'You have a dataset: temps = [72, 68, 75, 81, 69].'\n"
        + "SAY: 'Challenge: Write a loop that checks every number. If the number is above 80, print \"Heat Wave\".'\n\n"
        + "DO: Walk around the room.\n"
        + "CHECK: Listen for students asking each other 'What is i right now?'\n"
        + "CHECK: Ensure they are using square brackets [i] to access the number, not just using 'i'.",
      studentActivity:
        "Students work in pairs to write the pseudocode/code. Driver types, Navigator checks logic.",
      interactiveComponent: "sandbox",
      interactiveData: { 
        placeholder: "var temps = [72, 68, 75, 81, 69];\n\nfor (var i = 0; i < 5; i = i + 1) {\n  // check temps[i]\n}" 
      },
      rationale:
        "Uses **Cooperative Learning**. Working in pairs requires positive interdependence; students must communicate and articulate their logic to succeed."
    },
    {
      title: "Reflection: Debugging Thinking",
      duration: "10 min",
      instructorScript:
        "DO: Ask students to stop typing and look at their code.\n\n"
        + "SAY: 'Did anyone make the mistake of using index 1 first? Or going past the end of the list?'\n"
        + "SAY: 'I want you to write a 2-sentence 'Note to Self' about how to avoid index errors in the future.'\n\n"
        + "DO: Collect the notes as an exit ticket.",
      studentActivity:
        "Students self-assess their code and write a strategy (e.g., 'Always start counting at 0').",
      interactiveComponent: "none",
      rationale:
        "Encourages students to internalize the shared knowledge, shifting from social regulation to self-regulation (related to **Cognitive Apprenticeship**)."
    }
  ],
  edPsychNotes: [
    {
      concept: "Situated Cognition",
      explanation:
        "The 'Human Loop' activity grounds thinking in real-world activity and social interaction, rather than abstract isolation.",
      chapterRef: "(Ch. 10: Social Constructivist Approaches)"
    },
    {
      concept: "Cooperative Learning",
      explanation:
        "Students work in small groups (pairs) to solve the coding challenge, promoting mutual learning and communication skills.",
      chapterRef: "(Ch. 10: Social Constructivist Approaches)"
    },
    {
      concept: "Social Constructivist Approach",
      explanation:
        "The lesson emphasizes the social contexts of learning (class discussion, pair work) and that knowledge is mutually constructed and agreed upon.",
      chapterRef: "(Ch. 10: Social Constructivist Approaches)"
    },
    {
      concept: "Cognitive Apprenticeship",
      explanation:
        "The teacher models the 'Loop Variable' role (expert) before students attempt the code (apprentice), making the thinking process visible.",
      chapterRef: "(Ch. 10: Social Constructivist Approaches)"
    }
  ],
  formativeAssessment: [
    {
      type: "multiple-choice",
      question: "If an array has 5 items, what is the index of the LAST item?",
      options: ["5", "4", "0", "1"],
      correctAnswer: "4"
    }
  ]
};