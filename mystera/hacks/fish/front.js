var ele=document.getElementById("start");

async function injectCode() {
    console.log("hey");
    let tab = await getTab();
    if(getSign()) {
        console.log("inside");
        await sendMessage(tab,{
            type:"callfunc",
            name:"fishbot",
            args:[],
        });
        setSign((await getStatus())['fish']);
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
        ele.innerText="hold enter key to stop!";
        ele.setAttribute("disabled",true)
    }
    else {
        ele.innerText="Add fish script!";
    }
}

function getSign() {
    return ele.innerText=="Add fish script!";
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
    setSign((await getStatus())['fish']);
    ele.addEventListener("click",injectCode);
}

window.addEventListener('DOMContentLoaded',setup);