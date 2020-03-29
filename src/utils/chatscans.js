export function checkchat(rege,color)
{
    for(i=jv.chat_fade.lines.length-1;i>0;i--)
    {
        if(jv.chat_fade.lines[i]._tintRGB==color)
        {
            if(rege.test(jv.chat_fade.lines[i].text))
                return true;
        }
    }
}