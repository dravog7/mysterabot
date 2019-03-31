async function detect()
{
    found=[];
    while(true)
    {
        for(i in map_index)
        {
            if((map_index[i].o.length>0)&&(map_index[i].o[0].name==='Shiny Rock'))
            {
                if(!found.find((m)=>{
                    return (map_index[i].o[0].x==m.x)&&(map_index[i].o[0].y==m.y);
                }))
                {
                    coords={x:map_index[i].o[0].x,y:map_index[i].o[0].y};
                    append('Gold Rock at '+coords.x+","+coords.y);
                    found.push(coords);
                }
            }
        }
        await timeout(2000);
    }
}