$(document).ready(function(){
    // BOX 1 BUTTON FUNCTION
    $('#me1').click(function(){
        $(this).css("opacity","0");
    })
    $('#me1').click(function(){
        $('#me2').hide();
    })
    $('#me1').click(function(){
        $('#me3').css("display","block");
    })
    $('#me3').click(function(){
        $('#me1').css("opacity","1");
    })
    $('#me3').click(function(){
        $('#me2').show();
    })
    $('#me3').click(function(){
        $(this).hide();
    })
    $('#me2').click(function(){
        $('.box1').hide();
    })

    // BOX 1 BUTTON FUNCTION
    $('#you1').click(function(){
        $(this).css("opacity","0");
    })
    $('#you1').click(function(){
        $('#you2').hide();
    })
    $('#you1').click(function(){
        $('#you3').css("display","block");
    })
    $('#you3').click(function(){
        $('#you1').css("opacity","1");
    })
    $('#you3').click(function(){
        $('#you2').show();
    })
    $('#you3').click(function(){
        $(this).hide();
    })
    $('#you2').click(function(){
        $('.box2').hide();
    })


    // FRIEND REQUEST
    $('#me1').click(function(){
        $('#you4').css("display","block")
    })
    $('#me1').click(function(){
        $('#you5').css("display","block")
    })
    $('#me1').click(function(){
        $('#you1').hide()
    })
    $('#me1').click(function(){
        $('#you2').hide()
    })
    $('#me3').click(function(){
        $('#you4').hide();
    })
    $('#me3').click(function(){
        $('#you5').hide();
    })
    $('#me3').click(function(){
        $('#you1').show();
    })
    $('#me3').click(function(){
        $('#you2').show();
    })


    $('#you1').click(function(){
        $('#me1').hide();
    })
    $('#you1').click(function(){
        $('#me2').hide();
    })
    $('#you1').click(function(){
        $('#me4').css("display","block")
    })
    $('#you1').click(function(){
        $('#me5').css("display","block")
    })
    $('#you3').click(function(){
        $('#me4').hide();
    })
    $('#you3').click(function(){
        $('#me5').hide();
    })
    $('#you3').click(function(){
        $('#me1').show();
    })
    $('#you3').click(function(){
        $('#me2').show();
    })

// DELETE FRIEND
    $('#you5').click(function(){
        $('.box2').hide();
    })
    $('#me5').click(function(){
        $('.box1').hide();
    })


// CONFIRM
    $('#you4').click(function(){
        $('#me6').css("display","block")
    })
    $('#you4').click(function(){
        $('#me7').css("display","block")
    })
    $('#you4').click(function(){
        $('#me1').hide();
    })
    $('#you4').click(function(){
        $('#me3').hide();
    })



    $('#me4').click(function(){
        $('#you6').css("display","block")
    })
    $('#me4').click(function(){
        $('#you7').css("display","block")
    })
    $('#me4').click(function(){
        $('#you1').hide();
    })
    $('#me4').click(function(){
        $('#you3').hide();
    })

// CONFIRM MESSAGE ME
    $('#me4').click(function(){
        $(this).hide();
    })
    $('#me4').click(function(){
        $('#me5').hide();
    })
    $('#me4').click(function(){
        $('#me6').show();
    })
    $('#me4').click(function(){
        $('#me7').show();
    })



    $('#you4').click(function(){
        $(this).hide();
    })
    $('#you4').click(function(){
        $('#you5').hide();
    })
    $('#you4').click(function(){
        $('#you6').show();
    })
    $('#you4').click(function(){
        $('#you7').show();
    });


// ALERT
    $('#me6').click(function(){
        alert("Coming Soon")
    })
    $('#you6').click(function(){
        alert("Coming Soon")
    })



})