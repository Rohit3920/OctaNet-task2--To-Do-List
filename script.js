console.warn("Octa Net Task No. 2");
console.log("To Do List");

var listGroup = document.getElementById("listGroup");
var inValue = document.getElementById('addTask');
var root = document.querySelector(':root');
const inputStyle = document.getElementById("addTask").style;
const headerStl = document.getElementById("header").style;

function addItem() {
    var task = inValue.value;

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

const defaultMode = () => {
    document.body.style.background = "linear-gradient(#0291ff, #ffc800)"

    root.style.setProperty('--txtColor', 'black');
    root.style.setProperty('--bgColor', 'white');
    root.style.setProperty('--borColor', 'white');
    inputStyle.color = "black"
    inputStyle.caretColor = "black"
    headerStl.backgroundColor = ' rgba(0, 255, 170, 0.404)'
}

const darkMode = () => {
    document.body.style.background = '#000000'
    root.style.setProperty('--txtColor', 'white');
    root.style.setProperty('--bgColor', 'black');
    root.style.setProperty('--borColor', 'white');
    inputStyle.color = "white"
    inputStyle.caretColor = "white"
    headerStl.backgroundColor = 'rgba(0, 0, 0, 0.664)'

}

const lightMode = () => {
    document.body.style.background = '#ffffff'
    root.style.setProperty('--txtColor', 'black');
    root.style.setProperty('--bgColor', 'white');
    root.style.setProperty('--borColor', 'black');
    inputStyle.color = "black"
    inputStyle.caretColor = "black"
    headerStl.backgroundColor = ' rgba(255, 136, 0, 0.45)'

}

defaultMode()