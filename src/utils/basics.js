export function tog(a)
{
    a.isDown=!a.isDown;
    a.isUp=!a.isUp;
}

export function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function brk(slot)
{
    return item_data[slot].eqp==2;
}

export async function hunger()
{
    while(1)
    {
        if(hunger_status.val<1)
        {
            key4.press();await timeout(250);
            key4.press();await timeout(250);
            key4.press();await timeout(250);
        }
            
        await timeout(3000);
    }
}

export function tileat(x,y)
{
    return map[loc2tile(x,y)].spr;
}

export async function clicker()
{
    keySpace.isDown=1;keySpace.isUp=0;
    await timeout(100);
    keySpace.isDown=0;keySpace.isUp=1;
}

export async function equip(i) {
    send({
        type: "u",
        slot: i
    });
    await timeout(250);
}