const Input = document.querySelector(".input");
const Checkbtn = document.querySelector(".checkbtn");
const OutputDiv = document.querySelector(".output");

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  let reverse = reverseStr(str);
  return str == reverse;
}

function convertDateToString(date) {
  const dateStr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  return dateStr;
}

function getAllDateFormats(date) {
  const dateStr = convertDateToString(date);

  const ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  const mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  const yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  const ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  const mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  const yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function cheakPalindromeForAllDateFormats(date) {
  const listOfPalindrome = getAllDateFormats(date);
  let flag = false;

  for (let i = 0; i < listOfPalindrome.length; i++) {
    if (isPalindrome(listOfPalindrome[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;

  let dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else {
    if (day > dayInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

function getNextpalindromeDate(date) {
  let ctr = 0;
  let nextDate = getNextDate(date);

  while (1) {
    ctr++;
    let isPalindrome = cheakPalindromeForAllDateFormats(nextDate);
    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [ctr, nextDate];
}

function clickHandler(e) {
  let birthdate = Input.value;

  if (birthdate === "") {
    OutputDiv.classList.remove("hidden");
    OutputDiv.innerHTML = "Please Fill the Date";
  }

  if (birthdate !== "") {
    let listOfDate = birthdate.split("-");
    let date = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0]),
    };
    let isPalindrome = cheakPalindromeForAllDateFormats(date);
    if (isPalindrome) {
      setTimeout(() => {
        OutputDiv.classList.remove("hidden");
        OutputDiv.innerHTML = " Your BirthDate is Palindrome!!";
      }, 3000);
    } else {
      let [ctr, nextDate] = getNextpalindromeDate(date);
      setTimeout(() => {
        OutputDiv.classList.remove("hidden");
        OutputDiv.innerHTML = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days!`;
      }, 1000);
    }
  }
}

Checkbtn.addEventListener("click", clickHandler);
