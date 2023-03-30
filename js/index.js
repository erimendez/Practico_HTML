document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    let dataForm = new FormData(form);

    dataForm.append("ticket_time", new Date().toString());

    console.log(dataForm);

    const URL = "https://sheetdb.io/api/v1/zwj20b4ytvp59";

    await fetch(URL, {
        method: "POST",
        body: dataForm,
    });

    form.classList.add("animation");

    alert("Gracias por tu mensaje");
    window.location.href =
        "https://docs.google.com/spreadsheets/d/1bBbwoNAUpM1Hb5Ck5SbXG61GP1WEfyt65EcOQXl24aE/edit#gid=0";
});
