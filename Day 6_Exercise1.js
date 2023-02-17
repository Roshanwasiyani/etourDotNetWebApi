/*for(let a=0;a<=10;a++)
console.log(a)

let b=0
while(b<=10){
console.log(b)
b++
}

let c=0
do{
console.log(c)
c++
}while(c<=10)

for(let d=10;d>=0;d--)
console.log(d)

let e=10
while(e>=0){
console.log(e)
e--
}

let f=10
do{
console.log(f)
f--
}while(f>=0)

let n=prompt('Enter value of n')
for(let g=0;g<=n;g++)
console.log(g)

for(let h=0;h<=10;h++)
console.log(`${h} X ${h} = ${h*h}`)

console.log('i'+'  i^2'+'  i^3')
for(let i=0;i<=10;i++)
console.log(`${i}   ${i*i}   ${i*i*i}`)

for(let j=0;j<=100;j++){
if(j%2==0){
    console.log(j)
}
}

for(let k=0;k<=100;k++){
    if(k%2!=0){
        console.log(k)
    }
    }

    let sum=0
    for(let m=0;m<=100;m++){
        sum+=m
    }
    console.log('The sum of all numbers from 0 to 100 is ',sum)
        
    let sum1=0, sum2=0
    for (let n=0;n<=100;n++){
        if(n%2==0)
            sum1+=n
        else
            sum2+=n
    }    
console.log(`The sum of all even from 0 to 100 ${sum1}. And sum of all odd from 0 to 100 ${sum2}`)
let array=[sum1,sum2]
console.log(sa)

let o=1
let rndnum
while(o<=5){
    rndnum=Math.random()
    console.log([rndnum])
    o++
}*/


let text=''
let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
for(let p=1;p<=6;p++){
text+=chars.charAt(Math.floor(Math.random()*chars.length))
}
console.log(text)



