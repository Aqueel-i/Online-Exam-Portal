import { create } from 'zustand';
import { Exam } from '../utils/types';
import { mockExamData } from '../utils/mockData';
interface ExamStore {
  exams: Exam[];
  addExam: (exam: Exam) => void;
  assignExam: (examId: string, userId: string) => void;
  getExamsForUser: (userId: string) => Exam[];
}
export const useExamStore = create<ExamStore>((set, get) => ({
  exams: [{
    ...mockExamData,
    id: "exam1",
    createdBy: "admin1",
    assignedTo: ["student1"]
  }],
  addExam: exam => set(state => ({
    exams: [...state.exams, exam]
  })),
  assignExam: (examId, userId) => set(state => ({
    exams: state.exams.map(exam => exam.id === examId ? {
      ...exam,
      assignedTo: [...exam.assignedTo, userId]
    } : exam)
  })),
  getExamsForUser: userId => {
    const {
      exams
    } = get();
    return exams.filter(exam => exam.createdBy === userId || exam.assignedTo.includes(userId));
  }
}));