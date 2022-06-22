const divideAndSort = (numb) => {
    if (typeof numb !== "number") {
        return "Data harus berupa number";
    }
    let arrNumber = numb.toString().split("0");
    let result = "";
    for (let i = 0; i <= arrNumber.length - 1; i++) {
        result += arrNumber[i].split("").sort().join("")
    }
    return Number(result)
}
console.log(divideAndSort("5956560159466056"));
console.log(divideAndSort(5956560159466056));