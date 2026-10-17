export type CellValue = string | number | boolean | null;

export interface CellFormat {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  align?: 'left' | 'center' | 'right';
  bgColor?: string;
  textColor?: string;
  border?: 'none' | 'all' | 'bottom' | 'top' | 'box';
  numberFormat?: 'general' | 'currency' | 'percent' | 'number' | 'date';
}

export interface CellData {
  raw: string;
  computed: CellValue;
  format?: CellFormat;
}

export interface Sheet {
  id: string;
  name: string;
  cells: Record<string, CellData>;
  columnWidths?: Record<string, number>;
}

export interface WorkbookData {
  activeSheetId: string;
  sheets: Sheet[];
}

export interface TeachingStep {
  id: string;
  title: string;
  explanation: string;
  speechText: string;
  targetCell?: string;
  suggestedFormula?: string;
}

export interface TaskValidation {
  targetCell: string;
  expectedValue?: any;
  expectedFormulaKeywords?: string[];
  errorMessage?: string;
  successMessage?: string;
}

export interface LessonTask {
  id: string;
  targetCell: string;
  instruction: string;
  hints: string[];
  validation: TaskValidation;
  isCompleted?: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: Record<string, string>;
  correctOption: string;
  explanation?: string;
}

export interface LessonQuiz {
  id: string;
  title: string;
  passingScore?: number;
  questions: QuizQuestion[];
}

export interface LearningObjective {
  id: string;
  title: string;
  description: string;
}

export interface Lesson {
  id: string;
  phaseId: number;
  title: string;
  shortDesc: string;
  durationMinutes: number;
  level: 'Başlangıç' | 'Orta' | 'İleri' | 'Uzman';
  objectives: LearningObjective[];
  teachingSteps: TeachingStep[];
  initialWorkbook: WorkbookData;
  tasks: LessonTask[];
  quiz?: LessonQuiz;
  primaryGoal?: string;
  prerequisites?: string[];
  successCriteria?: string;
  commonMistakes?: string[];
}

export interface CurriculumPhase {
  id: number;
  category: string;
  title: string;
  shortDesc: string;
  lessons: Lesson[];
}

export interface UserMistake {
  lessonId: string;
  cellAddress: string;
  userFormula: string;
  errorType: string;
  advice: string;
  timestamp?: number;
}

export interface UserProgress {
  currentLessonId: string;
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  mistakes: UserMistake[];
  skillMastery: Record<string, number>;
  notes: Record<string, string>;
}
