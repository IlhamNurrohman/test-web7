function reverseWords(str) {
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
console.log(reverseWords('saya belajar javascript'));
console.log(reverseWords('javascript belajar saya'));
console.log(reverseWords('ilham nurrohman'));