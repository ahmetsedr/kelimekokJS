const request = require('request');

// Wordnik API anahtarınız
const API_KEY = '<your_api_key>';

// Sorgulamak istediğiniz kelime
const word = prompt("Lütfen bir kelime giriniz.");

// Kelimenin anlamını ve kökünü sorgulamak için Wordnik API'sine bir istek gönderiyoruz
request(`http://api.wordnik.com:80/v4/word.json/${word}/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=${API_KEY}`, (err, response, body) => {
    if (err) {
        console.error(err);
        return;
    }

    // Sorgulama sonucunda dönen verileri json formatına çeviriyoruz
    const data = JSON.parse(body);

    // Kelime sözlüğü verilerini oluşturuyoruz
    const wordData = {
        word: word,
        definition: data[0].text,
        partOfSpeech: data[0].partOfSpeech
    };

    // Kelime sözlüğü verilerini ekrana yazdırıyoruz
    console.log(wordData);
});
