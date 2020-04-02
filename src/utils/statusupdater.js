export function loadStats() {
    return JSON.parse(document.getElementById("status").innerText);
}

export function saveStats(updated) {
    document.getElementById("status").innerText=JSON.stringify(updated);
}

export function activate(name) {
    let obj = loadStats()
    obj[name] = true;
    saveStats(obj)
}

export function deactivate(name) {
    let obj = loadStats()
    obj[name] = false;
    saveStats(obj)
}

export function addAsyncStatus(name,func) {
    return async function() {
            let re = "";
            console.log(name);
            activate(name);
            try {
                re =await func.apply(window,arguments);
            } catch (error) {
                console.log(error);
            }
            deactivate(name);
        }
}

export function addStatus(name,func) {
    return function() {
            let re = "";
            activate(name);
            try {
                re=func.apply(window,arguments);
            } catch (error) {
                console.log(error);
            }
            return re;
        }
}