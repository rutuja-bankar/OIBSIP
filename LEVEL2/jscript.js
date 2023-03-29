document.querySelector('#add').onclick = function () {
    if (document.querySelector('#addtask input').value.length == 0) {
        alert("Please Enter Task You want to add!!")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
           <span id="taskname">
               ${document.querySelector('#addtask input').value}
           </span>
           <button class="delete" >Remove
              <i class="far  fa-trash-alt"></i>
           </button>
        </div>
        `;
        var current_task = document.querySelectorAll(".delete");
        for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
                this.parentNode.remove();

            }
        }
    }

}
