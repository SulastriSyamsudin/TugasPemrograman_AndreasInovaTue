// nilai.js

// Menghitung rata-rata nilai array
export function hitungRataRata(nilaiArray) {
  if (!Array.isArray(nilaiArray) || nilaiArray.length === 0) return 0;

  let total = 0;
  for (const n of nilaiArray) {
    total += n;
  }
  return total / nilaiArray.length;
}

// Menentukan kategori nilai
export function kategoriNilai(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 70) return "B";
  if (nilai >= 55) return "C";
  return "D";
}