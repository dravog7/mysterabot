import {timeout, brk, equip} from "./basics.js";
import {drop,same,opposite} from "./movements.js";
import {checkchat} from "./chatscans.js";

export async function repair(slot,direction="Up")
{
    let Up = same(direction)
    let Down = opposite(direction)

    key7.press();
    await timeout(500);
    await drop(slot,1);
    await Down(0,1);
    await Up(1,1);
    while(!checkchat(/(perfect)/,jv.chat_fade.cachedTint))
    {
        if((!item_data[6].slot))
            return false;
        await timeout(1000);
    }
    await Up(0,1);
    keyShift.press();
    await timeout(getMob(me).cur_speed);
    return true;
}

export async function autorepair(slot,direction="Up")
{
    while(item_data[slot].slot){
        if(brk(slot)){
            await repair(slot,direction);
            await equip(slot);
        }
        await timeout(1000);
    }
}