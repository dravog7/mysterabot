async function assa()
{
    while(keyG.isDown==0)
    {
		
        await Left(0,1);
        while(!checkchat(/(pieceofcake)/,13260))
            await timeout(1000);
        await Right(0,1);
        await Up(0,1);
        if(brk(1))
        {
            await repair(1);
            key4.press();
            await timeout(500);
            key2.press();
            await timeout(Up(0,1));
        }
		for(i=0;(i<121)&&(keyG.isDown==0);i++)
		{
			await timeout(1000);
		}
		console.log("done")
    }
}