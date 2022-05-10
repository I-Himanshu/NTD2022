let DATA = [
    {
        title: "Drone",
        description: "A drone is a flying robot that can be remotely controlled or fly autonomously using software-controlled flight plans in its embedded systems, that work in conjunction with onboard sensors and a global positioning system (GPS). UAVs were most often associated with the military",
        image: "dronefly.gif"
    },
    {
        title: "Artificial Intelligence",
        description: "Artificial Intelligence refers to a field in which machine are taught to think like humans, it is the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. Artificial intelligence examples include Face ID, the search algorithm, and recommendation algorithm",
        image: "aimind.gif"
    }
]

$(document).ready(() => {
    let textCon = $(".textCon");
    var i = 0;
    $("*").css("transform","rotate(360deg)")
    $(".next").click(function () {
        $(".textCon").slideToggle(1200)
        $(".imgCon").slideToggle(400)
        $(".control").fadeToggle(200)
        $(".thumbnail").attr("src", DATA[i].image)
        textCon.html(DATA[i++].description)
        if(i == DATA.length) {i=0;}
        
        $(".textCon").slideToggle()
        $(".imgCon").slideToggle()
        $(".control").fadeToggle(300)

        $(this).parent().parent()
    })
    $(".next").click()

})
