const guidanceService = require('../service/guidance.js');
const responses = require('../config/responseCases.js');
const { response, errResponse } = require('../config/responseFormat.js');


/**
 * API No. 3
 * API Name : 생활지도 등록 API
 * [POST] /guidances
 */

 exports.postGuidance = async function (req, res) {

    const { studentID, reason, detail } = req.body;

    const result = await guidanceService.createGuidance(studentID, reason, detail);

    return res.send(response(responses.SUCCESS, result));

};
