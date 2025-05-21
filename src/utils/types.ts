export interface User {
  id: string;
  email: string;
  role: "admin" | "student";
  name: string;
}
export interface Exam {
  id: string;
  title: string;
  description: string;
  timeLimit: number;
  passingScore: number;
  questions: Question[];
  createdBy: string;
  assignedTo: string[];
}
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}