const studentsProvider = require('../provider/students.js');
const responses = require('../config/responseCases.js');
const { response, errResponse } = require('../config/responseFormat.js');


/**
 * API No. 1
 * API Name : 학생 조회 API
 * [GET] students
 */
 exports.getStudentInfo = async function (req, res) {

    /**
     * Query String: mobile
     */

    const studentID = req.query.id;

    // TODO: 학번 형식적 검증

    const result = await studentsProvider.getStudentInfo(studentID)

    return res.send(response(responses.SUCCESS, result));

};
