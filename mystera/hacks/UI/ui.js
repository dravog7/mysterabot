var opts={};
function loadScript()
{
    text="s=document.createElement('script');";
    text+="s.setAttribute('data',"+JSON.stringify(opts)+");";
    text+="s.id='UI_mod';"
    text+="s.src='https://dravog7.github.io/mysterabot/coordsUI.js';";
    text+="document.body.appendChild(s);";
    return text;
}

function unloadScript()
{
    text="a=document.getElementById('UI_mod');";
    text+="a.parentNode.removeChild(a);"
    return text;
}
async function injectCode(e)
{
    data=await new Promise((resolve)=>{chrome.storage.local.get("ui",resolve);});
    data=data.uw;
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
    await new Promise((resolve)=>{chrome.storage.local.set({"ui":data},resolve);});
    document.getElementById("start").innerHTML=(data)?"Remove Ui script!":"Add Ui script!";
}
async function setup()
{
    data=await new Promise((resolve)=>{chrome.storage.local.get("ui",resolve);});
    ele=document.getElementById("start");
    ele.innerText=(data==1)?"Remove Ui script!":"Add Ui script!";
    ele.addEventListener("click",injectCode);
}
setup();