
var allpage = 5;  //總頁數

var pagenum = 1;

var table=new Object();
table.clostable = 
function(){
    for(i=1;i<=allpage;i++){
        var menu=document.getElementById("p"+i); //找到所有清單
        menu.style.display="none";  //關閉
    }
}

function startTime(){
    table.clostable();
    var menu=document.getElementById("p1");
        menu.style.display="block";
}


function next(n){
    table.clostable();
    pagenum+=1;
    if(pagenum>allpage){
        pagenum = allpage;
    }
    var menu=document.getElementById("p"+pagenum);
    menu.style.display="block";

    return pagenum = pagenum;
}


function Previous(n){
    table.clostable();
    pagenum-=1
    if(pagenum<1){
        pagenum = 1;
    }
    var menu=document.getElementById("p"+pagenum);
    menu.style.display="block";

    return pagenum = pagenum;
}

function Table(){
    table.clostable();
    document.getElementById("p1").style.display="block";
    return pagenum = 1;
}

function page(n){
    table.clostable();
    document.getElementById("p"+n).style.display="block";
    return pagenum = n;
}
