keyG=jv.keyboard(71);
async function craft(){
    while(keyG.isUp){
        jv.build_dialog.info.use.on_click();
        await timeout(250);
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
m=getMob(me)
async function craftsorter(f,to){
    //remove unruned
    for(i=f;i<=to;i++)
    {
        if(/[\*]/.test(item_data[i].n))
        {
            continue;
        }
        await drop(i,1);
    }
}

async function equip(i) {
    send({
        type: "u",
        slot: i
    });
    await timeout(250);
}

async function pickupall() {
    while(!item_data[74].slot)
    {
        keyShift.press();
        await timeout(200);
    }
}

async function advsorter(type,f,t)
{
	last=jv.chat_box.lines.length;
	await timeout(1000);
	for(i=f;i<=t;i++)
	{
		if(!item_data[i].slot)
		{
			continue;
		}
		await equip(i);
		//capture text
		await timeout(1000);
		tex=""
		for(j=jv.chat_box.lines.length-1;j>last;j--)
		{
			if((/((You hold)|(You equip)|(You wear))/.test(jv.chat_box.lines[j].text)))
			{
				last=j;
				tex=jv.chat_box.lines[j].text;
				break;
			}
		}
		let a=tex.match(/Ancient\(([0-9]+)\)/);
		let r=tex.match(/Radiant\(([0-9]+)\)/);
		let s=tex.match(/Stained\(([0-9]+)\)/);
		let h=tex.match(/Humming\(([0-9]+)\)/);
		let g=tex.match(/Glowing\(([0-9]+)\)/);
		a=(a)?Number(a[1]):0;
		r=(r)?Number(r[1]):0;
		s=(s)?Number(s[1]):0;
		h=(h)?Number(h[1]):0;
		g=(g)?Number(g[1]):0;
		console.log(tex);
		console.log(a+" "+r+" "+s+" "+h+" "+g);
		let q=major(a,r,s,h,g);
		console.log(q);
		if(q==type)
		{
			await drop(i,1);
		}
		
	}
}

function major(a,r,s,h,g)
{
	let arr=["a","r","s","h","g"];
	let vals=[a,r,s,h,g];
	let maxi=vals.reduce((q,w)=>{return Math.max(q,w);},-1)
	if(maxi==-1)
		return "";
	return arr[vals.indexOf(maxi)];
}

function single(a,r,s,h,g)
{
	let arr=["a","r","s","h","g"];
	let vals=[a,r,s,h,g];
	let m=-1;
	for(let i=0;i<5;i++)
	{
		if((m>=0)&&(vals[i]!=0))
			return -1;
		if(vals[i]>0)
		{
			m=i;
			continue;
		}
	}
	return arr[m];
	
}

async  function cleanup(f,t)
{
	for(let i=f;i<=t;i++)
	{
		if(!item_data[i].slot) continue;
		await drop(i,1);
		await timeout(250);
	}
}