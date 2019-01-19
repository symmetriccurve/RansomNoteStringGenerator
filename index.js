var inputRansomNote = 'Hand over the chocolate and no one gets hurt'
var inputBook = 'NYTimes online: A toddler is hurt while sliding down the chocolate slide at new year eve fair'

function isRansomeNotePossible(ransomNote, book) {
    let lookUp = {}
    ransomNote = ransomNote.split('').filter(nonSpace => nonSpace != ' ').map(char => char.toLowerCase())
    for (var char in ransomNote) {
        if (lookUp[ransomNote[char]]) {
            lookUp[ransomNote[char]] += 1
        } else {
            lookUp[ransomNote[char]] = 1
        }
    }

    const parsedBook = book.split('').filter(nonSpace => nonSpace != ' ').map(char => char.toLowerCase())
    for (var char = 0; char <= parsedBook.length; char++) {
        //for (var char in parsedBook) {
        if (!Object.keys(lookUp).length) {
            return 'Possible'
        } else {
            if (lookUp.hasOwnProperty(parsedBook[char])) {
                if (lookUp[parsedBook[char]]) {
                    lookUp[parsedBook[char]] -= 1
                    if (!lookUp[parsedBook[char]]) {
                        delete lookUp[parsedBook[char]]
                    }
                }
            }
        }
    }
    return 'Not Possible'
}

console.log(isRansomeNotePossible(inputRansomNote, inputBook))
