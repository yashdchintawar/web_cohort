const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColorCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomColorCode;
    document.getElementById("color-code").innerText = randomColorCode;

    navigator.clipboard.writeText(randomColorCode);
}

document.getElementById("btn").addEventListener(
    "click", getColor
)

getColor();