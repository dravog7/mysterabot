m=getMob(me)
window.repkit=0;
function tog(a)
{
    a.isDown=!a.isDown;
    a.isUp=!a.isUp;
}

async function drop(slot,amt)
{
    send({
        type: 'd',
        slot: slot,
        amt :amt,
    })
    await timeout(m.cur_speed);
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Up(ctrl,steps)
{
    tog(keyUp);
    if(ctrl==1)
    {
        tog(keyCtrl);
        steps=1;
    }
    await timeout(m.cur_speed*steps);
    tog(keyUp);
    if(ctrl)
        tog(keyCtrl);
    await timeout(300);
}

async function Down(ctrl,steps)
{
    tog(keyDown);
    if(ctrl==1)
    {
        tog(keyCtrl);
        steps=1;
    }
    await timeout(m.cur_speed*steps);
    tog(keyDown);
    if(ctrl)
        tog(keyCtrl);
    await timeout(300);
}

async function Left(ctrl,steps)
{
    tog(keyLeft);
    if(ctrl==1)
    {
        tog(keyCtrl);
        steps=1;
    }
    await timeout(m.cur_speed*steps);
    tog(keyLeft);
    if(ctrl)
        tog(keyCtrl);
    await timeout(300);
}

async function Right(ctrl,steps)
{
    tog(keyRight);
    if(ctrl==1)
    {
        tog(keyCtrl);
        steps=1;
    }
    await timeout(m.cur_speed*steps);
    tog(keyRight);
    if(ctrl)
        tog(keyCtrl);
    await timeout(300);
}

async function Space()
{
    tog(keySpace);
    await timeout(250);
    tog(keySpace);
    await timeout(300);
}

keyG=jv.keyboard(71);
function checkchat(rege,color)
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

async function repair(slot)
{
    key7.press();
    await timeout(500);
    await drop(slot,1);
    await Down(0,1);
    await Up(1,1);
    while(!checkchat(/(perfect)/,jv.chat_fade.cachedTint))
    {
        if((!item_data[6].slot)&&(!window.repkit))
            return false;
        await timeout(1000);
    }
    await Up(0,1);
    keyShift.press();
    await timeout(500);
    return true;
}

async function hunger()
{
    while(1)
    {
        if(hunger_status.val<1)
            key4.press();
        await timeout(3000);
    }
}

function targetme(id)
{
    send({
        type: "t",
        t: id
    })
}


async function selfdef()
{
    m=getMob(me);
    while(item_data[4].slot)
    {
        if(hp_status.val<100)
        {
            a=mobs.items.find((tar)=>{
                if((tar)&&(dist(tar.x-m.x,tar.y-m.y)<2)&&(dist(tar.x-m.x,tar.y-m.y)>0))
                    return true;
                return false;
            });
            if(target.id!=a.id)
            {
                targetme(a.id)
            }
        }
        await timeout(1000);
    }
}

function brk(slot)
{
    return item_data[slot].eqp==2;
}

async function repkitroll(from,to)
{
    m=getMob(me)
    slots=[]
    for(i=from;i<=to;i++) slots.push(i);
    window.repkit=1;
    count=0;
    while(count<slots.length)
    {
        if((!item_data[6].slot))
        {
            await drop(slots[count],1)
            keyShift.press();
            await timeout(m.cur_speed);
            key7.press();
            count++;
        }
        await timeout(1000);
    }
    window.repkit=0;
}
