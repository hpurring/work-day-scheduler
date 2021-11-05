var now = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentDay = document.querySelector("#currentDay");

var showCurrentDay = function() {
    document.querySelector("#currentDay").innerHTML = 
    `
    <p>${moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    `;
};

showCurrentDay();

function updateTimeSlotItems() {
    if (moment().isAfter(now)) {
        
      } else {

      };
   
    //assign classes (past | present | future)

    //read relevant local storage data (about the relevant hour slot)
}

function handleSave(e) {
    var hour = $(e.target).siblings('.description').val();
    var value = $(e.target).siblings('.description').val().trim()
}

function main() {

    updateTimeSlotItems();

    // add click event to timeSlots

    document.addEventListener('.save-btn', handleSave)
}
