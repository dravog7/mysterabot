import {timeout,clicker} from "../utils/basics.js";

function checkchat(rege,color)
{
    for(i=jv.chat_fade.lines.length-1;(i>0);i--)
    {
		if((/rating:/.test(jv.chat_fade.lines[i].text)))
		{
			return false;
		}
        if(jv.chat_fade.lines[i]._tintRGB==color)
        {
            if(rege.test(jv.chat_fade.lines[i].text))
                return true;
        }
    }
}

export async function fish()
{
	while(item_data[1].slot&&item_data[2].slot&&keyEnter.isUp)
	{
		await clicker();
		while(!checkchat(/bite!/,jv.chat_box._tintRGB))
		{
			await timeout(100);
		}
		await clicker();
	}
}
