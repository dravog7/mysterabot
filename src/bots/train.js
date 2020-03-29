import {timeout,hunger,brk} from "../utils/basics.js";
import {repair} from "../utils/repair.js";
import {same,clockwise,anticlockwise,opposite} from "../utils/movements.js"

export async function hittrain(direction="Up")
{
    let m=getMob(me)
    hunger();
    console.log(dummy(m.x,m.y,direction));
    while(item_data[1].slot&&item_data[6].slot)
    {
        let dum=dummy(m.x,m.y,direction);
        
        if(!dum.hpbar) {
            await timeout(1000);
            continue;
        }
            
        if((dum.hpbar.val<300))
        {
            console.log("got dummy1");
            key7.press();
			await same(direction)(0,1);
            await checkHP(m,direction);
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
            console.log("got dummy3");
            if(!(await repair(1,direction)))
                return -1;
            console.log("fixed!");
            key2.press();
            await timeout(500);
        }
        await timeout(1000);
        
    }
}

export async function swordTrain(direction="Up") {
    let m=getMob(me)
    hunger();
    console.log(dummy(m.x,m.y,direction));
    while(item_data[1].slot&&item_data[6].slot)
    {
        let leftdir = anticlockwise(direction,"text");
        let rightdir = clockwise(direction,"text");
        let dum = dummy(m.x,m.y,direction);
        let leftdum = dummy(m.x,m.y,leftdir);
        let rightdum = dummy(m.x,m.y,rightdir);
        
        if((!dum.hpbar)||(!leftdum.hpbar)||(!rightdum.hpbar)) {
            await timeout(1000);
            continue;
        }
            
        if((dum.hpbar.val<300)||(leftdum.hpbar.val<300)||(rightdum.hpbar.val<300))
        {
            console.log("got dummy1");
            key7.press();
			await anticlockwise(direction)(0,1);
            await checkHP(m,leftdir);
            await same(direction)(0,1);
            await checkHP(m,direction);
            await clockwise(direction)(0,1);
            await checkHP(m,rightdir);
            await same(direction)(0,1);
            key2.press();
            await timeout(500);
        }
        if(brk(1))
        {
            console.log("got dummy3");
            if(!(await repair(1,direction)))
                return -1;
            console.log("fixed!");
            key2.press();
            await timeout(500);
        }
        await timeout(1000);
        
    }
}

export async function hammerTrain(direction="Up") {
    let m=getMob(me)
    hunger();
    console.log(dummy(m.x,m.y,direction));
    let leftdir = anticlockwise(direction,"text");
    let rightdir = clockwise(direction,"text");
    let dum = dummy(m.x,m.y,direction);
    let leftdum = dummy(m.x,m.y,leftdir);
    let rightdum = dummy(m.x,m.y,rightdir);
    await opposite(direction)(0,1)
    await same(direction)(1,1)
    while(item_data[1].slot&&item_data[6].slot)
    {
        
        
        if((!dum.hpbar)||(!leftdum.hpbar)||(!rightdum.hpbar)) {
            await timeout(1000);
            continue;
        }
            
        if((dum.hpbar.val<300)||(leftdum.hpbar.val<300)||(rightdum.hpbar.val<300))
        {
            console.log("got dummy1");
            key7.press();
            await same(direction)(0,1);
			await anticlockwise(direction)(0,1);
            await checkHP(m,leftdir);
            await same(direction)(0,1);
            await checkHP(m,direction);
            await clockwise(direction)(0,1);
            await checkHP(m,rightdir);
            await opposite(direction)(0,1);
            await same(direction)(1,1);
            key2.press();
            await timeout(500);
        }
        if(brk(1))
        {
            console.log("got dummy3");
            if(!(await repair(1,direction)))
                return -1;
            console.log("fixed!");
            key2.press();
            await timeout(500);
        }
        await timeout(1000);
        
    }
}

async function checkHP(m,direction)
{
    while(1)
    {
        let hpbar = dummy(m.x,m.y,direction).hpbar;
        if((hpbar)&&(hpbar.val==hpbar.max))
        {
            return;
        }
        await timeout(1000);
    }
}

function dummy(x,y,direction) {
    let coords;
    switch(direction) {
        case 'Up':
            coords = [x,y-1]
            break;
        case 'Down':
            coords = [x,y+1]
            break;
        case 'Left':
            coords = [x-1,y]
            break;
        case 'Right':
            coords = [x+1,y]
            break;
        default:
            break;
    }
    return map_index[coords[0]+'0'+coords[1]].o[0];
}