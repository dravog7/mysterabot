import {same,clockwise,anticlockwise} from "../utils/movements.js";
import {timeout,brk} from "../utils/basics.js";
import {repair} from "../utils/repair.js";
import {checkchat} from "../utils/chatscans.js";

export async function assa(playername,wait=121,direction="Up")
{
    let keyG = jv.keyboard(71);
    let Up = same(direction);
    let Left = anticlockwise(direction);
    let Right = clockwise(direction);
    let regex = new RegExp(`(${playername})`);
    while(keyG.isDown==0)
    {
		
        await Left(0,1);
        while(!checkchat(regex,13260))
            await timeout(1000);
        await Right(0,1);
        await Up(0,1);
        if(brk(1))
        {
            await repair(1);
            key4.press();
            await timeout(500);
            key2.press();
            await timeout(Up(0,1));
        }
		for(i=0;(i<wait)&&(keyG.isDown==0);i++)
		{
			await timeout(1000);
		}
		console.log("done")
    }
}