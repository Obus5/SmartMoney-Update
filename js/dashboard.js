async function cekLogin() {

    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    console.log("SESSION:", session);

    if (session) {

        document.getElementById("loginBtn").style.display = "none";

        document.getElementById("registerBtn").style.display = "none";

        document.getElementById("logoutBtn").style.display = "inline-block";

        document.getElementById("userName").style.display = "inline-block";

        const nama =
            session.user.user_metadata?.nama ||
            session.user.email;

        document.getElementById("userName").innerHTML =
            "Halo, " + nama;

    }

}

async function logoutUser() {

    await supabaseClient.auth.signOut();

    window.location.href = "dashboard.html";

}

document
    .getElementById("logoutBtn")
    ?.addEventListener("click", logoutUser);

cekLogin();