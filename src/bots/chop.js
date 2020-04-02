import {tog,brk,timeout} from "../utils/basics.js";
import {same} from "../utils/movements.js";

let keyG = jv.keyboard(71)
export async function chop(direction="Up")
{
    let key = same(direction,type='key')
    pickup().catch((e)=>{
        console.log(e);
    });
    tog(key);
    i=0;
    while(keyG.isUp)
    {
        i++;
        if(!item_data[4].slot)
        {
            tog(key);
            return;
        }
        await timeout(1000);
        if(brk(1))
        {
            tog(key);
            await repair(1,direction);
            key2.press();
            await timeout(getMob(me).cur_speed);
            tog(key);
        }
    }
    tog(key);
}

async function pickup()
{
    let prevy=getMob(me).y;
    let prevx=getMob(me).x;
	while(keyG.isUp)
	{
		if((getMob(me).y!=prevy)||(getMob(me).x!=prevx))
		{
			await timeout(getMob(me).cur_speed+200);
			keyShift.press();
            prevy=getMob(me).y;
            prevx=getMob(me).x;
		}
		await timeout(1000);
	}
}
