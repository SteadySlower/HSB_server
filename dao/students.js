exports.countNumOfClass = async function (connection, grade) {
  const query = `
    SELECT COUNT(DISTINCT classNumber) AS cnt
    FROM Student
    WHERE grade = ?;
  `;
  const [rows] = await connection.query(query, grade);
  return rows;
}

exports.countNumOfStudent = async function (connection, params) {
  const query = `
    SELECT COUNT(*) AS cnt
    FROM Student
    WHERE grade = ? AND classNumber = ?;
  `;
  const [rows] = await connection.query(query, params);
  return rows;
}

exports.selectStudent = async function (connection, studentID) {
  const query = `
    SELECT *
    FROM Student
    WHERE id = ?;
    `;
  const [rows] = await connection.query(query, studentID);
  return rows;
}

