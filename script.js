const labels = document.querySelectorAll(".form-control label");

function createWaveLabel(text){
return text
.split("")
.map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)
.join("");
}

labels.forEach(label=>{
label.innerHTML=createWaveLabel(label.innerText);
});

document.getElementById("form").addEventListener("submit",async function(e){

e.preventDefault();

const user={
name:document.getElementById("name").value,
email:document.getElementById("email").value,
password:document.getElementById("password").value
};

await fetch("http://localhost:3000/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(user)
});

alert("User Stored in Database");

});