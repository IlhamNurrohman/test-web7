const divideAndSort = (angka) => {
    if(typeof angka !== "number"){
        return "Data harus bertipe number";
    }
    let arrNumber = angka.toString().split("0");
    let arrNumber2 = "";
    for (let i = 0; i <= arrNumber.length -1; i++){
        arrNumber2 += arrNumber[i].split("").sort().join("")
    }
    return Number(arrNumber2)
}
console.log(divideAndSort(5956560159466056));