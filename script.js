document.getElementById("generateBtn").addEventListener("click", function () {
    const qrContainer = document.getElementById("qrcode");
    const text = document.getElementById("text").value;
    const fgColor = document.getElementById("fgColor").value;
    const bgColor = document.getElementById("bgColor").value;

    qrContainer.innerHTML = "";


    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: fgColor,
        colorLight: bgColor,
        correctLevel: QRCode.CorrectLevel.H
    });
});
