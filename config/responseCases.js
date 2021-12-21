module.exports = {

    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },

    //Request error
    // 회원 정보 입력 관련
    MOBILE_EMPTY : { "isSuccess": false, "code": 2001, "message":"휴대폰 번호를 입력 해주세요." },

    // Response error
    REDUNDANT_MOBILE : { "isSuccess": false, "code": 3001, "message":"이미 가입한 계정입니다. 로그인해주세요." },

    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"},
 
    // 형식적 검증 에러
    INPUT_VERIFIER_ERROR: { "isSuccess": false, "code": 5001, "message": "유효한 검증값이지만 에러가 발생했습니다. 서버개발자에게 연락주세요."},
    // JWT 토큰 관련
    TOKEN_EMPTY : { "isSuccess": false, "code": 5002, "message":"JWT 토큰을 입력해주세요." },
    TOKEN_VERIFICATION_FAILURE : { "isSuccess": false, "code": 5003, "message":"JWT 토큰 검증 실패" },
    TOKEN_VERIFICATION_SUCCESS : { "isSuccess": true, "code": 5004, "message":"JWT 토큰 검증 성공" }

}
