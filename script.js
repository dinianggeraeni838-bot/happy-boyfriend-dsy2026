/* =========================
   PINDAH HALAMAN
========================= */

function goToPage(pageNumber) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    document
        .getElementById("page" + pageNumber)
        .classList.add("active");
}


/* =========================
   TOMBOL NO
========================= */

function noButton() {

    const noText =
        document.getElementById("noText");

    noText.textContent =
        "hmm... coba pencet Yes aja deh 🤭";
}


/* =========================
   AMPLOP
========================= */

function openEnvelope(number) {

    const popup =
        document.getElementById("popup");

    const content =
        document.getElementById("popupContent");


    if (number === 1) {

        content.innerHTML = `
            <h2>for you 🤍</h2>

            <p>
                makasih ya udah selalu ada
                dan jadi bagian dari hari-hariku.
                semoga kita selalu punya
                banyak cerita buat dikenang.
            </p>
        `;

    }


    if (number === 2) {

        content.innerHTML = `
            <h2>a little message ♡</h2>

            <p>
                mungkin aku nggak selalu bisa
                bilang semuanya secara langsung,
                tapi aku seneng banget bisa
                kenal dan punya kamu.
            </p>
        `;

    }


    if (number === 3) {

        content.innerHTML = `
            <h2>happy boyfriend day! 💙</h2>

            <p>
                semoga kita tetap saling jaga,
                saling ngerti, dan punya
                banyak momen seru lagi.
                <br><br>
                love you, paisal ♡
            </p>
        `;

    }


    popup.classList.add("show");
}


/* =========================
   TUTUP POPUP
========================= */

function closePopup() {

    document
        .getElementById("popup")
        .classList.remove("show");
}


/* =========================
   KLIK LUAR POPUP
========================= */

document
    .getElementById("popup")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closePopup();

        }

    });