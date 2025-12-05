import { Lesson } from '../../types';

/**
 * ==========================================
 * LESSON PLAN TEMPLATE & EDITING GUIDE
 * ==========================================
 * 
 * INSTRUCTIONS FOR USE:
 * 1. COPY this file and rename it (e.g., "lesson07.ts").
 * 2. EDIT the fields below. Comments explain what each field does.
 * 3. REGISTER the new lesson in `content/index.ts` by importing it
 *    and adding it to the `lessons` array.
 */

export const lessonTemplate: Lesson = {
  // UNIQUE ID: Used for the URL (e.g., /lessons/l07). Must be unique.
  id: "template_lesson",

  // SEQUENCE: The order in the sidebar (e.g., 7).
  sequenceNumber: 99,

  // TITLE: The main heading of the lesson.
  title: "[Insert Lesson Title Here]",

  // AUTHOR: Your name.
  author: "[Author Name]",

  // UNIT SECTION: The module this belongs to (e.g., "Algorithmic Thinking").
  unitSection: "[Module Name]",

  // OBJECTIVES: 
  // Use action verbs (Bloom's Taxonomy). 
  // Example: "Analyze the efficiency of a loop."
  objectives: [
    "Objective 1: [Verb] [Concept]",
    "Objective 2: [Verb] [Concept]"
  ],

  // DURATION: e.g., "45 minutes" or "1 hour".
  duration: "[Time Estimate]",

  // MATERIALS:
  // List digital or physical items.
  // If type is 'link', provide the 'url'.
  materials: [
    { name: "Slide Deck: [Topic]", type: "digital" },
    { name: "Worksheet PDF", type: "digital" },
    { name: "External Tool Name", type: "link", url: "https://example.com" }
  ],

  // STEPS: The core instructional sequence.
  steps: [
    {
      title: "Step 1: Warm-up / Hook",
      duration: "5 min",
      
      // SCRIPT: Detailed enough for a substitute teacher.
      instructorScript: "Teacher says: 'Welcome class. Today we will...'",
      
      // ACTIVITY: What the students are doing during this time.
      studentActivity: "Students respond to poll...",
      
      // INTERACTIVE COMPONENT (Optional):
      // Options: 'sandbox' (code editor), 'graph' (chart), 'quiz' (check), or 'none'.
      interactiveComponent: "none",
      
      // RATIONALE (Optional):
      // Explain the 'Why'. Supports Ed Psych concepts.
      rationale: "Uses **Retrieval Practice** to warm up..."
    },
    {
      title: "Step 2: Core Activity",
      duration: "20 min",
      instructorScript: "Explain the concept of...",
      studentActivity: "Students practice...",
      
      // Example of an Interactive Sandbox
      interactiveComponent: "sandbox",
      interactiveData: { 
        placeholder: "// Students will see this code initially\nfunction setup() {\n  // ...\n}" 
      }
    }
  ],

  // ED PSYCH NOTES:
  // Connect specific parts of the lesson to educational theory.
  edPsychNotes: [
    { 
      concept: "Scaffolding", 
      explanation: "We provide the starter code so students focus on logic, not syntax.", 
      chapterRef: "(Ch. 10: Constructivism)" 
    }
  ],

  // FORMATIVE ASSESSMENT:
  // A check for understanding displayed at the bottom of the lesson.
  formativeAssessment: [
    {
      type: "multiple-choice", // or 'reflection', 'drag-drop'
      question: "What was the main concept?",
      options: ["Concept A", "Concept B"],
      correctAnswer: "Concept A"
    }
  ]
};
