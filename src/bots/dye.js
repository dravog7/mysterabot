//dye
import {timeout,clicker} from "../utils/basics.js";
import {drop} from "../utils/movements.js";

//slot 0-bucket,
//slot 2 - weed,
//slot 1- anything
export async function dye()
{
	let m = getMob(me);
	while(item_data[2].slot)
	{
		key1.press();
		await timeout(300);
		await clicker();
		await timeout(300);
		await drop(0,1);
		await drop(2,1);
		keyShift.press();
	}
}
