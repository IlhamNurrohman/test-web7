const deretAngka = (angka) => {
    if(typeof angka !== "number"){
        return "Data harus bertipe number";
    }
    let arrNumber = angka.toString().split("0");
    let arrNumber2 = "";
    for (let i = 0; i <= arrNumber.length -1; i++){
        arrNumber2 += arrNumber[i].split("").sort().join("")
    }
    return arrNumber
}
console.log(deretAngka, Number((78907850524)));