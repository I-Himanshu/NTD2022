let DATA = [
    {
        title:"Thor - Son Of Odin",
        
    }
]

$(document).ready(()=>{
    let textCon = $(".textCon");
    var i = 0;
    $(".next").click(function(){
        $(this).parent().parent().slideToggle(40)
        textCon.html(i++)
        $(this).parent().parent().slideToggle(1000)
    })
})