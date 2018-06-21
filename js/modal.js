const mpopup = document.querySelector('#modal');

// Create modal window
export function createModal() {
    mpopup.hidden = false;

    // close the modal window when user clicks outside of the box
    window.onclick = function (event) {
        if (event.target === mpopup) {
            mpopup.hidden = true;
        }
    };
}
