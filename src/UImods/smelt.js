async function drop(slot,amt)
{
    send({
        type: 'd',
        slot: slot,
        amt :amt,
    })
    await timeout(m.cur_speed);
}


export function smelt() {
    window.keyG=jv.keyboard(71);
    window.keyH=jv.keyboard(72);
    window.keyJ=jv.keyboard(74);
    window.keyG.press=()=>{drop(0,1);};
    window.keyH.press=()=>{drop(1,1);};
    window.keyJ.press=()=>{drop(2,1);};
}
