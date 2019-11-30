function loadScript()
{
    text="s=document.createElement('script');";
    text+="s.src='https://dravog7.github.io/mysterabot/uw.js';";
    text+="document.body.appendChild(s);";
    return text;
}

async function injectCode(e)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: loadScript()});
    });
}
function setup()
{
    ele=document.getElementById("start");
    ele.addEventListener("click",injectCode);
}
setup();