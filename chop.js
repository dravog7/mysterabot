async function chop()
{
    pickup();
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
        await timeout(1000);
        if(brk(1))
        {
            tog(keyUp);
            await repair(1);
            key2.press();
            await timeout(getMob(me).cur_speed);
            tog(keyUp);
        }
    }
    tog(keyUp);
}

async function pickup()
{
	prevy=getMob(me).y;
	while(keyG.isUp)
	{
		if(getMob(me).y!=prevy)
		{
			await timeout(getMob(me).cur_speed+200);
			keyShift.press();
			prevy=getMob(me).y;
		}
		await timeout(1000);
	}
}
