async function addDataToDom() {
const get = await getData();
get.forEach((x) => {
  //create DOM elements
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  const input = document.createElement("input");
  const dltBtn = document.createElement("button");
  const completeBtn = document.createElement("button");

  //Adding ID's & Classes
  input.setAttribute("id", "input");
  dltBtn.setAttribute("id", "dltBtn");
  completeBtn.setAttribute("id", "completeBtn");
  dltBtn.classList.add("dltBtn");
  completeBtn.classList.add("completeBtn");

  //Adding DOM elements dynamicaly
  ul.appendChild(li);
  li.appendChild(input);
  li.appendChild(dltBtn);
  li.appendChild(completeBtn);
  input.value = x.description;
  
  //Adding icons to the buttons
  completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  dltBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';

  //Adding complete message
  completeBtn.addEventListener("click", (e) => {
    const completeMsg = document.getElementById("completeMessage");
    completeMsg.classList = "fade";
    completeMsg.innerHTML = "GOOD JOB! ✓";
    completeMsg.style.color = "#1b2450";
    setTimeout(hideCompleteMsg, 4000);
    function hideCompleteMsg() {
      completeMsg.innerHTML = "";
    };
  });

  //Adding complete buttton line-through functionality with PUT
  const changedId = completeBtn.id;
  completeBtn.addEventListener("click", (e) => {
    const input = document.getElementById("input");
    input.classList.add('textDecoration');
    const changedData = {description: completeBtn.description.classList("textDecoration") , done: true};
    async function changeTask() {
      const change = await putData(changedId, changedData);
    }
    const ul = document.getElementById("ul");
    ul.innerHTML = "";
    changeTask();
    addDataToDom();
  });
});

  //Delete single ToDo's from ToDo list/Api
  get.forEach((x) => {
  const dltBtn = document.getElementById("dltBtn");
  dltBtn.id = x._id;
  dltBtn.addEventListener("click", (e) => {
    const dltTaskId = e.target.id;
    async function deleteDataFromApi() {
      const dlt =  await deleteData(dltTaskId);
    };
    deleteDataFromApi();
  const ul = document.getElementById("ul");
  ul.innerHTML = "";
  addDataToDom();
  });
  });

  //Delete all ToDo's from ToDo list/Api
  const dltAllBtn = document.getElementById("clearAllBtn");
  dltAllBtn.addEventListener("click", () => {
    const confirmed = confirm("Are you sure? This will empty your To-Do list.");
    if (confirmed) {
      get.forEach((x) => {
      dltAll = x._id;
      async function deleteDataFromApi() {
      const dlt =  await deleteData(dltAll);
      }
    deleteDataFromApi();
  });
    const ul = document.getElementById("ul");
    ul.innerHTML = "";
    addDataToDom();
  };
  });

  //Empty add ToDo form and cursor focus
  const addForm = document.getElementById("addTodo");
  addForm.value = "";
  addForm.focus(); 
};

addDataToDom();

//Post ToDo data to Api
const submitBtn = document.getElementById("add-task-btn");
submitBtn.addEventListener("click", function (e) {
  if (document.getElementById("addTodo").value) {
  const formText = document.getElementById("addTodo").value;
  const postTodo = {description: formText, done: false};
    async function postDataToApi() {
      const post = await postData(postTodo);
    };
    postDataToApi();
  };
});