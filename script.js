console.warn("Octa Net Task No. 2");
console.log("To Do List");


function addItem() {
    var inValue = document.getElementById('addTask');
    var task = inValue.value;
    console.log(task);

    var listGroup = document.getElementById("listGroup")

    const li = document.createElement("li");
    li.textContent = task;



    const insertFrist = listGroup.firstElementChild;
    if(insertFrist == null){
        listGroup.appendChild(li)
    }else{
        listGroup.insertBefore(li, insertFrist)
    }

    inValue.value = '';
    inValue.focus()
}