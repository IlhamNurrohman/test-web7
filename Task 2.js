function reverseWords(str) {
    if(typeof str !== "string"){
        return "Data harus string";
    }
    
    let kata = "";
    let hasil = "";
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] !== " ") {
            hasil += str[i];
        } else {
            kata = hasil + " " + kata;
            hasil = "";
        }
    }
    kata = hasil + " " + kata;
    return kata;
}
console.log(reverseWords(2));
console.log(reverseWords('saya belajar javascript'));
console.log(reverseWords('javascript belajar saya'));
console.log(reverseWords('ilham nurrohman'));