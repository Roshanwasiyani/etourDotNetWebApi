//1. Develop a small script which generate any number of characters random id:
let text=''
let alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let n=Math.floor(Math.random()*10)
 for(let a=0;a<=n;a++){
  text+=alpha.charAt(Math.floor(Math.random()*alpha.length))
 }
 console.log(text)

 //2. Write a script which generates a random hexadecimal number.
/*'#ee33df' */
//stack overflow demo 2

//3. Write a script which generates a random rgb color number.
/*rgb(240,180,80) */




 const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  /*let arr1=[]
  for(const l of countries){
    arr1.push(l.length)
  }
  console.log(arr1)

  let arr2=[]
for(const ll of countries){
  [[arr2.push(ll),
  arr2.push(ll.slice(0,3).toUpperCase()),
  arr2.push(ll.length)]]

}
console.log(arr2)

let arr3=[]
for(const lll of countries){
  if(lll.includes('land')){
    arr3.push(lll)
  }
}

console.log(arr3)

let arr4=[]
for (const aa of countries){
  if(aa.slice(aa.length-2,aa.length)=='ia'){
    arr4.push(aa)
  }
}
console.log(arr4)

let maxlength=countries[0]
for(const aaa of countries){
  if(aaa.length>maxlength.length)
  maxlength=aaa
}
console.log(maxlength)

let arr5=[]
for(const bb of countries){
  if(bb.length==5){
arr5.push(bb)
  }
}
console.log(arr5)

let longword=webTechs[0]
for(const webar1 of webTechs){
  if(webar1.length>longword.length){
    longword=webar1
  }
}
console.log(longword)

let arr6=[]
for(const webar2 of webTechs){
  arr6.push([webar2+','+webar2.length])
}
console.log(arr6)

let word=''
for(const ms1 of mernStack){
  word+=ms1.slice(0,1).toLowerCase()
}
console.log(word+'Stack')

let c=''
let arr7=[]
for(webar3 of webTechs){
  if(webar3=='JavaScript'){
    c='JS'
    arr7.push(c)
  }
  arr7.push(webar3)
}
console.log(arr7)

const fruit=['banana','orange','mango','lemon']
fruit.reverse()
console.log(fruit)*/

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

let ss=''
for(let o of fullStack){
  ss+=o
}
ss.split(',')

