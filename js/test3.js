


/*
var val1=1000
console.log(val1)

var val1=500
console.log(val1)
{
console.log(val1)
}
var val1=4500
console.log(val1)

let val2=45
console.log(val1)
// val2=450//this is error
val2=890
console.log(val2)
{	
let val2=345
console.log(val2)
}

const val10=110
val10=45
*/
//strings
name="Joe Kola"
number="123456"
spc="          "
/*
console.log(name.length)
console.log(spc.length)
a="200"
b="456"
sum1=a+b
console.log(sum1)
sum2=parseInt(a)+parseInt(b)
console.log(sum2)


a3="500.2345"
b3="456.098"
sum3=a3+b3

sum4=parseInt(a3)+parseInt(b3)
console.log(sum4)
sum5=parseFloat(a3)+parseFloat(b3)
console.log(sum5)
*/

console.log(name[2])
name[2]="i"
console.log(name)

let text = "the quick brown fox"
ptrn = /fox/
//method 1
val = ptrn.test(text)
console.log(val)
//method 2
val = text.match(ptrn)
console.log(val)


ptrn = /FOX/ig
//method 1
val = ptrn.test(text)
console.log(val)
//method 2
val = text.match(ptrn)
console.log(val)


function page1(){}


//JS OBJECTS
data1={
'title':'Business',
'desc':'Corporte Business Training',
'location':'Remote training',
'img':"images/2.jpg"
}

data2={
'title':'ICT',
'desc':'Corporte ICT Training',
'location':'Remote training',
'img':"images/11.jpg"
}



data3={
'title':'HR',
'desc':'HR Corporte  Training',
'location':'Remote training',
'img':"images/3.jpg"
}
ux=document.getElementById('item')
dtx=data3.title+"<br>"+data3.location
ux.innerHTML=dtx

itemx=[data1,data2,data3]
console.log(itemx)




