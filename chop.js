async function chop()
{
    maw=getMob(me);
    prevy=maw.y;
    tog(keyUp);
    i=0;
    while(keyG.isUp)
    {
        i++;
        if(!item_data[4].slot)
        {
            tog(keyUp);
            return;
        }
        if(maw.y<prevy)
        {
            keyShift.press();
            await timeout(250);
            prevy=maw.y
        }
        await timeout(1000);
        if(brk(1))
        {
            tog(keyUp);
            await repair(1);
            key2.press();
            await timeout(500);
            tog(keyUp);
        }
    }
    tog(keyUp);
}