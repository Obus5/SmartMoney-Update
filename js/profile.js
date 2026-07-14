async function loadProfile() {

    const {
        data: { session }
    } = await supabaseClient.auth.getSession();

    if (!session) {

        window.location.href = "login.html";
        return;

    }

    const userId = session.user.id;

    const { data, error } =
        await supabaseClient
            .from("subscribers")
            .select("*")
            .eq("id", userId)
            .single();

    if (error) {
        console.error(error);
        return;
    }

    document.getElementById("nama").innerText =
        data.nama;

    document.getElementById("email").innerText =
        data.email;

    document.getElementById("status").innerText =
    data.status || "FREE";

}

async function logoutUser() {

    await supabaseClient.auth.signOut();

    window.location.href = "dashboard.html";

}

loadProfile();