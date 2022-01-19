const { pool } = require('../config/database.js');
const guidanceDao = require('../dao/guidance');

// id로 guidance 찾기
exports.readGuidance = async function (guidanceID) {
    const connection = await pool.promise().getConnection(async (conn) => conn);
    const result = await guidanceDao.selectGuidance(connection, guidanceID);
    connection.release();
    return result[0];
};

// guidance 전체 조회
exports.getAllGuidances = async function () {
    const connection = await pool.promise().getConnection(async (conn) => conn);
    const result = await guidanceDao.selectAllGuidances(connection);
    connection.release();
    return result[0];
};
