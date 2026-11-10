const daftarBuku = [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar"
];

console.log("Daftar buku sebelum perubahan:");
console.log(daftarBuku);

const indeksCSS = daftarBuku.indexOf("CSS Dasar");
console.log("Indeks CSS Dasar:", indeksCSS);

if (indeksCSS !== -1) {
    daftarBuku.splice(indeksCSS, 1, "CSS Modern");
}

const indeksJavaScript = daftarBuku.indexOf("JavaScript Dasar");

if (indeksJavaScript !== -1) {
    daftarBuku.splice(indeksJavaScript + 1, 0, "Git Dasar");
}

const indeksPHP = daftarBuku.indexOf("PHP Dasar");

if (indeksPHP !== -1) {
    daftarBuku.splice(indeksPHP, 1);
}
console.log("Daftar buku setelah perubahan:");
console.log(daftarBuku);
console.log("Jumlah buku yang tersisa:", daftarBuku.length);
