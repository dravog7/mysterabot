function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

keyG=jv.keyboard(71)

async function combo(){
    keyQ.press();
    await timeout(125);
    keyR.press();
    await timeout(125);
    keyE.press();
}

keyG.press= combo;