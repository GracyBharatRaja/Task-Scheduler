let scheduledTasks = [];

function scheduleTask() {
  const textInput = document.getElementById("textInput");
  const delayInput = document.getElementById("delayInput");
  const logArea = document.getElementById("logArea");

  const task = textInput.value.trim();
  const delay = parseInt(delayInput.value.trim(), 10);

  if (task === "" || isNaN(delay) || delay < 1) {
    alert("Enter a valid task or delay time (in seconds)");
    return;
  }

  const schedulingMessage = document.createElement("p");
  schedulingMessage.textContent = `⌛ "${task}" has been scheduled to run in ${delay} seconds.`;
  logArea.appendChild(schedulingMessage);

  const executeTask = (taskName) => {
    const doneMsg = document.createElement("p");
    doneMsg.textContent = `✅ Task Completed: ${taskName}`;
    logArea.appendChild(doneMsg);
  };

  const timeoutId = setTimeout(() => {
    executeTask(task);
  }, delay * 1000);

  // Add timer to list so we can cancel later
  scheduledTasks.push({ timeoutId });

  textInput.value = "";
  delayInput.value = "";
}

function clearAllTasks() {
  scheduledTasks.forEach(task => {
    clearTimeout(task.timeoutId);
  });

  scheduledTasks = [];

  const logArea = document.getElementById("logArea");
  logArea.innerHTML = `<p><strong>All tasks cleared.</strong></p>`;
}
