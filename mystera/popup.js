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
async function getTab() {
    return await new Promise((resolve)=>{
        chrome.tabs.query({active: true, currentWindow: true}, resolve);
    });
}
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

window.addEventListener("load",function(){
    loadList();
});