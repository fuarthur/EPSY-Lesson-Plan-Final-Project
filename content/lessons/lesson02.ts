import { Lesson } from '../../types';

export const lesson02: Lesson = {
  id: "l02",
  sequenceNumber: 2,
  title: "Logic Gates & Decision Trees",
  author: "Arthur Fu",
  unitSection: "Algorithmic Thinking",
  objectives: [
    "Identify basic boolean operators (AND, OR, NOT) in real-world scenarios.",
    "Construct a decision tree to solve a binary classification problem."
  ],
  duration: "50 minutes",
  materials: [
    { name: "Logic Gate Visualizer Tool", type: "digital" },
    { name: "Teacher Laptop with Internet Access", type: "physical" },
    { name: "Classroom Projector/Smartboard", type: "physical" },
    { name: "Student Laptops/Chromebooks (1 per student)", type: "physical" }
  ],
  steps: [
    {
      title: "Hook: The Club Bouncer",
      duration: "10 min",
      instructorScript:
        "1. Display a slide titled 'The Club Bouncer.'\n"
        + "2. Say: 'Imagine a club with a bouncer at the door. Today the rule is: You can enter if you are over 18 AND you have a ticket.'\n"
        + "3. Present several examples (e.g., 'Sam is 19 with a ticket,' 'Alex is 17 with a ticket'). Ask: 'Who gets in? Who gets turned away?' Have students vote using the reaction buttons or a poll.\n"
        + "4. Change the rule on the slide to OR and say: 'Now the rule is: You can enter if you are over 18 OR you have a ticket.' Repeat the examples and ask again who gets in.\n"
        + "5. Introduce the terms AND, OR, and NOT and say: 'These are called boolean operators. They help computers make yes/no decisions.'",
      studentActivity:
        "Students listen to the scenario, decide who gets into the club for each rule, and vote or answer in the chat.",
      interactiveComponent: "quiz",
      interactiveData: {
        question: "Rule: Shoes OR Shirt required. A person has shoes but no shirt. Do they enter?",
        options: ["Yes", "No"],
        correct: "Yes"
      },
      rationale:
        "Uses **Attention** to focus students on the relevant decision cues in each example (age, ticket, shoes, shirt), and builds structured **Decision Making** by having students apply AND/OR rules to make clear yes/no entry decisions."
    },
    {
      title: "Concept Lesson: Conditionals and Flowcharts",
      duration: "15 min",
      instructorScript:
        "1. Share the slide 'If–Else Statements.'\n"
        + "2. Explain: 'Computers use IF, ELSE IF, and ELSE to decide which instructions to follow.'\n"
        + "3. On the slide, show a simple example: 'IF it is raining THEN bring an umbrella ELSE bring sunglasses.'\n"
        + "4. Demonstrate how this becomes a flowchart with a diamond for the question and arrows for YES/NO.\n"
        + "5. Model one more example out loud and draw the flowchart step by step so students can see each decision point.\n"
        + "6. Ask students to think of another daily decision (e.g., 'Should I do homework now?') and share one condition in the chat.",
      studentActivity:
        "Students copy the example conditional and flowchart into their notes, then brainstorm their own conditional ideas based on everyday decisions.",
      interactiveComponent: "none",
      rationale:
        "Supports **Attention** with clean, highly visual flowcharts that highlight the current decision point, and strengthens **Decision Making** by making the IF/ELSE logic explicit (condition → outcome) at each branch."
    },
    {
      title: "Activity: Logic Puzzles and Decision Trees",
      duration: "20 min",
      instructorScript:
        "1. Distribute or display the 'Club Bouncer' or logic circuit worksheet.\n"
        + "2. Say: 'Work with a partner. Use AND, OR, and NOT to describe the rules for each situation, then draw a decision tree or flowchart that shows how the decision is made.'\n"
        + "3. Demonstrate the first problem together as a class so everyone sees what a finished decision tree should look like.\n"
        + "4. Circulate virtually (or visit breakout rooms) to answer questions. Prompt students to explain their reasoning: 'Why did you put this branch here? What happens if this condition is false?'\n"
        + "5. Invite one pair to share their tree and verbal explanation with the whole class.",
      studentActivity:
        "Students work in pairs to solve logic puzzles, writing conditional statements and drawing decision trees or simple logic diagrams, then share one solution.",
      interactiveComponent: "sandbox",
      interactiveData: {
        placeholder:
          "// Example conditional for weather decision:\n"
          + "IF (raining AND cold) THEN\n"
          + "  Wear a coat and bring an umbrella\n"
          + "ELSE IF (raining AND NOT cold) THEN\n"
          + "  Bring an umbrella only\n"
          + "ELSE\n"
          + "  Wear a T-shirt\n"
      },
      rationale:
        "Promotes **Near Transfer** by moving from the club-entry examples to similar everyday rule systems (weather, dress code, school policies) that still use AND/OR/NOT logic, while partners keep **Attention** on the key conditions by explaining where each branch belongs."
    },
    {
      title: "Wrap Up: From Clubs to Code and Math",
      duration: "5 min",
      instructorScript:
        "1. Bring the class back together and show a summary slide with the words AND, OR, and NOT.\n"
        + "2. Ask: 'Where else might we use these kinds of rules? In computer programs? In math? In real-life decisions?'\n"
        + "3. Explicitly connect to math inequalities: 'For example, x > 5 AND x < 10 describes numbers between 5 and 10.'\n"
        + "4. Have students answer one quick question: 'Which operator requires both conditions to be true?' using the poll or chat.",
      studentActivity:
        "Students share examples of how boolean rules appear in everyday life, computing, and math, then respond to the final check-for-understanding question.",
      interactiveComponent: "none",
      rationale:
        "Encourages **Far Transfer** by connecting boolean operators to unfamiliar academic contexts (algebraic inequalities and programming conditionals), and reinforces **Decision Making** by requiring students to justify which operator matches a given rule."
    }
  ],
  edPsychNotes: [
    {
      concept: "Attention",
      explanation:
        "The lesson uses clear visuals, polls, and story-based examples to focus students’ attention on relevant decision cues while minimizing distractions.",
      chapterRef: "(Chapter 8: The Information-Processing Approach)"
    },
    {
      concept: "Decision Making",
      explanation:
        "Students practice structured decision making by evaluating conditions and outcomes using AND, OR, and NOT rules.",
      chapterRef: "(Chapter 9: Complex Cognitive Processes)"
    },
    {
      concept: "Near Transfer",
      explanation:
        "Applying boolean logic from the club scenario to similar everyday rules supports near transfer of learning.",
      chapterRef: "(Chapter 9: Complex Cognitive Processes)"
    },
    {
      concept: "Far Transfer",
      explanation:
        "The wrap-up connects logical operators to programming and algebraic inequalities, encouraging far transfer to new academic domains.",
      chapterRef: "(Chapter 9: Complex Cognitive Processes)"
    }
  ],
  formativeAssessment: [
    {
      type: "multiple-choice",
      question: "Which operator requires BOTH conditions to be true?",
      options: ["OR", "AND", "NOT", "XOR"],
      correctAnswer: "AND"
    }
  ]
};
