function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clicker(){
    jv.build_dialog.info.use.on_click();
	console.log("knit!");
	await timeout(500);
}

function checkstatus(rege)
{
	for(i=0;i<effect_container.children.length;i++)
	{
		a=effect_container.children[i].text;
		if(a)
		{
			if(rege.test(a))
				return true;
		}
	}	
	return false;
}

async function knit()
{
	await clicker();
	while(item_data[1].slot&&item_data[2].slot&&keyEnter.isUp)
	{
		while(!checkstatus(/Finished/))
		{
			await timeout(500);
		}
		console.log("Finished!");
		await clicker();
	}
}
f=knit();