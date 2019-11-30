function wallbreak(x,y){
	loc= x+"0"+y;
	b=jv.text("",{font:"10px Verdana",fill:16777215,stroke:6710886,strokeThickness:1});
	jv.add(b);
	rate=0;
	old=map_index[loc].o[0].hpbar.val;
	window.e=setInterval(function(){
		newv=map_index[loc].o[0].hpbar.val;
		rate=rate*0.5+0.5*(old-newv);
		m=new Date()
		m.setHours(0,0,newv/rate,0)
		b.text="time left:"+m.toTimeString();
		old=newv;
	},1000);
}