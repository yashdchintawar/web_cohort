const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomdata = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomdata(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomdata(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomdata(numberSet);
  }
  numberSet;
  if (symbolInput.checked) {
    password += getRandomdata(symbolSet);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  const truncatedPassword = truncateString(password, totalChar.value);
  passBox.innerText = truncatedPassword;
  navigator.clipboard.writeText(truncatedPassword);
};

generatePassword();

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
