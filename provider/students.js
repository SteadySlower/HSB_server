const { pool } = require('../config/database.js')
const studentDao = require('../dao/students')

// 학번으로 학생 찾기
exports.getStudentInfo = async function (studentID) {
    const connection = await pool.promise().getConnection(async (conn) => conn);
    const checkMobileResult = await studentDao.selectStudent(connection, studentID);
    connection.release();
    return checkMobileResult;
  };
