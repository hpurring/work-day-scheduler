var now = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().hour();
var currentDay = document.querySelector("#currentDay");

var showCurrentDay = function() {
    document.querySelector("#currentDay").innerHTML = 
    `
    <p>${moment().format('MMMM Do YYYY, h:mm a')}</p>
    `;
};

showCurrentDay();

function updateTimeSlotItems() {
    //assign classes (past | present | future)
    for (let i = 0; i < 9; i++) {
    $(".time-block").each(function() {
        if (moment().isBefore(currentHour)) {
            $(".time-block").addClass("past");
          } else if (moment().isAfter(currentHour)) {
              $(".time-block").addClass("future");
              $(".time-block").removeClass("past", "present");
          } else {
              $(".time-block").addClass("present");
              $(".time-block").removeClass("past", "future");
          };
        });
        $(".description").each(function() {
            var hour = $(this).parent('.time-block').attr('id');
            var value = localStorage.getItem(hour);
            $(this).text(value);
        });
    };
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