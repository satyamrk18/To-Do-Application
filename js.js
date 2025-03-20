<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>to do list</title>
  </head>
  <body>
    <h1>TO DO LIST</h1>
    <input type="text" class="input-box" />
    <select id="priority-container">
      <option value="high">high</option>
      <option value="medium">medium</option>
      <option value="low">low</option>
    </select>
    <button class="btn" onclick="addTask()">add task</button>

    <script>
      let tasks = [];

      function addTask() {
        const inputElement = document.getElementById("input-box");
        const priorityElement = document.getElementById("priority-container");

        const newTask = {
          task: inputElement.value,
          priority: priorityElement.value || "medium"
        };
        tasks.push(newTask);
        localStorage.setItem("task", JSON.stringify(tasks));
      }
    </script>
  </body>
</html>
