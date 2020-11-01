$("li").click(function(){

    let Running=$(".RUNNING");
    let Cardio=$(".Cardio");
    let Box=$(".Box");
    let Body=$(".Body");
    let Crossfit=$(".Crossfit");
    let Yoga=$(".Yoga");
    
    let src = this.id;
    if(src=="All")
    {
       Running.fadeIn(400);
       Cardio.fadeIn(400);
       Box.fadeIn(400);
       Body.fadeIn(400);
       Crossfit.fadeIn(400);
       Yoga.fadeIn(400);
    }
    else if (src=="Running")
    {
        Cardio.fadeOut(400);
        Box.fadeOut(400);
        Body.fadeOut(400);
        Crossfit.fadeOut(400);
        Yoga.fadeOut(400);
        Running.fadeIn(400);
    }
    else if (src=="Cardio")
    {
        
        Box.fadeOut(400);
        Body.fadeOut(400);
        Crossfit.fadeOut(400);
        Yoga.fadeOut(400);
        Running.fadeOut(400);
        Cardio.fadeIn(400);
    }

    else if (src=="Box")
    {
        Body.fadeOut(400);
        Crossfit.fadeOut(400);
        Yoga.fadeOut(400);
        Running.fadeOut(400);
        Cardio.fadeOut(400);
        Box.fadeIn(400);
    }

    else if (src=="Body")
    {

        Crossfit.fadeOut(400);
        Yoga.fadeOut(400);
        Running.fadeOut(400);
        Cardio.fadeOut(400);
        Box.fadeOut(400);
        Body.fadeIn(400);
    }

    else if (src=="Crossfit")
    {
        Yoga.fadeOut(400);
        Running.fadeOut(400);
        Cardio.fadeOut(400);
        Box.fadeOut(400);
        Body.fadeOut(400);
        Crossfit.fadeIn(400);
    }

    else if (src=="Yoga")
    {
       
        Running.fadeOut(400);
        Cardio.fadeOut(400);
        Box.fadeOut(400);
        Body.fadeOut(400);
        Crossfit.fadeOut(400);
        Yoga.fadeIn(400);
    }
});

function colorWhite(selector)
{
    $(selector).css("background-color","white");
}
