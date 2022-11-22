$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


    function currentTime() {
        //current time 
        var presentTime = moment().hour();

        
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

           
            if (blockTime < presentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === presentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    
    $(document).ready(function () {
        // Btn lister
        $(".saveBtn").on("click", function () {
            
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
    
            // Save in local storage
            localStorage.setItem(time, text);
        })


    // obtaining items from local storage if applicable
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour13"));
    $("#hour2 .description").val(localStorage.getItem("hour14"));
    $("#hour3 .description").val(localStorage.getItem("hour15"));
    $("#hour4 .description").val(localStorage.getItem("hour16"));
    $("#hour5 .description").val(localStorage.getItem("hour17"));

    currentTime();
})