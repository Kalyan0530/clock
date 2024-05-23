 let hr =document.getElementById('hour');
 let min =document.getElementById('min');
 let sec =document.getElementById('sec');

 function dispalyTime(){
    let date = new Date();

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation= 30*hh+mm/2;
    let mRotationRotation= 6*mm;
    let sRotationRotation=6*ss;


    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotationRotation}deg)`;
    sec.style.transform = `rotate(${sRotationRotation}deg)`;
 }
 setInterval(dispalyTime,1000);