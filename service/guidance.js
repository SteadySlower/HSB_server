const { pool } = require('../config/database.js');
const guidanceProvider = require('../provider/guidance.js');
const guidanceDao = require('../dao/guidance.js');


// 생활지도 등록하기
exports.createGuidance = async function (studentID, reason, detail, date) {
    const connection = await pool.promise().getConnection(async (conn) => conn);
    const params = [ studentID, reason, detail, date ];
    const insertResult = await guidanceDao.insertGuidance(connection, params);
    const guidanceID = insertResult[0].insertId
    console.log(`추가된 생활지도 : ${guidanceID}`)
    connection.release();

    const selectResult = await guidanceProvider.readGuidance(guidanceID)

    return selectResult[0];
};

// 생활지도 삭제하기
exports.removeGuidance = async function (guidanceID) {

    //TODO: DB에 있는 guidanceID가 VALID한 데이터인지 확인

    const connection = await pool.promise().getConnection(async (conn) => conn);
    const result = await guidanceDao.deleteGuidance(connection, guidanceID);

    console.log(`삭제된 생활지도 : ${guidanceID}`)

    connection.release();

    const newData = await guidanceProvider.getAllGuidances();

    return newData;
};

// 생활지도 완료 처리
exports.removeGuidance = async function (guidanceID) {

    //TODO: DB에 있는 guidanceID가 VALID한 데이터인지 확인

    const connection = await pool.promise().getConnection(async (conn) => conn);
    const result = await guidanceDao.updateGuidanceStatusToComplete(connection, guidanceID);

    console.log(`완료된 생활지도 : ${guidanceID}`)

    connection.release();

    const newData = await guidanceProvider.getAllGuidances();

    return newData;
};