function reverseString(str) {
    let newString = "";
    let kata = "";
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] !== " ") {
            kata += str[i];
        } else {
            newString = kata + " " + newString;
            kata = "";
        }
    }
    newString = kata + " " + newString;
    return newString;
}
console.log(reverseString('saya belajar javascript'));