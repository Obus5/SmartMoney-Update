async function loginUser(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const { data, error } =
    await supabaseClient.auth.signInWithPassword({

        email,
        password

    });

    if(error){

        alert(error.message);

        return;
    }
    localStorage.setItem(
    "user_id",
    data.user.id
);

    alert("Login berhasil");

    window.location.href =
    "dashboard.html";
}