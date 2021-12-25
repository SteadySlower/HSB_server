const { pool } = require('../config/database.js');
const guidanceProvider = require('../provider/guidance.js');
const guidanceDao = require('../dao/guidance.js');


// 생활지도 등록하기
exports.createGuidance = async function (studentID, reason, detail) {
    const connection = await pool.promise().getConnection(async (conn) => conn);
    const params = [ studentID, reason, detail ];
    const insertResult = await guidanceDao.insertGuidance(connection, params);
    const guidanceID = insertResult[0].insertId
    console.log(`추가된 생활지도 : ${guidanceID}`)
    connection.release();

    const selectResult = await guidanceProvider.getGuidance(guidanceID)

    return selectResult[0];
};