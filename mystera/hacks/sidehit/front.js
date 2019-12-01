function loadScript()
{
    text="s=document.createElement('script');";
    text+="s.id='hittrain';"
    text+="s.src='https://dravog7.github.io/mysterabot/sidetrain.js';";
    text+="document.body.appendChild(s);";
    return text;
}

function unloadScript()
{
    text="a=document.getElementById('hittrain');";
    text+="a.parentNode.removeChild(a);"
    return text;
}
async function injectCode(e)
{
    data=await new Promise((resolve)=>{chrome.storage.local.get("hit",resolve);});
    data=data.hit;
    tabs=await new Promise((resolve)=>{chrome.tabs.query({active: true, currentWindow: true}, resolve);});
    if(!data)
    {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: loadScript()}
        );
    }
    else
    {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: unloadScript()}
        );
    }
    data=!data;
    await new Promise((resolve)=>{chrome.storage.local.set({"hit":data},resolve);});
    document.getElementById("start").innerHTML=(data)?"Remove hit script!":"Add hit script!";
}
async function setup()
{
    data=await new Promise((resolve)=>{chrome.storage.local.get("hit",resolve);});
    ele=document.getElementById("start");
    ele.innerText=(data==1)?"Remove hit script!":"Add hit script!";
    ele.addEventListener("click",injectCode);
}
setup();