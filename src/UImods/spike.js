function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function brk(slot)
{
    return item_data[slot].eqp==2;
}

function useme(slot)
{
    send({
                type: "u",
                slot: slot,
            });
}
keyV=jv.keyboard(86);
function spike(from,too)
{
    window.count=from;
    keyV.press=function(){
        if(count>too)
        {
            return;
        }
        useme(count);
        count++;
    }
}

