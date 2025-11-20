// pegawai.js
export function hitungGajiBersih(gajiPokok, potongan) {
  // pastikan angka
  const gp = Number(gajiPokok) || 0;
  const pot = Number(potongan) || 0;
  return gp - pot;
}

export function kategoriJabatan(gajiPokok) {
  const gp = Number(gajiPokok) || 0;
  if (gp >= 10000000) return "Manajer";
  if (gp >= 5000000)  return "Supervisor";
  return "Staf";
}