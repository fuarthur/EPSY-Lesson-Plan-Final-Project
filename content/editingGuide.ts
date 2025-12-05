export const editingGuideContent = `
# Content Editing Guide

Welcome to the EduLogic Content System. This application is built to be **content-first**, meaning you can modify the curriculum, lesson plans, and instructional logic without needing to touch the React application code.

## 📂 File Structure

All curriculum content is located in the \`content/\` directory:

*   \`content/unitOverview.ts\`: Controls the text on the "Unit Overview" landing page.
*   \`content/philosophy.ts\`: Controls the "Teaching Philosophy" page.
*   \`content/lessons/\`: This folder contains individual files for each lesson (e.g., \`lesson01.ts\`).

## ✏️ How to Edit an Existing Lesson

1.  Navigate to \`content/lessons/\`.
2.  Open the file you wish to change (e.g., \`lesson01.ts\`).
3.  Edit the text strings directly.
    *   **Objectives**: Add or remove strings in the \`objectives\` array.
    *   **Steps**: modify \`instructorScript\` or \`studentActivity\` to change the class flow.
    *   **Interactions**: Change \`interactiveData\` to modify quiz questions or code starters.
4.  Save the file. The website will automatically update.

## ➕ How to Add a New Lesson

1.  **Duplicate the Template**:
    *   Find \`content/lessons/lessonTemplate.ts\`.
    *   Copy it and save it as a new file, e.g., \`content/lessons/lesson07.ts\`.

2.  **Update Lesson Metadata**:
    *   Change \`id\` to a unique string (e.g., \`"l07"\`).
    *   Change \`sequenceNumber\` to the next number in the unit (e.g., \`7\`).
    *   Update \`title\`, \`author\`, and \`objectives\`.

3.  **Register the Lesson**:
    *   Open \`content/index.ts\`.
    *   Import your new file at the top:
        \`\`\`typescript
        import { lesson07 } from './lessons/lesson07';
        \`\`\`
    *   Add it to the \`lessons\` array at the bottom:
        \`\`\`typescript
        export const lessons = [lesson01, ..., lesson06, lesson07];
        \`\`\`

## 🛠 Interactive Components

You can embed widgets into any lesson step using the \`interactiveComponent\` field:

*   **\`sandbox\`**: A code/pseudocode editor.
    *   *Requires*: \`interactiveData: { placeholder: "Starter code..." }\`
*   **\`graph\`**: An interactive chart (linear or scatter).
    *   *Requires*: \`interactiveData: { type: "linear" }\`
*   **\`quiz\`**: A multiple-choice or reflection question.
    *   *Requires*: \`interactiveData: { question: "...", options: [...], correct: "..." }\`

## 🧠 Educational Psychology Integration

Don't forget to document your pedagogical choices!
*   Add entries to the \`edPsychNotes\` array.
*   Use the \`rationale\` field in individual steps to explain "Why this step?" (renders as a collapsible tooltip).
`;
