const studentsProvider = require('../provider/students.js');
const responses = require('../config/responseCases.js');
const { response, errResponse } = require('../config/responseFormat.js');


/**
 * API No. 1
 * API Name : 학생 조회 API
 * [GET] /students/totalNumber
 */

 exports.getTotalNumber = async function (req, res) {

    const result = await studentsProvider.getTotalNumber()

    return res.send(response(responses.SUCCESS, result));

};


/**
 * API No. 2
 * API Name : 학생 조회 API
 * [GET] /students/search
 */
 exports.getStudentInfo = async function (req, res) {

    /**
     * Query String: studentID
     */

    const studentID = req.query.id;

    // TODO: 학번 형식적 검증

    const result = await studentsProvider.getStudentInfo(studentID)

    return res.send(response(responses.SUCCESS, result));

};
