$(document).ready(function(){
    var picPosition = 0;
    
    $('.photoDisplayBottom').click(function(){
        var imgsrc = $(this).children('img').attr('src');
        $('#imgTarget').attr('src', imgsrc);
    });
    $('.photoPrevious').click(function(){
        var firstpicPosition = $('#photo1').position().left;
        var imgsrcPrevious = $('#imgTarget').attr('src');
        var imgsrc = imgsrcPrevious.substring(0,12);
        var pic = parseInt(imgsrcPrevious.substring(12,imgsrcPrevious.length-4)) - 1;
        if (pic <= 0){
            pic = 1;
            alert("This is the First Picture!");
        }
   	    imgsrc = imgsrc + pic + "." + imgsrcPrevious.split('.')[1];
        $('#imgTarget').attr('src', imgsrc);
        var picid = '#photo'+pic;
        picPosition = ($(picid).position().left) - firstpicPosition;
        $('#photoContainer').animate({scrollLeft:picPosition},800);  
    })
    $('.photoNext').click(function(){
        var firstpicPosition = $('#photo1').position().left;
        var imgsrcNext = $('#imgTarget').attr('src');
        var imgsrc = imgsrcNext.substring(0,12);
        var pic = parseInt(imgsrcNext.substring(12,imgsrcNext.length-4)) + 1;
   	    imgsrc = imgsrc + pic + "." + imgsrcNext.split('.')[1];
        try{
            $('#imgTarget').attr('src', imgsrc);
            var picid = '#photo'+pic;
            picPosition = ($(picid).position().left) - firstpicPosition;
            $('#photoContainer').animate({scrollLeft:picPosition},800);  
        }
        catch (err){
            pic = pic - 1;
            imgsrc = imgsrcNext.substring(0,12) + pic + "." + imgsrcNext.split('.')[1];
            $('#imgTarget').attr('src', imgsrc);
            alert("This is the last picture!");
        }
    })
    
});