// main.js
import { hitungRataRata, kategoriNilai } from "./nilai.js";

const mahasiswa = [
  { nama: "Andi", nilai: 90 },
  { nama: "Budi", nilai: 75 },
  { nama: "Citra", nilai: 60 },
  { nama: "Dinda", nilai: 40 }
];

console.log("=== Data Nilai Mahasiswa ===");

// Menampilkan data mahasiswa
for (const mhs of mahasiswa) {
  const kategori = kategoriNilai(mhs.nilai);
  console.log(`${mhs.nama} - Nilai: ${mhs.nilai} - Kategori: ${kategori}`);
}

// Mengambil daftar nilai untuk menghitung rata-rata
const daftarNilai = mahasiswa.map(m => m.nilai);

const rataRata = hitungRataRata(daftarNilai);

console.log(`Rata-rata Kelas = ${rataRata}`);