const tools=[
["🔐","Password Generator","security","Generate strong random passwords.","password.html"],
["🛡️","Password Strength","security","Check password strength locally.","password.html"],
["#️⃣","Hash Generator","security","Create MD5, SHA-1, SHA-256 and SHA-512 hashes.","hash.html"],
["🔤","Base64 Encoder","encoding","Encode and decode Base64 text.","base64.html"],
["🌐","URL Encoder","encoding","Encode or decode URL components.","url-encoder.html"],
["{ }","JSON Formatter","developer","Format and minify JSON data.","json.html"],
["🆔","UUID Generator","developer","Generate UUID v4 identifiers.","uuid.html"],
["🎫","JWT Decoder","developer","Inspect JWT header and payload locally.","jwt.html"],
["⏱️","Timestamp","developer","Convert Unix timestamps and dates.","timestamp.html"],
["01","Binary ↔ Text","text","Convert binary data to readable text.","binary.html"],
["HEX","Hex ↔ Text","text","Convert hexadecimal and text.","hex.html"],
["U","Unicode","text","Encode and decode Unicode escapes.","unicode.html"],
["🔗","URL Parser","developer","Inspect URL components.","url-parser.html"],
["🧹","JSON Minifier","developer","Compact JSON into one line.","json.html"],
["🎲","Random String","security","Generate random strings.","random.html"],
["🎨","Color Converter","developer","Convert HEX, RGB and HSL values.","color.html"]
];
const grid=document.querySelector("#grid"),search=document.querySelector("#search"),count=document.querySelector("#count");
let cat="all";
function render(){
 let q=search.value.toLowerCase();
 let arr=tools.filter(t=>(cat==="all"||t[2]===cat)&&t[1].toLowerCase().includes(q));
 count.textContent=arr.length+" tools";
 grid.innerHTML=arr.map(t=>`<a class="card" href="tools/${t[4]}"><div class="icon">${t[0]}</div><h3>${t[1]}</h3><p>${t[3]}</p><span class="tag">${t[2]}</span></a>`).join("")||'<p>No tools found.</p>';
}
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");cat=b.dataset.cat;render()});
search.oninput=render;
document.onkeydown=e=>{if(e.key==="/"&&document.activeElement!==search){e.preventDefault();search.focus()}};
document.querySelector("#theme").onclick=()=>document.body.classList.toggle("light");
render();
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");