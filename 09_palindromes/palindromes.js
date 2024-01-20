const palindromes = function (string) {

    let p=string.replaceAll(' ', '');;
    console.log(p);
    let m=p.toLowerCase().replace(/[^\w\s\']|_/g, "");    
    let length = m.length;

    

    if (length % 2 == 0) {
        for (let i = 0, j = length - 1; i <= j; i++, j--) {
            if (m[i] != m[j]) {
                console.log(i);
                console.log(j);
                console.log(m[i]);
                console.log(m[j]);
                return false;
            }
        }
    } else {
        for (let i = 0, j = length - 1; i <= j; i++, j--) {
            if (m[i] != m[j]) {
                console.log(m[i]);
                console.log(m[j]);
                return false;
            }
           
        }

    }
    return true;



};

// Do not edit below this line
module.exports = palindromes;
// const palindromes = require('./palindromes')

// describe('palindromes', () => {
//   test('works with single words', () => {
//     expect(palindromes('racecar')).toBe(true);
//   });
//   test.skip('works with punctuation ', () => {
//     expect(palindromes('racecar!')).toBe(true);
//   });
//   test.skip('works with upper-case letters ', () => {
//     expect(palindromes('Racecar!')).toBe(true);
//   });
//   test.skip('works with multiple words', () => {
//     expect(palindromes('A car, a man, a maraca.')).toBe(true);
//   });
//   test.skip('works with multiple words', () => {
//     expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
//   });
//   test.skip('doesn\'t just always return true', () => {
//     expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
//   });
//   test.skip('works with numbers in a string', () => {
//     expect(palindromes('rac3e3car')).toBe(true);
//   });
//   test.skip('works with unevenly spaced numbers in a string', () => {
//     expect(palindromes('r3ace3car')).toBe(false);
//   });
// });
