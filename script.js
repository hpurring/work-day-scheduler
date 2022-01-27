var currentHour = moment().hour();
var currentDay = document.querySelector("#currentDay");

// show current day
var showCurrentDay = function() {
    document.querySelector("#currentDay").innerHTML = 
    `
    <p>${moment().format('MMMM Do YYYY, h:mm a')}</p>
    `;
};

showCurrentDay();

// determine whether time slots are in the past, present, or future
function updateTimeSlotItems() {
    $(".time-block").each(function() {
        var hourBlock = parseInt($(this).attr('id').split('-')[1]);
        if (moment().hour() > hourBlock) {
            $(this).addClass("past")
            $(this).removeClass("present", "future");
          } else if (moment().hour() < hourBlock) {
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
   
// add and save text to time slots
function handleSave(e) {
    var value = $(e.target).siblings('.description').val();
    var hour = $(e.target).parent('.time-block').attr('id');
    console.log(hour, value)
    localStorage.setItem(hour, value)
};

// start the app: show current day and update time slots
function main() {
    showCurrentDay();
    updateTimeSlotItems();
    // add click event to timeSlots
    $('.saveBtn').on('click', handleSave);
}

// launch
$(main);