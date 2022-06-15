// Add your code here
const dataToSubmit = {
    name : "Steve",
    email : "steve@steve.com"
}

const ObjData = {
    method  : "POST",
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
    },
    body : JSON.stringify(dataToSubmit),
};



function submitData(){
  return  fetch('http://localhost:3000/users', ObjData)
    .then(res => res.json())
    .then(toAppend)
    .catch(toAppendError)
}

submitData()


function toAppend(data){
    let body = document.querySelector("main")
    let p = document.createElement('p')
    p.innerHTML = `${data.id}`;
    body.appendChild(p) 
}

function toAppendError(data){
    let body = document.querySelector("body")
    let p = document.createElement('p')
    p.innerHTML = data.message;
    body.appendChild(p) 
}
