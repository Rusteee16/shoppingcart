const sideBar = document.querySelector("aside");
const menuBtn = document.querySelector("#toggle-sidebar");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
  sideBar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
  sideBar.style.display = 'none';
})

let noteSize = document.getElementById("notes");

noteSize.style.height = noteSize.scrollHeight + "px";
noteSize.style.overflowY = "hidden";
noteSize.addEventListener("input", adjust);
function adjust(){
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + "px";
}

let tp=parseInt(0);
let ti=parseInt(0);
for(let i=1;i<sessionStorage.length;i++){
  const key =sessionStorage.key(i);
  tp=tp+parseInt(JSON.parse(sessionStorage.getItem(key)).price*JSON.parse(sessionStorage.getItem(key)).quantity);
}
document.getElementById("tl_cost").innerHTML = tp;


function SomeDeleteRowFunction(o,v) {
  sessionStorage.removeItem(v);
  var p=o.parentNode.parentNode;
      p.parentNode.removeChild(p);
 }

for(let i=1;i<sessionStorage.length;i++){
  const key =sessionStorage.key(i);
  console.log(JSON.parse(sessionStorage.getItem(key)));
  const tr = document.createElement('tr');
  const trContent = `
                <td>${JSON.parse(sessionStorage.getItem(key)).name}</td>
                <td>${JSON.parse(sessionStorage.getItem(key)).price*JSON.parse(sessionStorage.getItem(key)).quantity}</td>
                <td>${JSON.parse(sessionStorage.getItem(key)).quantity}</td>
                <td><input type="button" value="Delete Row" onclick="SomeDeleteRowFunction(this,${key})"></td>
                `
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
}

