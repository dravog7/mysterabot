async function setup()
{
    document.getElementById("start").addEventListener("click",change);
}setup();

async function calculate(curr,currb,reqb)
{
    currxp=xp(curr)-xp(currb*10);
    currxp-=currb*20000;
    currxp=currxp/(Math.pow(1.11,currb-reqb))
    currxp+=reqb*20000;
    currxp+=xp(reqb*10);
    lvlr=lv(currxp);
    lvlr=Math.max((reqb*10)+1,lvlr);
    if(currb==0)
    {
        lvlr=Math.max(curr+1,lvlr);
    }
    return lvlr;
}

async function change()
{
    curr=Number(document.getElementById("curr").value);
    currb=Number(document.getElementById("currb").value);
    reqb=Number(document.getElementById("reqb").value);
    console.log(curr+":"+currb+":"+reqb);
    a=calculate(curr,currb,reqb);
    a.then((re)=>{
        document.getElementById("req").innerText=re;
    })
    a.catch((error)=>{
        document.getElementById("req").innerText=error.message;
    });
    
}
function xp(x)
{
    //xp for 0-x lvls
    terms = [
        6.9302902183792335e-004,
       -5.3199742494683470e+001,
        1.2690830413461089e+001,
        1.5803703442302053e-001,
        1.5863104392389255e-001,
       -3.9434485302005670e-003,
        7.0346945956044880e-005,
       -7.9626401082190794e-007,
        5.3993990063864736e-009,
       -1.9614457569568425e-011,
        2.8339281767728352e-014
   ];
   r=0;
   t=1;
   for(i=0;i<10;i++)
   {
       r+=terms[i]*t;
       t*=x;
   }
    return r;
}

function lv(xp)
{
a=[1, 1, 1, 37.22, 158.89, 349.8, 625.91, 1004.92, 1506.09, 2149.99, 2958.38, 3954.03, 5160.64, 6602.66, 8305.3, 10294.37, 12596.24, 15237.82, 18246.48, 21650.02, 25476.68, 29755.07, 34514.19, 39783.39, 45592.42, 51971.34, 58950.59, 66560.96, 74833.58, 83799.94, 93491.89, 103941.63, 115181.7, 127245.02, 140164.84, 153974.78, 168708.8, 184401.2, 201086.64, 218800.1, 237576.89, 257452.67, 278463.39, 300645.31, 324035.01, 348669.33, 374585.44, 401820.74, 430412.91, 460399.89, 491819.88, 524711.3, 559112.81, 595063.3, 632601.88, 671767.88, 712600.84, 755140.52, 799426.88, 845500.08, 893400.51, 943168.77, 994845.65, 1048472.17, 1104089.59, 1161739.38, 1221463.24, 1283303.12, 1347301.21, 1413499.96, 1481942.05, 1552670.47, 1625728.43, 1701159.45, 1779007.3, 1859316.03, 1942129.96, 2027493.67, 2115451.99, 2206050.02, 2299333.03, 2395346.54, 2494136.22, 2595747.88, 2700227.42, 2807620.8, 2917973.97, 3031332.79, 3147742.97, 3267250.0, 3389899.01, 3515734.71, 3644801.24, 3777142.03, 3912799.66, 4051815.73, 4194230.61, 4340083.31, 4489411.25, 4642250.0];

//binary search a for xp
return binary_search(a,xp);
}

function binary_search(arr, x) { 
   
    var start=0, end=arr.length-1,mid; 
    while (start<=end){ 
  
        mid=Math.floor((start + end)/2); 
        if (arr[mid]===x) return mid; 
        else if (arr[mid] < x)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return mid; 
}