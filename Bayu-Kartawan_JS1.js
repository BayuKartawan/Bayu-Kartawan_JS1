// Contoh 1: Program menggunakan if, else, dan nested if
var skorPemain = 75;

if (skorPemain >= 90) {
  console.log("Pemain ini luar biasa!");
} else if (skorPemain >= 80) {
  console.log("Pemain ini hebat!");
} else if (skorPemain >= 70) {
  console.log("Pemain ini cukup bagus.");
} else if (skorPemain >= 60) {
  console.log("Pemain ini perlu berlatih lebih keras.");
} else {
  console.log("Pemain ini belum lulus.");
}

// Contoh 2: Program menggunakan switch case
var namaHari = "Senin";

switch (namaHari) {
  case "Senin":
    console.log("Hari ini adalah hari manis.");
    break;
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Hari ini juga manis.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Masukan tidak valid.");
}

// Contoh 3: Program menggunakan for statement
for (var kucing = 1; kucing <= 5; kucing++) {
  console.log("Kucing ke-" + kucing);
}

// Contoh 4: Program menggunakan while statement
var anjing = 1;

while (anjing <= 5) {
  console.log("Anjing ke-" + anjing);
  anjing++;
}

// Contoh 5: Program menggunakan do-while statement
var kelinci = 1;

do {
  console.log("Kelinci ke-" + kelinci);
  kelinci++;
} while (kelinci <= 5);

// Contoh 6: Program menggunakan fungsi
function sapaHewan(namaHewan) {
  console.log("Halo, " + namaHewan + "!");
}
// Memanggil fungsi tersebut
sapaHewan("ANJING");
sapaHewan("BABI");
