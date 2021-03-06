function loadScript()
{
    text="s=document.createElement('script');";
    text+="s.id='uwdetect';"
    text+="s.src='https://dravog7.github.io/mysterabot/uw.js';";
    text+="document.body.appendChild(s);";
    return text;
}

function unloadScript()
{
    text="a=document.getElementById('uwdetect');";
    text+="a.parentNode.removeChild(a);"
    return text;
}
async function injectCode(e)
{
    data=await new Promise((resolve)=>{chrome.storage.local.get("uw",resolve);});
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
    await new Promise((resolve)=>{chrome.storage.local.set({"uw":data},resolve);});
    document.getElementById("start").innerHTML=(data)?"Remove UW script!":"Add UW script!";
}
async function setup()
{
    data=await new Promise((resolve)=>{chrome.storage.local.get("uw",resolve);});
    ele=document.getElementById("start");
    ele.innerText=(data==1)?"Remove UW script!":"Add UW script!";
    ele.addEventListener("click",injectCode);
}
setup();