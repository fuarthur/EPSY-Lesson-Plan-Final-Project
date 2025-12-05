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
    { name: "Worksheet: The Club Bouncer", type: "digital" },
    { name: "Slide Deck: Boolean Logic and Conditionals", type: "digital" }
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
        "Uses **Anchored Instruction** by grounding abstract boolean logic in a familiar, story-based context that students can easily reason about."
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
        "Using clear visuals and step-by-step modeling supports **Working Memory** by reducing cognitive load and helping students track each branch of the decision."
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
        "**Cooperative Learning** lets students talk through their reasoning with a partner, strengthening understanding of boolean rules while staying within their **Working Memory** limits."
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
        "Highlights **Transfer** by showing how logical operators learned in a story context also apply to programming and algebraic inequalities."
    }
  ],
  edPsychNotes: [
    {
      concept: "Anchored Instruction",
      explanation: "The 'Club Bouncer' story anchors abstract boolean logic in a concrete, engaging scenario.",
      chapterRef: "(Ch. 9: Complex Cognition)"
    },
    {
      concept: "Cooperative Learning",
      explanation: "Pair work on logic puzzles encourages students to explain and negotiate their thinking with peers.",
      chapterRef: "(Ch. 10: Social Constructivism)"
    },
    {
      concept: "Working Memory",
      explanation: "Visual flowcharts and step-by-step modeling reduce cognitive load so students can focus on the new symbols AND, OR, and NOT.",
      chapterRef: "(Ch. 8: Information Processing)"
    },
    {
      concept: "Transfer",
      explanation: "The wrap-up explicitly connects boolean operators to mathematical inequalities and real-world decision making.",
      chapterRef: "(Ch. 9: Transfer of Learning)"
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
