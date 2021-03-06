const guidanceService = require('../service/guidance.js');
const guidanceProvider = require('../provider/guidance.js');
const responses = require('../config/responseCases.js');
const { response, errResponse } = require('../config/responseFormat.js');


/**
 * API No. 3
 * API Name : 생활지도 등록 API
 * [POST] /guidances
 */

 exports.postGuidance = async function (req, res) {

    /**
     * Body : studentID, reason, detail, date
     */

    const { studentID, reason, detail, date } = req.body;

    // TODO: body 검증하기!

    const result = await guidanceService.createGuidance(studentID, reason, detail, date);

    return res.send(response(responses.SUCCESS, result));

};

/**
 * API No. 4
 * API Name : 생활지도 조회 API
 * [GET] /guidances
 */

 exports.getGuidances = async function (req, res) {

    const result = await guidanceProvider.getAllGuidances();

    return res.send(response(responses.SUCCESS, result));

};

/**
 * API No. 5
 * API Name : 생활지도 삭제 API
 * [DELETE] /guidances/:guidanceID
 */

 exports.deleteGuidance = async function (req, res) {

    /**
     * Path Variable: guidanceID
     */

     const guidanceID = req.params.guidanceID;

    const result = await guidanceService.removeGuidance(guidanceID);

    return res.send(response(responses.SUCCESS, result));

};

/**
 * API No. 6
 * API Name : 생활지도 완료 API
 * [PATCH] /guidances/completion
 */

 exports.completeGuidance = async function (req, res) {

    /**
     * Body : guidanceID
     */

     const { guidanceID } = req.body;

    const result = await guidanceService.completeGuidance(guidanceID);

    return res.send(response(responses.SUCCESS, result));

};

/**
 * API No. 7
 * API Name : 생활지도 연기 API
 * [PATCH] /guidances/delay
 */

 exports.delayGuidance = async function (req, res) {

    /**
     * Body : guidanceID, date
     */

     const { guidanceID, date } = req.body;

    const result = await guidanceService.delayGuidance(guidanceID, date);

    return res.send(response(responses.SUCCESS, result));

};

