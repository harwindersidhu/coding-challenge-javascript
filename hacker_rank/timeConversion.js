/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let hour = parseInt(s.split(":")[0]);
  if (s.includes("PM")) {
    if (!s.includes("12")) {
      hour = hour + 12;
    }
  } else {
    if (s.includes("12")) {
      hour = hour - 12;
    }
    hour = "0" + hour;
  }

  return s.replace(s.split(":")[0], hour).slice(0, -2);
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:40:22AM"));
console.log(timeConversion("06:40:03AM"));
