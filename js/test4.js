

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

//dtx=data3.title+"<br>"+data3.location
//ux.innerHTML=dtx
shop=["cofee","bread","butter"]
itemx=[data1,data2,data3]
//console.log(itemx)
z =itemx.length

d_content=""

for(let i=0;i<z;i++){
	console.log(itemx[i].desc)
}
/*console.log(shop[0])
console.log(shop[1])
console.log(shop[2])
*/
for(let i=0;i<z;i++){
	t=itemx[i].title
	d=itemx[i].desc
	img="<img src="+itemx[i].img+" width=300px >"
	console.log(img)
	l=itemx[i].location
	content=`<div class='mb-3'>
	<h2>${t}</h2><div>${img}</div>
	<h5>${l}</h5><div class='p-3'>${d}</div>
	</div>
	`
	d_content=d_content+content
}

ux.innerHTML=d_content