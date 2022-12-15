// Formu seçiyoruz
let form = document.querySelector("form");

// Form gönderildiğinde çalışacak fonksiyonu tanımlıyoruz
form.onsubmit = function (event) {
    // Formun gönderilmesini engelleyerek, sayfa yenilenmesini önlüyoruz
    event.preventDefault();

    // Formdan girilen kelime değerini alıyoruz
    let word = form.elements.word.value;

    // Kelimenin anlamı ve kökünü buluyoruz (Bu adımda kelime sözlüğü veritabanı kullanarak gerçekleştirilebilir)
    let meaning = "Kelimenin anlamı";
    let root = "Kelimenin kökü";

    // Bulunan anlam ve kökü ekrana yazdırıyoruz
    console.log("Anlam: " + meaning);
    console.log("Kök: " + root);
}