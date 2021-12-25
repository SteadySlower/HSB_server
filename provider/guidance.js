const { pool } = require('../config/database.js');
const guidanceDao = require('../dao/guidance');

// id로 guidance 찾기
exports.getGuidance = async function (guidanceID) {
    const connection = await pool.promise().getConnection(async (conn) => conn);
    const result = await guidanceDao.selectGuidance(connection, guidanceID);
    connection.release();
    return result[0];
};