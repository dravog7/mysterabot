function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function brk(slot)
{
    return item_data[slot].eqp==2;
}

async function hunger()
{
    while(1)
    {
        if(hunger_status.val<25)
        {
            key4.press();await timeout(250);
            key4.press();
        }
        await timeout(3000);
    }
}

function useme(slot)
{
    send({
                type: "u",
                slot: slot,
            });
}

async function heal(start,end)
{
    hunger();
    for(var i=start;i<end;i++)
    {
        useme(i);
        while (!brk(i)) {
            await timeout(1000);
        }
    }
}

