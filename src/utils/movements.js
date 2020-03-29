import {timeout,tog} from "./basics.js";


export function targetme(id)
{
    send({
        type: "t",
        t: id
    })
}


export async function drop(slot,amt)
{
    send({
        type: 'd',
        slot: slot,
        amt :amt,
    })
    await timeout(getMob(me).cur_speed);
}



export async function Up(ctrl,steps)
{
    tog(keyUp);
    if(ctrl==1)
    {
        tog(keyCtrl);
        steps=1;
    }
    await timeout(getMob(me).cur_speed*steps);
    tog(keyUp);
    if(ctrl)
        tog(keyCtrl);
    await timeout(getMob(me).cur_speed);
}

export async function Down(ctrl,steps)
{
    tog(keyDown);
    if(ctrl==1)
    {
        tog(keyCtrl);
        steps=1;
    }
    await timeout(getMob(me).cur_speed*steps);
    tog(keyDown);
    if(ctrl)
        tog(keyCtrl);
    await timeout(getMob(me).cur_speed);
}

export async function Left(ctrl,steps)
{
    tog(keyLeft);
    if(ctrl==1)
    {
        tog(keyCtrl);
        steps=1;
    }
    await timeout(getMob(me).cur_speed*steps);
    tog(keyLeft);
    if(ctrl)
        tog(keyCtrl);
    await timeout(getMob(me).cur_speed);
}

export async function Right(ctrl,steps)
{
    tog(keyRight);
    if(ctrl==1)
    {
        tog(keyCtrl);
        steps=1;
    }
    await timeout(getMob(me).cur_speed*steps);
    tog(keyRight);
    if(ctrl)
        tog(keyCtrl);
    await timeout(getMob(me).cur_speed);
}

export async function Space()
{
    tog(keySpace);
    await timeout(100);
    tog(keySpace);
}

let directions = ["Up","Right","Down","Left"];
let keydirections = [keyUp,keyRight,keyDown,keyLeft];
let funcdirections = [Up,Right,Down,Left];

export function same(direction,type='function') {
    if(type=='function'){
        return funcdirections[directions.indexOf(direction)]
    }
    else if(type == 'key'){
        return keydirections[directions.indexOf(direction)]
    }
    else {
        return direction;
    }
}

export function opposite(direction,type="function") {
    if(type=='function'){
        return funcdirections[(directions.indexOf(direction)+2)%4]
    }
    else if(type == 'key'){
        return keydirections[(directions.indexOf(direction)+2)%4]
    }
    else {
        return directions[(directions.indexOf(direction)+2)%4]
    }
}

export function clockwise(direction,type="function") {
    if(type=='function'){
        return funcdirections[(directions.indexOf(direction)+1)%4]
    }
    else if(type == 'key'){
        return keydirections[(directions.indexOf(direction)+1)%4]
    }
    else {
        return directions[(directions.indexOf(direction)+1)%4]
    }
}

export function anticlockwise(direction,type='function') {
    if(type=='function'){
        return funcdirections[(directions.indexOf(direction)+3)%4]
    }
    else if(type == 'key'){
        return keydirections[(directions.indexOf(direction)+3)%4]
    }
    else {
        return directions[(directions.indexOf(direction)+3)%4]
    }
}