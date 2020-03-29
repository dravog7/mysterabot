var ele=document.getElementById("start");

async function injectCode() {
    console.log("hey");
    let tab = await getTab();
    if(getSign()) {
        console.log("inside");
        await sendMessage(tab,{
            type:"callfunc",
            name:"dyebot",
            args:[],
        });
        setSign((await getStatus())['dye']);
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
        ele.innerText="empty slot 2!";
        ele.setAttribute("disabled",true)
    }
    else {
        ele.innerText="Add dye script!";
    }
}

function getSign() {
    return ele.innerText=="Add dye script!";
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
    setSign((await getStatus())['dye']);
    ele.addEventListener("click",injectCode);
}

window.addEventListener('DOMContentLoaded',setup);