inputs=$$("input[type='hidden']");
inputs[1].value=$$("content[jsslot]")[1].innerText;
opts=document.getElementsByClassName("freebirdFormviewerViewItemsRadioOptionContainer");
for(i=2;i<=6;i++)
{
	inputs[i].value=opts[(i-2)*5];
}
document.getElementsByTagName("form")[0].submit();