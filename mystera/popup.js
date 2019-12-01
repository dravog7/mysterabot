function frontpage(e)
{
    front=e.target.getAttribute("front");
    window.location.pathname='/'+front;
}
async function loadList()
{
    a=await fetch("hacks/content.json");
    data=await a.json();
    list=document.getElementById("list");
    listify(data,list);
}
window.addEventListener("load",function(){
    loadList();
    setZero();
});
function listify(data,list)
{
    for(i in data)
    {
        obj=data[i];
        ele=document.createElement("li");
        ele.innerText=obj.name;
        ele.setAttribute("front",obj.front);
        ele.setAttribute("inject",obj.inject);
        ele.addEventListener("click",frontpage);
        list.appendChild(ele);
    }
}

async function setZero()
{
    tabs=await new Promise((resolve)=>{chrome.tabs.query({active: true, currentWindow: true}, resolve);});
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: checkloads()}
    );
}

function checkloads()
{
    text="async function check(){";
    text+="a={'uw':!!document.getElementById('uwdetect'),'fish':!!document.getElementById('fish')};";
    text+="console.log(a);";
    text+="chrome.storage.local.set(a,()=>{console.log('loaded')});";
    text+="}check();"
}