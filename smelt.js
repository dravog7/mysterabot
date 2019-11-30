async function drop(slot,amt)
{
    send({
        type: 'd',
        slot: slot,
        amt :amt,
    })
    await timeout(m.cur_speed);
}

keyG=jv.keyboard(71);
keyH=jv.keyboard(72);
keyJ=jv.keyboard(74);
keyG.press=()=>{drop(0,1);};
keyH.press=()=>{drop(1,1);};
keyJ.press=()=>{drop(2,1);};