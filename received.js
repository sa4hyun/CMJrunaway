const { u_name, grade, c_number, number, type, datetime, reason, a_datetime } = JSON.parse(localStorage.getItem("user-info"));
console.log(u_name, grade, c_number, number, type, datetime, reason, a_datetime);
const day = ['일', '월', '화', '수', '목', '금', '토'];

document.getElementById('name_text').innerText = u_name;
document.getElementById('class_text').innerText = grade+'학년 '+c_number+'반 '+number+'번';
document.getElementById('type_text').innerText = type;
document.getElementById('reason_text').innerText = reason;
document.getElementById('datetime_text').innerText = datetime;
document.getElementById('a_text').innerText = a_datetime;