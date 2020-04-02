var ele=document.getElementById("start");

async function injectCode() {
    let tab = await getTab();
    if(getSign()) {
        await sendMessage(tab,{
            type:"callfunc",
            name:"uw",
            args:[],
        });
        setSign(true);
    }
}

function sendMessage(tab,msg) {
    
    return new Promise((resolve)=>{
        chrome.tabs.sendMessage(tab[0].id,msg,resolve);
    });
}

async function getTab() {
    return await new Promise((resolve)=>{
        chrome.tabs.query({active: true, currentWindow: true}, resolve);
    });
}

function setSign(cond){
    if(cond){
        ele.innerText="reload";
        ele.setAttribute("disabled",true)
    }
    else {
        ele.innerText="Add uw script!";
    }
}

function getSign() {
    return ele.innerText=="Add uw script!";
}

async function getStatus(){
    let tab = await getTab();
    return await sendMessage(tab,{
        type:"status",
    });
}
async function setup()
{
    ele = document.getElementById("start");
    console.log(ele);
    setSign((await getStatus())['uwdetect']);
    ele.addEventListener("click",injectCode);
}

window.addEventListener('DOMContentLoaded',setup);