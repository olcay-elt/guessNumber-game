//hangi sayıya kadar istiyorsanız o sayıyla çarpıp yukarı yuvarlamak, 1 den istediğiniz sayıya kadar sonuç almanızı sağlar

let rastgeleSayı = Math.ceil(Math.random() * 20);
console.log(rastgeleSayı);

let mesaj = document.querySelector(".msg");

let skor = 10;
//skor u da index.html deki skor u buraya çekerekte yapabiliriz ama çok kullanacağız bu daha tercih edilen yol
let enYuksekSkor = 0;

//enYuksekSkor diye bir değişken atamazsam, dogru tahmindeki enYuksekSkor kontrol kodunda, html deki top-score span inin textContent iyle karşılaştırma yapabiliriz

//!her check butonuna basıldığında olacaklar

document.querySelector(".check").onclick = () => {
    const tahmin = document.querySelector(".guess").value;

    //?tahmin girilmeden check butonuna basarsa uyarı versin
    if (!tahmin) {
        mesaj.textContent = "lütfen bir tahmin giriniz";

        //?tahmin doğruysa
    } else if (tahmin == rastgeleSayı) {
        mesaj.textContent = "Tebrikler Bildiniz 🎉";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").textContent = rastgeleSayı;

        //?enYuksekSkor güncellemesi

        if (skor > enYuksekSkor) {
            enYuksekSkor = skor;
            document.querySelector(".top-score").textContent = enYuksekSkor;
        }

        //?tahmin yanlış girildiyse
    } else {
        if (skor > 1) {
            skor--;
            document.querySelector(".score").textContent = skor;
            tahmin > rastgeleSayı
                ? (mesaj.textContent = "Azalt📉")
                : (mesaj.textContent = "Arttır📈");
        } else {
            mesaj.textContent = "Oyunu Kaybettiniz 😞";
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }
};

//! Again butonuna basıldığında oyun yeniden kurulsun,arka ekran #2d3436 olsun

document.querySelector(".again").onclick = () => {
    rastgeleSayı = Math.ceil(Math.random() * 20);
    console.log(rastgeleSayı);

    mesaj.textContent = "Oyun Yeni Oyuncu İçin Başlıyor";

    document.querySelector("body").style.backgroundColor = "#2d3436";
    skor = 10;
    document.querySelector(".score").textContent = skor;
    document.querySelector(".number").textContent = "?";

    document.querySelector(".guess").value = "";
};
