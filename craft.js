async function craft(){
    while(keyG.isUp){
        jv.build_dialog.info.use.on_click();
        await timeout(250);
    }
}

async function craftsorter(from,to){
    //remove unruned
    for(i=from;i<=to;i++)
    {
        if(/[\*]/.test(item_data[i].n))
        {
            continue;
        }
        await drop(i,1);
    }
}

async function equip(i) {
    send({
        type: "u",
        slot: i
    });
    await timeout(250);
}

async function pickupall() {
    while(item_data[74].slot)
    {
        keyShift.press();
        await timeout(200);
    }
}