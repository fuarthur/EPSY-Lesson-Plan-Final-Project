import { Philosophy } from '../types';

export const philosophyData: Philosophy = {
  title: "Teaching Philosophy: A Constructivist Approach to CS and Math",
  authors: ["Arthur Fu", "Roshan Balla", "Nathanael Seon"],
  content: `
  ### Core Philosophy
  Our group believes that Computer Science and Mathematics are not merely collections of facts or syntax rules, but *literacies* that empower students to decode and reshape their world. We adhere to a **Social Constructivist** framework, positing that knowledge is constructed by learners through active engagement with problems and dialogue with peers, rather than passively received from an instructor.

  ### Learner Diversity & Inclusion
  We recognize that high school classrooms are heterogeneous environments. Our unit addresses learner diversity through:
  *   **differentiation of content**: providing both graphical blocks and text-based pseudocode options.
  *   **differentiation of process**: allowing students to solve problems individually or in virtual breakout pairs.
  *   **accessibility**: ensuring all virtual manipulatives are keyboard navigable and high-contrast.
  
  We specifically target the "Math Anxiety" often found in CS beginners by reframing algebraic concepts (like variables and functions) as tools for creative expression in coding, thereby lowering the affective filter and boosting **self-efficacy**.

  ### Logic of the Unit Structure
  The sequence is designed to move from the *concrete* to the *abstract* (Bruner’s representation modes):
  1.  **Lessons 1-2 (Arthur)**: Focus on *Algorithmic Thinking*. We start here because logic requires no prerequisite syntax knowledge. It levels the playing field.
  2.  **Lessons 3-4 (Roshan)**: Connect to *Data & Patterns*. Once students can think in steps, we introduce the 'objects' of those steps—data. We use visualization to bridge math and CS.
  3.  **Lessons 5-6 (Nathanael)**: *Applied Algebra*. Finally, we tackle the hardest abstraction—variables and loops—grounding them in the logic and data skills built in the previous weeks.

  ### Pedagogical Design Choices
  In our lesson plans, you will see a recurring use of **scaffolding** and **metacognitive prompts**. We believe that asking students *how* they solved a problem is as important as the solution itself. By explicitly integrating Educational Psychology concepts like **working memory load management** (chunking instructions) and **retrieval practice** (warm-ups that recall previous lessons), we design not just for content delivery, but for how the human brain actually learns.
  `
};