/* Javascript File for the Goals Page
*
* This file serves to:
* 1. Open and close the week modal
* 2. Other miscellaneous javascript functions
*/

/* Open and close the week modal using dialog */

const openWeekView = document.querySelector("#week-view");
const weekView = document.querySelectorAll(".weeks li");
const closeWeekView = document.querySelector("#close-week-view");

weekView.forEach(week => {
    week.addEventListener("click", () => {
        openWeekView.showModal();
    });
});

closeWeekView.addEventListener("click", () => {
    openWeekView.close();
});