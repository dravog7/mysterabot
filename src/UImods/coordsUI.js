export async function textMods()
{
	let compass=jv.text("",{font:"10px Verdana",fill:16777215,stroke:6710886,strokeThickness:1})
	jv.add(compass)
	function run(){
		
		hp_status.title.text=`Health(${hp_status.val.toLocaleString()}%)`

		hunger_status.title.text=`Hunger(${hunger_status.val.toLocaleString()}%)`

		exp_status.title.text=`Experience(${exp_status.val.toLocaleString()}%)`

		if((skill_status.alpha>0)&&(skill_status.title.text[skill_status.title.text.length-1]!=")"))
		{
			skill_status.title.text+=`(${skill_status.val.toLocaleString()}%)`
		}
		
		try{
		compass.text=""+getMob(me).x+","+getMob(me).y+" "+jv.map_title.text+"";
		}catch(e){};
		requestAnimationFrame(run);
	};
	run();
}