window.onload = function () {

    const params = new URLSearchParams(window.location.search);

    const paket = params.get("paket");

    const namaPaket =
    document.getElementById("namaPaket");

    const hargaPaket =
    document.getElementById("hargaPaket");

    if (paket === "basic") {

        namaPaket.innerHTML =
        "Paket Basic";

        hargaPaket.innerHTML =
        "Rp5.000";

    }

    else if (paket === "weekly") {

        namaPaket.innerHTML =
        "Paket Weekly";

        hargaPaket.innerHTML =
        "Rp15.000";

    }

    else if (paket === "premium") {

        namaPaket.innerHTML =
        "Paket Premium";

        hargaPaket.innerHTML =
        "Rp50.000";

    }

    else {

        namaPaket.innerHTML =
        "Paket Tidak Ditemukan";

        hargaPaket.innerHTML =
        "-";

    }

}