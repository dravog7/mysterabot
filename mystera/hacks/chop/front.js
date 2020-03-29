var ele=document.getElementById("start");

async function injectCode() {
    console.log("hey");
    let tab = await getTab();
    if(getSign()) {
        console.log("inside");
        await sendMessage(tab,{
            type:"callfunc",
            name:"chopbot",
            args:[`"${document.getElementById("dir").value}"`],
        });
        setSign((await getStatus())['chop']);
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
        ele.innerText="Drop equip at slot 1 or 7 to stop!";
        ele.setAttribute("disabled",true)
    }
    else {
        ele.innerText="Add chop script!";
    }
}

function getSign() {
    return ele.innerText=="Add chop script!";
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
    setSign((await getStatus())['chop']);
    ele.addEventListener("click",injectCode);
}

window.addEventListener('DOMContentLoaded',setup);