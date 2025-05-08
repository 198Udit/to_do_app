function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Toggle complete
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete-btn";
  
    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // prevent toggling
      li.remove();
    });
  
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
  }
  
  // Add task on Enter
  document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
  