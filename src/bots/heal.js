import {timeout,brk,equip,hunger} from "../utils/basics.js"

export async function heal(start,end)
{
    hunger();
    for(var i=start;i<end;i++)
    {
        await equip(i);
        while (!brk(i)) {
            await timeout(1000);
        }
    }
}

