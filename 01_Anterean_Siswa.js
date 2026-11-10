const antreanSiswa = ["Andi", "Budi", "Citra"];

console.log("Daftar siswa:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

antreanSiswa.push("Deni");
console.log("Daftar siswa:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

antreanSiswa.unshift("Eka");
console.log("Daftar siswa:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

const siswaDihapusPertama = antreanSiswa.shift();
console.log("Siswa yang dihapus:", siswaDihapusPertama);
console.log("Daftar siswa:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

const siswaDihapusTerakhir = antreanSiswa.pop();
console.log("Siswa yang dihapus:", siswaDihapusTerakhir);
console.log("Daftar siswa:", antreanSiswa);
console.log("Jumlah siswa:", antreanSiswa.length);

console.log("Daftar siswa:", antreanSiswa);
console.log("Jumlah siswa tersisa:", antreanSiswa.length);