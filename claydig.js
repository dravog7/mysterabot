async function clay()
{
    m=getMob(me)
    shallow="247";
    ground="22";
    deep="325";
    while(true)
    {
        if(brk(1))
            {
                fixed=await repair(1);
                if(!fixed)
                    return -1;
                key2.press();
                await timeout(500);
            }
        if((tileat(m.x,m.y-1)!=deep)&&(tileat(m.x,m.y-2)!=deep))
        {
            await Up(0,1);
            while(tileat(m.x,m.y-1)!=deep)
            {
                if(brk(1))
                {
                    fixed=await repair(1);
                    if(!fixed)
                        return -1;
                    key2.press();
                    await timeout(500);
                }
                await timeout(500);
            }
            await Down(0,1);
            await Up(1,1);
        }
        await timeout(1000);
    }

}

function tileat(x,y)
{
    return map[loc2tile(x,y)].spr;
}