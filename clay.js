async function hittrain()
{
    m=getMob(me)
    while(item_data[8].slot)
    {
        if(brk(0))
        {
            fixed=await repair(0);
            if(!fixed)
                return -1;
            key1.press();
            await timeout(500);
        }
        await timeout(1000);
        
    }
}
