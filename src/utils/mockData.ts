export const mockExamData = {
  title: "Web Development Fundamentals",
  description: "Test your knowledge of web development basics with this comprehensive exam.",
  timeLimit: 30,
  // in minutes
  passingScore: 70,
  questions: [{
    id: 1,
    text: "Which of the following is NOT a JavaScript framework or library?",
    options: ["React", "Angular", "Vue", "Jakarta"],
    correctAnswer: 3
  }, {
    id: 2,
    text: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 2
  }, {
    id: 3,
    text: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<stylesheet>"],
    correctAnswer: 1
  }, {
    id: 4,
    text: "Which property is used to change the background color in CSS?",
    options: ["color", "bgcolor", "background-color", "background"],
    correctAnswer: 2
  }, {
    id: 5,
    text: "What is the correct HTML element for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<newline>"],
    correctAnswer: 2
  }, {
    id: 6,
    text: "Which method is used to add an element at the end of an array in JavaScript?",
    options: ["push()", "append()", "addToEnd()", "insert()"],
    correctAnswer: 0
  }, {
    id: 7,
    text: "What does API stand for?",
    options: ["Application Programming Interface", "Application Process Integration", "Advanced Programming Interface", "Application Protocol Interface"],
    correctAnswer: 0
  }, {
    id: 8,
    text: "Which of the following is a valid way to declare a variable in JavaScript?",
    options: ["variable x;", "var x;", "v x;", "int x;"],
    correctAnswer: 1
  }, {
    id: 9,
    text: "What is the purpose of the `alt` attribute in an HTML image tag?",
    options: ["To define an alternate image", "To provide text description of the image", "To set alignment", "To define image dimensions"],
    correctAnswer: 1
  }, {
    id: 10,
    text: "Which HTTP method is used to request data from a specified resource?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 0
  }]
};
export const userPerformanceData = [{
  name: 'Exam 1',
  score: 85
}, {
  name: 'Exam 2',
  score: 67
}, {
  name: 'Exam 3',
  score: 92
}, {
  name: 'Exam 4',
  score: 78
}, {
  name: 'Current',
  score: 0
} // This will be updated with actual score
];