document.addEventListener('keydown', function(e) {
    if (e.key === 'v' && e.ctrlKey) {
        setTimeout(() => {
            alert('Anda Curang!!!')
        }, 5000)
    }
});

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        const title = document.querySelector("#title");
        title.innerHTML = "Tab aktif";
    } else {
        const title = document.querySelector("#title");
        title.innerHTML = "Please come back!";
    }
});


window.addEventListener('paste', function(e) {

    alert("Pengguna melakukan operasi paste");

    const pastedText = (e.clipboardData || window.clipboardData).getData('text');
    console.log("Teks yang dipaste: ", pastedText);
});