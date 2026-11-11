const daftarBarang = [
  "Buku Tulis",
  "Pensil",
  "Penghapus",
  "Spidol"
];

const barangBaru = "Pulpen";
const barangDicari = "Penghapus";
const barangDihapus = "Spidol";

console.log("=PENGELOLAAN PERLENGKAPAN KELAS=");

if (daftarBarang.length === 0) {
  console.log("Daftar barang kosong.");
} else {
  for (let i = 0; i < daftarBarang.length; i++) {
    console.log(`${i + 1}. ${daftarBarang[i]}`);
  }
}
console.log(`Jumlah barang awal: ${daftarBarang.length}`);
console.log();

console.log("[Tambah Barang]");
if (barangBaru.trim() !== "") {
  daftarBarang.push(barangBaru);
  console.log(`${barangBaru} berhasil ditambahkan.`);
} else {
  console.log("Nama barang tidak boleh kosong.");
}
console.log();

console.log("[Pencarian Barang]");
if (daftarBarang.includes(barangDicari)) {
  const indeks = daftarBarang.indexOf(barangDicari);
  console.log(`${barangDicari} ditemukan pada indeks ${indeks}.`);
} else {
  console.log(`${barangDicari} tidak tersedia.`);
}
console.log();

console.log("[Hapus Barang]");
const indeksHapus = daftarBarang.indexOf(barangDihapus);
if (indeksHapus !== -1) {
  daftarBarang.splice(indeksHapus, 1);
  console.log(`${barangDihapus} berhasil dihapus.`);
} else {
  console.log(`${barangDihapus} tidak dapat dihapus karena tidak ditemukan.`);
}
console.log();

console.log("=DAFTAR BARANG TERBARU=");
if (daftarBarang.length === 0) {
  console.log("Daftar barang kosong.");
} else {
  for (let i = 0; i < daftarBarang.length; i++) {
    console.log(`${i + 1}. ${daftarBarang[i]}`);
  }
}
console.log();
console.log(`Total barang: ${daftarBarang.length}`);

/*
  PENGUJIAN TAMBAHAN (ubah satu per satu, lalu jalankan ulang):

  1. const barangBaru = "";           -> Nama barang tidak boleh kosong.
  2. const barangDicari = "Laptop";   -> Laptop tidak tersedia.
  3. const barangDihapus = "Monitor"; -> Monitor tidak dapat dihapus karena tidak ditemukan.

  Pengujian array kosong: ubah di atas menjadi
  const daftarBarang = [];
  Program tidak error dan menampilkan "Daftar barang kosong."
*/