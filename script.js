const moveRightBtn = document.getElementById("move-right");
const moveLeftBtn = document.getElementById("move-left");
const leftList = document.getElementById("left-list");
const rightList = document.getElementById("right-list");
moveRightBtn.addEventListener("click", () => {
    moveItems(leftList, rightList);
});
moveLeftBtn.addEventListener("click", () => {
    moveItems(rightList, leftList);
});
function moveItems(fromList, toList) {
    const selectedItems = fromList.querySelectorAll("input:checked");
    selectedItems.forEach(item => {
        const parentLi = item.parentElement;
        item.checked = false; 
        toList.appendChild(parentLi); 
    });
}
