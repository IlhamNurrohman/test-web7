function reverseString(str) {
    let currentString = str.toLowerCase();
    let newString = '';
    for (let i = currentString.length - 1; i >= 0; i--) {
        newString = newString + currentString[i];
    }
    if (newString !== currentString) {
        return "bukan palindrom";
    }
    return "palindrom";
}
console.log(reverseString('malam'));

























/*
    1. Buat variabel currentString dan newString
    currentString menampung nilai dari parameter
    newString adalah string kosong yang menampung nilai baru
     */
    
/*
     2. lakukan perulangan secara decrement atau penurunan (--)
     nilai awal perulangan (let i) adalah panjang currentString dikurangi 1 yaitu 4
     jika nilai i >= 0 maka jalankan kode yang ada di dalam perulangan
     jika sudah selesai, lakukan decrement atau nilai i dikurangi 1 yaitu 4 - 1: 3
      */
    

/*
iterasi pertama: ambil index ke 4 currentString lalu digabung dan disimpan ke newString
newString = "" + "o"
hasil newString: o
iterasi kedua: ambil index ke 3 currentString lalu digabungkan dan disimpan ke newString
newString = "o" + "l"
hasil newString: ol
lanjut sampai iterasi terakhir.
sampai iterasi terakhir
iterasi terakhir: ambil index ke 0 currentString lalu digabungkan dan disimpan ke newString
newString = "olle" + "h"
hasil newString: "olleh"
*/
   // 3. return nilai newString