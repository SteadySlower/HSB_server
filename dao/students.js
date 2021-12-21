
exports.selectStudent = async function (connection, studentID) {
    const selectStudentQuery = `
                SELECT *
                FROM Student
                WHERE id = ?;
                  `;
    const [studentRows] = await connection.query(selectStudentQuery, studentID);
    return studentRows;
}


