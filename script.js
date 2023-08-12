console.warn("Octa Net Task No. 2");
console.log("To Do List");

var listGroup = document.getElementById("listGroup");
var inValue = document.getElementById('addTask');


function addItem() {
    var task = inValue.value;
    console.log(task.length);

    if (task.length == 0) {
        alert("Please enter task in the given feild");
    } else {
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
    }

    inValue.value = '';
    inValue.focus()

    document.getElementById("count").innerHTML = listGroup.childElementCount;
}

let delBtn = document.querySelector('ul');
delBtn.addEventListener('click', (e) => {
    let listGroup = document.getElementById('listGroup');
    let li = e.target.parentNode;

    listGroup.removeChild(li);
    document.getElementById("count").innerHTML = listGroup.childElementCount;
})

const clearAll = () => {
    listGroup.innerHTML = '';
    document.getElementById("count").innerHTML = listGroup.childElementCount;
}

inValue.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});


function menu() {
    const menuList = document.getElementById('menu-list');

    menuList.classList.toggle('hide')

}