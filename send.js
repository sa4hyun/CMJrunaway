let userInfo = {
    u_name: "이름",
    grade: "1",
    c_number: "1",
    number: "1",
    type: "외출",
    datetime: "time",
    reason: "Why?",
    a_datetime: "time",
  }

function getDayOfWeek(date){ //ex) getDayOfWeek('2022-06-13')
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(date).getDay()];
    return dayOfWeek;
}

function update() {
    userInfo.u_name=document.getElementById('u_name').value;
    userInfo.grade=document.getElementById('grade').value;
    userInfo.c_number=document.getElementById('c_number').value;
    userInfo.number=document.getElementById('number').value;
    userInfo.reason=document.getElementById('reason').value;
    userInfo.type=document.getElementById('typeSelect').value;
    userInfo.datetime=document.getElementById('beginDate').value.slice(-5)+'('+getDayOfWeek(document.getElementById('beginDate').value)+') '+document.getElementById('beginTime').value
    +' - '+document.getElementById('endDate').value.slice(-5)+'('+getDayOfWeek(document.getElementById('endDate').value)+') '+document.getElementById('endTime').value;
    userInfo.a_datetime=document.getElementById('appDate').value.slice(-5)+'('+getDayOfWeek(document.getElementById('appDate').value)+') '+document.getElementById('appTime').value;
}

document.getElementById("end-button").onclick = function () {
    console.log(userInfo);
    update();
    console.log(userInfo);
    localStorage.setItem("user-info", JSON.stringify(userInfo));
    location.href='next.html';
    alert("생성되었습니다.");
  };