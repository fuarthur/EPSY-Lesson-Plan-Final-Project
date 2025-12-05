// Content Data Schema

export interface EdPsychConcept {
  concept: string; // The bolded concept name
  explanation: string; // How it is applied
  chapterRef: string; // e.g., (Ch. 4: Motivation)
}

export interface Material {
  name: string;
  type: 'physical' | 'digital' | 'link';
  url?: string;
}

export interface FormativeCheck {
  question: string;
  options?: string[];
  correctAnswer?: string; // For auto-checking
  type: 'multiple-choice' | 'reflection' | 'drag-drop';
}

export interface LessonStep {
  title: string;
  duration: string;
  instructorScript: string; // Detailed script for substitute
  studentActivity: string;
  interactiveComponent?: 'sandbox' | 'graph' | 'quiz' | 'none';
  interactiveData?: any; // Config for the component
  rationale?: string; // Pedagogical reasoning (collapsible)
}

export interface Lesson {
  id: string;
  sequenceNumber: number;
  title: string;
  author: string;
  unitSection: string;
  objectives: string[]; // Bloom's Taxonomy aligned
  duration: string; // Total time
  materials: Material[];
  steps: LessonStep[];
  edPsychNotes: EdPsychConcept[];
  formativeAssessment: FormativeCheck[];
}

export interface UnitOverview {
  title: string;
  gradeLevel: string;
  mode: string;
  theme: string;
  description: string;
  diversityFocus: string;
}

export interface Philosophy {
  title: string;
  authors: string[];
  content: string; // Markdown-like text
}
