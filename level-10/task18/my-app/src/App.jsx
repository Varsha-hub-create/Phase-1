function App() {

const students = [
  { name: "varsha", age: 22, grades: [85, 90, 78] },
  { name: "nandhu", age: 19, grades: [70, 75, 80] },
  { name: "madhu", age: 23, grades: [88, 92, 95] },
  { name: "kalai", age: 18, grades: [60, 65, 70] }
];

const studentNames = students.map(student => student.name);

const olderStudents = students.filter(student => student.age > 20);

const totalGrades = students.reduce((acc, student) => acc.concat(student.grades), []);
const averageGradeAll = totalGrades.reduce((sum, grade) => sum + grade, 0) / totalGrades.length;

const avgGradeOlderStudents = students
  .filter(student => student.age > 20) 
  .map(student => student.grades)
  .reduce((acc, grades) => acc.concat(grades), []) 
  .reduce((sum, grade, _, arr) => sum + grade / arr.length, 0); 
console.log("Student Names:", studentNames);
console.log("Students Older than 20:", olderStudents);
console.log("Average Grade of All Students:", averageGradeAll.toFixed(2));
console.log("Average Grade of Students Older than 20:", avgGradeOlderStudents.toFixed(2));

  }
  
  export default App; 
  