console.warn("Octa Net Task No. 2");
console.log("To Do List");


function addItem() {
    var inValue = document.getElementById('addTask');
    var task = inValue.value;

    var listGroup = document.getElementById("listGroup")

    const li = document.createElement("li");
    li.textContent = task;

    const a = document.createElement('a');
    a.textContent = 'X'
    li.appendChild(a)

    const insertFrist = listGroup.firstElementChild;
    if (insertFrist == null) {
        listGroup.appendChild(li)
    } else {
        listGroup.insertBefore(li, insertFrist)
    }

    inValue.value = '';
    inValue.focus()
}

let delBtn = document.querySelector('ul');
delBtn.addEventListener('click', (e) => {
    let listGroup = document.getElementById('listGroup');
    let li = e.target.parentNode;

    listGroup.removeChild(li);
})