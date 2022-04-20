const divideAndSort = (angka) => {
    if (typeof angka !== "number"){
        return "Data harus berupa number";
    }
   let arrNumber = angka.toString().split("0");
    let hasil = "";
    for (let i = 0; i <= arrNumber.length -1; i++){
        hasil += arrNumber[i].split("").sort().join("")
    }
    return Number(hasil)
}
console.log(divideAndSort(5956560159466056));