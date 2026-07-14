async function registerUser() {

    const nama =
    document.getElementById("nama").value;

    const telepon =
    document.getElementById("telepon").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const { data, error } =
    await supabaseClient.auth.signUp({

        email,
        password,

        options: {
            data: {
                nama,
                telepon
            }
        }

    });

    if (error) {
        alert(error.message);
        return;
    }

    const userId = data.user.id;

    await supabaseClient
    .from("subscribers")
    .insert([
        {
            id: userId,
            nama: nama,
            email: email,
            status: "free"
        }
    ]);

    alert("Registrasi berhasil");
    window.location.href = "login.html";

}