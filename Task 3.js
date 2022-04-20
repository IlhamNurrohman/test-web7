function ArkFood(harga, voucher, jarak, pajak) {

    if (typeof harga !== "number") {
        return "Data harus number !"
    }
    if (typeof voucher !== "string") {
        return "Data harus string !"
    }
    if (typeof pajak !== "boolean") {
        return "Data harus boolean !";
    }
    if (typeof jarak !== "number") {
        return "Data harus number !"
    }


    let diskon = '';
    let delivery = '';
    let tax = '';

    if (harga >= 50000 && harga <= 100000 && voucher.toUpperCase() === 'ARKAFOOD5') {
        diskon = harga * 50 / 100;
        if (harga >= 100000) {
            diskon = 50000;
        }
    }

    if (harga >= 25000 && harga <= 50000 && voucher.toUpperCase() === 'DITRAKTIRDEMY') {
        diskon = harga * 60 / 100;
        if (harga >= 50000) {
            diskon = 30000;
        }
    }

    if (jarak <= 2) {
        delivery = 5000;
    }
    if (jarak > 2) {
        delivery = 5000 + ((jarak - 2) * 3000);
    }

    if (pajak === true) {
        tax = harga * 5 / 100;
    }

    return console.log(`Harga = ${harga} \nPotongan = ${diskon} \nBiaya Antar = ${delivery} \nPajak = ${tax} \nSubtotal = ${harga - diskon + delivery + tax}`)
}

ArkFood(50000, '', 2, false);