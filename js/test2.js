content = document.getElementById('pagecontent')



function page1(){
var c_header="<h3>Business management</h3>"	
var c_image="<img class='m-3'src='images/2.jpg' width=400px"
var ctext=`
<div style='display:inline-block;width:90%;padding:20px;'>
The Our platform is a professional ICT 
training and high-end programmes Center. 

Our courses are aimed at experienced mid-to 
high-level managers wishing to develop the 
skills, behaviours and leadership mindset 
to implement complex transformations. 
It trains "comprehensive leaders"
 in the art of leadin​​g in and multicultural 
 environments</div>
`
c_content=c_header+c_image+ctext

content.innerHTML=c_content


}

//page1()