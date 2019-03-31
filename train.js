async function hittrain()
{
    m=getMob(me)
    while(item_data[8].slot)
    {
        if((map_index[m.x+'0'+(m.y-1)].o[0].hpbar)&&(map_index[m.x+'0'+(m.y-1)].o[0].hpbar.val<300))
        {
            key7.press();
            await checkHP(m);
            key8.press();
            await timeout(500);
        }
        if(brk(7))
        {
            fixed=await repair(7);
            if(!fixed)
                return -1;
            key8.press();
            await timeout(500);
        }
        await timeout(1000);
        
    }
}

async function checkHP(m)
{
    while(1)
    {
    if((map_index[m.x+'0'+(m.y-1)].o[0].hpbar)&&(map_index[m.x+'0'+(m.y-1)].o[0].hpbar.val==map_index[m.x+'0'+(m.y-1)].o[0].hpbar.max))
    {
        return;
    }
    await timeout(1000);
    }
}