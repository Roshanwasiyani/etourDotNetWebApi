//1. Using console.log() print out the following statement:
let string1="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(string1)

//2. Using console.log() print out the following quote by Mother Teresa:
let string2="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(string2)

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(`Using typeof ${typeof('10')==typeof(10)}`)

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num=Math.round(parseFloat('9.8'))
console.log(num)

//5. Check if 'on' is found in both python and jargon
let one='python'
let two='jargon'
console.log(`${one} has word 'on' ${one.includes('on')}`)
console.log(`${two} has word 'on' ${two.includes('on')}`)

//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let three='I hope this course is not full of jargon'
console.log(`${three} has word 'jargon' ${three.includes('jargon')}`)

//7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*100))

//8. Generate a random number between 50 and 100 inclusively.
console.log((Math.floor(Math.random()*50)+50))

//9. Generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random()*255))

//10. Access the 'JavaScript' string characters using a random number.



//11. Use console.log() and escape characters to print the following pattern.
/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string3='You cannot end a sentence with because because because is a conjunction'
console.log(string3.substr(31,23))