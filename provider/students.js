const { pool } = require('../config/database.js')
const studentDao = require('../dao/students')

// 학년별 반, 반별 학생수 찾기
exports.getTotalNumber = async function (studentID) {
  const connection = await pool.promise().getConnection(async (conn) => conn);

  let numOfClassResult = {}
  for (let grade = 1; grade < 4; grade++) {
    const numOfClass = await studentDao.countNumOfClass(connection, grade)
    numOfClassResult[grade] = numOfClass[0].cnt
  }

  let numOfStudentsResult = {1: {}, 2: {}, 3: {}}
  for (let grade = 1; grade < 4; grade++) {
    const numOfClassOfGrade = numOfClassResult[grade]
    for (let classNum = 1; classNum <= numOfClassOfGrade; classNum++) {
      params = [grade, classNum]
      const numOfStudents = await studentDao.countNumOfStudent(connection, params)
      numOfStudentsResult[grade][classNum] = numOfStudents[0].cnt
    }
  }

  result = {
    numOfClasses: numOfClassResult,
    numOfStudents: numOfStudentsResult
  }

  connection.release();
  return result;
};

// 학번으로 학생 찾기
exports.getStudentInfo = async function (studentID) {
    const connection = await pool.promise().getConnection(async (conn) => conn);
    const selectStudentResult = await studentDao.selectStudent(connection, studentID);
    connection.release();
    return selectStudentResult[0];
};
