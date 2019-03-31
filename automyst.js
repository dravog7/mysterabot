async function myst()
{
    m=getMob(me);
    while(item_data[4].slot)
    {
        if(target.id==m.id)
        {
            a=mobs.items.find((tar)=>{
                if((tar)&&(dist(tar.x-m.x,tar.y-m.y)<2)&&(dist(tar.x-m.x,tar.y-m.y)>0))
                    return true;
                return false;
            });
            if(a)
            {
                targetme(a.id)
            }
        }
        await timeout(1000);
    }
}