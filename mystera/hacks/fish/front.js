function loadScript()
{
    text="s=document.createElement('script');";
    text+="s.id='fish';"
    text+="s.src='https://dravog7.github.io/mysterabot/fisher.js';";
    text+="document.body.appendChild(s);";
    return text;
}

function unloadScript()
{
    text="a=document.getElementById('fish');";
    text+="a.parentNode.removeChild(a);"
    return text;
}
async function injectCode(e)
{
    data=await new Promise((resolve)=>{chrome.storage.local.get("fish",resolve);});
    data=data.fish;
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
    await new Promise((resolve)=>{chrome.storage.local.set({"fish":data},resolve);});
    document.getElementById("start").innerHTML=(data)?"Remove Fish script!":"Add Fish script!";
}
async function setup()
{
    data=await new Promise((resolve)=>{chrome.storage.local.get("fish",resolve);});
    ele=document.getElementById("start");
    ele.innerText=(data==1)?"Remove Fish script!":"Add Fish script!";
    ele.addEventListener("click",injectCode);
}
setup();