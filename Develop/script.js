var currentHour = moment().hour();
var currentDay = document.querySelector("#currentDay");

var showCurrentDay = function() {
    document.querySelector("#currentDay").innerHTML = 
    `
    <p>${moment().format('MMMM Do YYYY, h:mm a')}</p>
    `;
};

showCurrentDay();

// function updateTimeSlotItems() {
//     var duration = Math.ceil(moment.duration(currentHour.diff(moment())).asHours());
//     if (parseInt(duration) < 0) {
//         $(this).next().addClass("past");
//     } else if (parseInt(duration) === 0) {
//         $(this).next().addClass("present");
//     } else {
//         $(this).next().addClass("future");
//     }

//     $(".description").each(function() {
//     var hour = $(this).parent('.time-block').attr('id');
//     var value = localStorage.getItem(hour);
//     $(this).text(value);
//     });
// }

function updateTimeSlotItems() {
    //assign classes (past | present | future)
    var hourBlock = parseInt($(this).attr('id').split('-'));
    $(this).each(function() {
        if (moment() > hourBlock) {
            $(this).addClass("past");
          } else if (moment() < hourBlock) {
              $(this).addClass("future");
              $(this).removeClass("past", "present");
          } else {
              $(this).addClass("present");
              $(this).removeClass("past", "future");
          };
        });
        $(".description").each(function() {
            var hour = $(this).parent('.time-block').attr('id');
            var value = localStorage.getItem(hour);
            $(this).text(value);
        });
};
   

function handleSave(e) {
    var value = $(e.target).siblings('.description').val();
    var hour = $(e.target).parent('.time-block').attr('id');
    console.log(hour, value)
    localStorage.setItem(hour, value)
};

function main() {
    showCurrentDay();
    updateTimeSlotItems();
    // add click event to timeSlots
    $('.saveBtn').on('click', handleSave);
}

$(main);