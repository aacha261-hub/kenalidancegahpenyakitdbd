document.getElementById("formKonsultasi")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let telepon = document.getElementById("telepon").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    if (!nama || !email || !telepon || !pesan) {
        alert("Semua kolom wajib diisi!");
        return;
    }

    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        alert("Format email tidak valid!");
        return;
    }

    if (!/^[0-9+\-\s]{8,16}$/.test(telepon)) {
        alert("Nomor telepon tidak valid!");
        return;
    }

    document.getElementById("hasil").innerHTML =
        "Terima kasih " + nama +
        ", formulir berhasil divalidasi!";

    document.getElementById("formKonsultasi").reset();
});