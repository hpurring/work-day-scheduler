var now = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().hour();
var currentDay = document.querySelector("#currentDay");

var showCurrentDay = function() {
    document.querySelector("#currentDay").innerHTML = 
    `
    <p>${moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    `;
};

showCurrentDay();

function updateTimeSlotItems() {
    //assign classes (past | present | future)

    $("time-block").each(function() {
        if (moment().isBefore(currentHour)) {
            $("time-block").addClass("past");
          } else if (moment().isAfter(currentHour)) {
              $("time-block").addClass("future");
              $("time-block").removeClass("past", "present");
          } else {
              $("time-block").addClass("present");
              $("time-block").removeClass("past", "future");
          };
    });
};
   
    

    //read relevant local storage data (about the relevant hour slot)

function handleSave(e) {
    var hour = $(e.target).siblings('.description').val();
    var value = $(e.target).siblings('.description').val().trim();
    localStorage.setItem(hour, value);
};

function main() {
    $("#currentDay").text(moment().format('dddd, LL'));
    updateTimeSlotItems();
    // add click event to timeSlots
    $(document).on('click', '.save-btn', handleSave);
}

main();