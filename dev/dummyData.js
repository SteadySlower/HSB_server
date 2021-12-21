const { pool } = require('../config/database.js')
const studentDao = require('../dao/students')



// id 만들어주는 함수

function idMaker(student) {
    const year = "2021"
    const grade = student.grade
    const classNumber = String(student.classNumber) 
    const number = String(student.number) 

    return `${year}${grade}${classNumber.padStart(2, '0')}${number.padStart(2, '0')}`
}

// 학생 등록
async function insertStudent(connection, student) {
    const id = idMaker(student)
    const url = "https://picsum.photos/200"
    params = [id, student.grade, student.classNumber, student.number, student.name, url]
    const insertStudentQuery = `
            INSERT INTO Student(id, grade, classNumber, number, name, profileImageURL)
            VALUES (?, ?, ?, ?, ?, ?);
        `;
    const insertDealRow = await connection.query(
        insertStudentQuery,
        params
    );
    return insertDealRow;
};


function createRandomName() {
    const lastNames = ["김", "이", "박", "최", "윤", "문", "성", "설", "정", "구", "양", "민", "고", "홍", "장", "강"]
    const firstNames = ["철수", "영수", "민수", "민준", "준혁", "상혁", "정혁", "준서", "문규", "강호", "상민", "철민", "성혁", "민혁", "민규", "영희", "민희", "서아", "시아", "설아", "수아", "지민", "민서", "민지", "유빈", "혜림", "규리", "윤희", "윤지", "예지"]
    const randomLastNameIdx = Math.floor(Math.random() * lastNames.length);
    const randomfirstNameIdx = Math.floor(Math.random() * firstNames.length);
    return `${lastNames[randomLastNameIdx]}${firstNames[randomfirstNameIdx]}`
}

// 더미 데이터 넣기
createDummyStudents = async function (student) {
    const connection = await pool.promise().getConnection(async (conn) => conn);
    const grade = 3
    for (let i = 1; i < 15; i++) {
        let classNumber = i
        for (let j = 1; j < 30 + i; j++) {
            let number = j
            let name = createRandomName()
            let student = { grade: grade, classNumber: classNumber, number: number, name: name}
            const result = await insertStudent(connection, student)
            console.log(result)
        }
    }
    connection.release();
    return
};

createDummyStudents()
console.log("finished")

