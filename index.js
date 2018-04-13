var choose1 = document.getElementById("choose1");
var choose2 = document.getElementById("choose1");
var choose3 = document.getElementById("choose3");
var userName = document.getElementById("userName");
var nameInp = document.getElementById("nameInp");
var submitButton = document.getElementById("submit");
var displayDiv = document.getElementById("displayDiv");
var zodiacIcon = document.getElementById("zodiacSign");
var day = document.getElementById("day");
var month = document.getElementById("month");


/*
function yourZSign{
    
}*/

// submit.addEventListener("click",function(){
//   name.innerHTML = "Hello"+nameInp.value;
// });

function submit(){
  console.log(sessionStorage);
  sessionStorage.setItem("yourname", nameInp.value);
  sessionStorage.setItem("day", day.value);
  sessionStorage.setItem("day", month.value);
}

// To display username
document.addEventListener("DOMContentLoaded", function(){
  console.log(sessionStorage);
  userName.innerText = "Hello "+sessionStorage.getItem("yourname");
});

//To display their Zodiac sign

document.addEventListener("DOMContentLoaded", function(){
  console.log(sessionStorage.getItem("day"));
  console.log(sessionStorage.getItem("month"));
});

function changeZodiac (){
  if ((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
  }
};


// function zodiacSign (day, month) {
//   var zodiacSigns = {
//     'capricorn':'Козерог',
//     'aquarius':'Водолей',
//     'pisces':'Рыбы',
//     'aries':'Овен',
//     'taurus':'Телец',
//     'gemini':'Близнецы',
//     'cancer':'Рак',
//     'leo':'Лев',
//     'virgo':'Девы',
//     'libra':'Весы',
//     'scorpio':'Скорпион',
//     'sagittarius':'Стрелец'
// //   }

//   if ((month == 1 && day <= 20) || (month == 12 && day >=22)) {
//     zodiacIcon.src = "imgs/zodiacSigns/capricorn.png";
//   } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
//     return zodiacSigns.aquarius;
//   } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
//     return zodiacSigns.pisces;
//   } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
//     return zodiacSigns.aries;
//   } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
//     return zodiacSigns.taurus;
//   } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
//     return zodiacSigns.gemini;
//   } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
//     return zodiacSigns.cancer;
//   } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
//     return zodiacSigns.leo;
//   } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
//     return zodiacSigns.virgo;
//   } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
//     return zodiacSigns.libra;
//   } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
//     return zodiacSigns.scorpio;
//   } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
//     return zodiacSigns.sagittarius;
//   }
// }

choose1.addEventListener("click", function (){
  console.log(sessionStorage);
  displayDiv.style.display = "inline-block";
})


//   name.innerHTML = "Hello "+localStorage.getItem("name");
// });


// choose1.addEventListener("click",function(){
//    alert("working"); 
// //   name.innerHTML.value = "Hello"+nameInp.value;
// });


// idk if this is right 
/*
function getZodiacSign(day, month) {

  var zodiacSigns = {
    'capricorn':'Козерог',
    'aquarius':'Водолей',
    'pisces':'Рыбы',
    'aries':'Овен',
    'taurus':'Телец',
    'gemini':'Близнецы',
    'cancer':'Рак',
    'leo':'Лев',
    'virgo':'Девы',
    'libra':'Весы',
    'scorpio':'Скорпион',
    'sagittarius':'Стрелец'
  }

  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    return zodiacSigns.capricorn;
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return zodiacSigns.aquarius;
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return zodiacSigns.pisces;
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return zodiacSigns.aries;
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return zodiacSigns.taurus;
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return zodiacSigns.gemini;
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return zodiacSigns.cancer;
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return zodiacSigns.leo;
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return zodiacSigns.virgo;
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return zodiacSigns.libra;
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return zodiacSigns.scorpio;
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return zodiacSigns.sagittarius;
  }
}
**/