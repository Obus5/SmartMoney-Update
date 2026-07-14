async function getUserId() {

    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    if (!session) {

        alert("Silakan login terlebih dahulu");
        return null;

    }

    return session.user.id;

}
async function bayar(paket) {

   try {

    const userId =
    await getUserId();

    if (!userId) return;

        const response = await fetch(
            "http://localhost:3000/create-transaction",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    paket: paket,
                    user_id: userId
                })
            }
        );

       const data = await response.json();

        localStorage.setItem(
            "order_id",
            data.order_id
        );

        localStorage.setItem(
        "selected_plan",
        paket
        );
        
        localStorage.setItem(
        "user_id",
        userId
        );
    
        window.location.href =
            data.redirect_url;

    } catch (error) {

        console.log(error);

        alert("Gagal membuat transaksi");

    }

}

document
.getElementById("basicBtn")
.addEventListener("click", () => {
    bayar("basic");
});

document
.getElementById("weeklyBtn")
.addEventListener("click", () => {
    bayar("weekly");
});

document
.getElementById("premiumBtn")
.addEventListener("click", () => {
    bayar("premium");
});