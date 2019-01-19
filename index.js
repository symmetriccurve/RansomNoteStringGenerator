var inputRansomNote = "Hand over the chocolate and no one gets hurt"// {g: 1, m: 3 }
var inputStr = "NYTimes online: A toddler is hurt while sliding down the chocolate slide at new year eve fair"

function isRansomeNotePossible(ransomNote, book) {
    let charCount = {}
    ransomNote = ransomNote.split('').filter(nonSpace => nonSpace != ' ').map(char => char.toLowerCase())
    for (var char in ransomNote) {
        if (charCount[ransomNote[char]]) {
            charCount[ransomNote[char]] += 1
        } else {
            charCount[ransomNote[char]] = 1
        }
    }

    const parsedInputStr = book.split('').filter(nonSpace => nonSpace != ' ').map(char => char.toLowerCase())
    for (var char = 0; char <= parsedInputStr.length; char++) {
        //for (var char in parsedInputStr) { faster enumeration does not work as deletion the last property needs an extra iteration
        // to delete the last property of the charCount
        if (!Object.keys(charCount).length) {
            return 'Possible'
        } else {
            if (charCount.hasOwnProperty(parsedInputStr[char])) {
                if (charCount[parsedInputStr[char]]) {
                    charCount[parsedInputStr[char]] -= 1
                    if (!charCount[parsedInputStr[char]]) {
                        delete charCount[parsedInputStr[char]]
                    }
                }
            }
        }
    }
    return 'Not Possible'
}

console.log(isRansomeNotePossible(inputRansomNote, inputStr))
