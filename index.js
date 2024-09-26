const display=document.getElementById("display")
let timer=null;
let startTime=0;
let str_end=0;
isRunning=false;

function start()
{
    if(!isRunning)
    {
        startTime=Date.now()-str_end;
        timer=setInterval(update,10);
        isRunning=true;
    }
}

function stop()
{
    if(isRunning)
    {
        clearInterval(timer);
        str_end=Date.now()-startTime
        isRunning=false
    }

}
function reset()
{
    clearInterval(timer )
    startTime=0;
    str_end=0;
    isRunning=false;
    display.textContent=`00:00:00:00`;

}
function update()
{
    const currentTime=Date.now();
    str_end=currentTime-startTime;

    let hours=Math.floor(str_end/ (1000*60*60));
    let min=Math.floor(str_end/ (1000*60) %60);
    let sec=Math.floor(str_end/ 1000%60);
    let ms=Math.floor(str_end% 1000/ 10); 
         
    hours=String(hours).padStart(2,"0")
    min=String(min).padStart(2,"0")
    sec=String(sec).padStart(2,"0")
    ms=String(ms).padStart(2,"0")

    display.textContent = `${hours}:${min}:${sec}:${ms}`;
}
