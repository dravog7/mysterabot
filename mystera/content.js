console.log("content script loaded!")

function insertScript(filename) {
    console.log("inside insertSCript");
    let ele = document.createElement("script");
    ele.src = chrome.runtime.getURL(filename);
    (document.head || document.documentElement).appendChild(ele);
}
function callFunc(name,args){
    let argstring = args.join(",")
    let ele = document.createElement("script");
    ele.setAttribute("id",`${name}${argstring}`)
    ele.innerText=`window.${name}=entry.${name}(${argstring});document.getElementById('${name}${argstring}').remove();`
    document.body.appendChild(ele);
}

function getStatus() {
    return JSON.parse(document.getElementById("status").innerText);
}

function setup() {
    let StatusEle = document.createElement("div");
    StatusEle.style.display="none";
    StatusEle.setAttribute("id","status");
    StatusEle.innerText = JSON.stringify({});
    document.documentElement.appendChild(StatusEle);
    insertScript("dist/index.js");
}

chrome.runtime.onMessage.addListener((msg,sender,response)=>{
    console.log(msg);
    switch (msg.type) {
        case "insert":
            insertScript(msg.filename);
            response(true);
            break;
        case "status":
            response(getStatus());
            break;
        case "callfunc":
            callFunc(msg.name,msg.args);
            response(true);
            break;
        default:
            break;
    }
});

setup();