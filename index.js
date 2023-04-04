// Selects all the arrows in the html file. 
// Adds a toggle click to rotate the arrow
// Only rotates the arrow if arrow is clicked not the summary section
document.querySelectorAll('.arrow').forEach((arrow) => arrow.addEventListener("click", () => {
arrow.classList.toggle('rotate')
}))