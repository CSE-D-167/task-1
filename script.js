fetch("http://localhost:3000/projects")
.then(res=>res.json())
.then(data=>{

let output="";

data.forEach(project=>{

output+=`

<div class="project">

<h3>${project.title}</h3>

<p>${project.description}</p>

<p><b>Technology:</b> ${project.technology}</p>

</div>

`;

});

document.getElementById("projectList").innerHTML=output;

})
.catch(err=>console.log(err));
