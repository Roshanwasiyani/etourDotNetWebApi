//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge='30 Days Of JavaScript'

//2. Print the string on the browser console using console.log()
console.log(challenge)

//3. Print the length of the string on the browser console using console.log()
console.log(`Length of String is ${challenge.length}`)

//4. Change all the string characters to capital letters using toUpperCase() method
console.log(`Upper Case of String is  ${challenge.toUpperCase()}`)

//5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(`Lower Case of String is  ${challenge.toLowerCase()}`)

//6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(`using substr()  ${challenge.substr(3,challenge.length)}`)
console.log(`Using substring  ${challenge.substring(3,21)}`)

//8. Check if the string contains a word Script using includes() method
console.log(`Using includes ${challenge.includes('Script')}`)

//9. Split the string into an array using split() method
console.log(`Using split  ${challenge.split(' ')}`)

//10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(','))

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let sample='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(`Using split ${sample.split(' ')}`)

//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(`Using replace ${challenge.replace('JavaScript','Python')}`)

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(`Using charAt ${challenge.charAt(15)}`)

//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(`Using charCodeAt ${challenge.charCodeAt(11)}`)

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(`Using indexOf ${challenge.indexOf('a')}`)

//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(`Using lastIndexOf ${challenge.lastIndexOf('a')}`)

//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sample2='You cannot end a sentence with because because because is a conjunction'
console.log(`Using indexOf ${sample2.indexOf('because')}`)

//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`Using lastIndexOf ${sample2.lastIndexOf('because')}`)

//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`Using search ${sample2.search('because')}`)

//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let sample3= ' 30 Days Of JavaScript '
console.log(`Using trim ${sample3.trim()}`)

//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(`Using startWith ${challenge.startsWith('30 Days Of JavaScript')}`)

//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(`Using endsWith ${challenge.endsWith('30 Days Of JavaScript')}`)

//23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(`Using match ${challenge.match('a')}`)

//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let sample4='30 Days Of'
console.log(`Using concat ${sample4.concat(' JavaScript')}`)

//25. Use repeat() method to print 30 Days Of JavaScript 2 timess
console.log(`Using repeat ${challenge.repeat(2)}`)