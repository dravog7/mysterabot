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
    await timeout(m.cur_speed);
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
    await timeout(m.cur_speed);
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
    await timeout(m.cur_speed);
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
    await timeout(m.cur_speed);
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
    await Right(0,1);
    await Left(1,1);
    while(!checkchat(/(perfect)/,jv.chat_fade.cachedTint))
    {
        if((!item_data[6].slot)&&(!window.repkit))
        {
            console.log(window.repkit);
            return false;
        }
        await timeout(1000);
    }
    await Left(0,1);
    keyShift.press();
    await timeout(m.cur_speed);
    return true;
}

async function hunger()
{
    while(1)
    {
        if(hunger_status.val<40)
        {
            for(i=0;i<4;i++)
            {
                key4.press();await timeout(150);
            }
            
        }
        await timeout(10000);
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


async function hittrain()
{
    m=getMob(me)
    hunger();
    while(item_data[1].slot&&item_data[6].slot)
    {
        if((map_index[(m.x-1)+'0'+(m.y)].o[0].hpbar)&&(map_index[(m.x-1)+'0'+(m.y)].o[0].hpbar.val<300))
        {
            key7.press();
			Left(0,1);
            await checkHP(m,1,0);
			//Up(0,1);
			//await checkHP(m,0,1);
			//Down(0,1);
			//await checkHP(m,0,-1);
			//Left(0,1);
            key2.press();
            await timeout(500);
        }
        if(brk(1))
        {
            fixed=await repair(1);
            if(!fixed)
                return -1;
            console.log("fixed!");
            key2.press();
            await timeout(500);
        }
        await timeout(1000);
        
    }
}

async function checkHP(m,x,y)
{
    while(1)
    {
    if((map_index[(m.x-x)+'0'+(m.y-y)].o[0].hpbar)&&(map_index[(m.x-x)+'0'+(m.y-y)].o[0].hpbar.val==map_index[(m.x-x)+'0'+(m.y-y)].o[0].hpbar.max))
    {
        return;
    }
    await timeout(1000);
    }
}
hit=hittrain();