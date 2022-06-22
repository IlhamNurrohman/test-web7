function ArkFood(harga, voucher, jarak, pajak) {

    if (typeof harga !== "number") {
        return "Harga harus number !"
    }
    if (typeof voucher !== "string") {
        return "Voucher harus string !"
    }
    if (typeof jarak !== "number") {
        return "Jarak harus number !"
    }
    if (typeof pajak !== "boolean") {
        return "Pajak harus boolean !";
    }


    let diskon = 0;
    let delivery = 5000;
    let tax = 0;

    if (harga >= 50000 && voucher.toUpperCase() === 'ARKAFOOD5') {
        diskon = harga * 50 / 100;
        if (diskon >= 50000) {
            diskon = 50000;
        }
    }

    if (harga >= 25000 && voucher.toUpperCase() === 'DITRAKTIRDEMY') {
        diskon = harga * 60 / 100;
        if (diskon >= 30000) {
            diskon = 30000;
        }
    }
    if (jarak > 2) {
        delivery = 5000 + ((jarak - 2) * 3000);
    }

    if (pajak === true) {
        tax = harga * 5 / 100;
    }

    return `Harga = ${harga} \nPotongan = ${diskon} \nBiaya Antar = ${delivery} \nPajak = ${tax} \nSubtotal = ${harga - diskon + delivery + tax}`;
}
console.log(ArkFood(120000, 'ARKAFOOD5', 5, true));