//your JS code here. If required.
function removeColor() {
  const select = document.getElementById("colorSelect");
  // get selected index
  const selectedIndex = select.selectedIndex;

  // if a valid option is selected
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}
