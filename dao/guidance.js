// guidance 추가
exports.insertGuidance = async function (connection, params) {
    const query = `
        INSERT INTO Guidance(studentID, reason, detail, date)
        VALUES (?, ?, ?, ?);
    `;
    const row = await connection.query(query, params);
    return row;
};

// id로 guidance 검색
exports.selectGuidance = async function (connection, guidanceID) {
    const query = `
        SELECT 
            S.id AS studentID,
            S.grade AS grade,
            S.classNumber AS classNumber,
            S.number AS number,
            S.name AS name,
            S.profileImageURL AS profileImageURL,
            G.id AS guidanceID,
            G.reason AS reason,
            G.detail AS detail,
            G.date AS date,
            G.status AS status
        FROM HSB.Guidance G
        INNER JOIN HSB.Student S ON G.studentID = S.id
        WHERE G.id = ?;
    `;
    const row = await connection.query(query, guidanceID);
    return row;
};

// 모든 guidance 조회
exports.selectAllGuidances = async function (connection) {
    const query = `
        SELECT 
            S.id AS studentID,
            S.grade AS grade,
            S.classNumber AS classNumber,
            S.number AS number,
            S.name AS name,
            S.profileImageURL AS profileImageURL,
            G.id AS guidanceID,
            G.reason AS reason,
            G.detail AS detail,
            G.date AS date,
            G.status AS status
        FROM HSB.Guidance G
        INNER JOIN HSB.Student S ON G.studentID = S.id
        WHERE G.status = 'VALID' OR G.status = 'DELAYED';
    `;
    const row = await connection.query(query);
    return row;
};

// guidance 삭제
exports.deleteGuidance = async function (connection, guidanceID) {
    const query = `
        UPDATE HSB.Guidance
        SET status = "DELETE"
        WHERE id = ?;
    `;
    const row = await connection.query(query, guidanceID);
    return row;
};

// guidance 완료 처리
exports.updateGuidanceStatusToComplete = async function (connection, guidanceID) {
    const query = `
        UPDATE HSB.Guidance
        SET status = "COMPLETE"
        WHERE id = ?;
    `;
    const row = await connection.query(query, guidanceID);
    return row;
};

// guidance 연기 처리
exports.updateGuidanceDate = async function (connection, params) {
    const query = `
        UPDATE HSB.Guidance
        SET
            status = "DELAYED",
            date = ?
        WHERE id = ?;
    `;
    const row = await connection.query(query, params);
    return row;
};
