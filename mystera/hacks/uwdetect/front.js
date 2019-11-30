async function injectCode(e)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: "console.log(window);"});
    });
}
function setup()
{
    ele=document.getElementById("start");
    ele.addEventListener("click",injectCode);
}
setup();