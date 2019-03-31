async function addCoords()
{
	m=getMob(me)
	div=document.createElement("div")
	div.id="coords"
	div.style.position="absolute"
	div.style.color="#FFFFFF"
	div.style.top="0px"
	div.style.left="0px"
	div.style.zIndex="2000"
	document.body.appendChild(div)
	setInterval(function(){
		div.innerHTML="<b> "+m.x+","+m.y+" "+jv.map_title.text+"</b>";
	},1000);
}

async function hpmod()
{
	setInterval(function(){
		hp_status.title.text="Health("+hp_status.val+"%)"
	},1000);
}

async function hungermod()
{
	setInterval(function(){
		hunger_status.title.text="Hunger("+hunger_status.val+"%)"
	},1000);
}

async function skillmod()
{
	setInterval(function(){
		if((skill_status.alpha>0)&&(skill_status.title.text[skill_status.title.text.length-1]!=")"))
		{
			skill_status.title.text+="("+skill_status.val+"%)"
		}
	},500);
}

async function allmod()
{
	m=getMob(me)
	div=document.createElement("div")
	div.id="coords"
	div.style.position="absolute"
	div.style.color="#FFFFFF"
	div.style.top="0px"
	div.style.left="0px"
	div.style.zIndex="2000"
	document.body.appendChild(div)
	setInterval(function(){
		hp_status.title.text="Health("+hp_status.val+"%)"
		hunger_status.title.text="Hunger("+hunger_status.val+"%)"
		if((skill_status.alpha>0)&&(skill_status.title.text[skill_status.title.text.length-1]!=")"))
		{
			skill_status.title.text+="("+skill_status.val+"%)"
		}
		div.innerHTML="<b> "+m.x+","+m.y+" "+jv.map_title.text+"</b>";
	},1000);
}