async function uwdetect()
{
    found=[];
    title=jv.map_title.text;
    while(true)
    {
        for(i in map_index)
        {
            if((map_index[i].o.length>0)&&(/(Shiny Rock)|(Treasure Chest)|(Glowing Altar)|(Stairs Up)|(Stairway)|(Altar)|(Deep Recall)/.test(map_index[i].o[0].name)))
            {
                if(!found.find((m)=>{
                    return (map_index[i].o[0].x==m.x)&&(map_index[i].o[0].y==m.y);
                }))
                {
                    coords={x:map_index[i].o[0].x,y:map_index[i].o[0].y};
                    append(map_index[i].o[0].name+' at '+coords.x+","+coords.y);
                    found.push(coords);
                }
            }
        }
        if(title!=jv.map_title.text)
        {
            found=[];
            title=jv.map_title.text;
        }
        await timeout(2000);
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Healing Fountain
// Crystal Rock
// Glowing Altar
// Stairs Up
// Stairway
// Deep Recall
// Odd Chest