function TodoList () {

    let wrapper = document.createElement("section");
    wrapper.classList.add("d-flex", "flex-column", "align-items-center", "my-5");

    let title = document.createElement("h2");
    title.textContent = "Ma Todo List";
    title.classList.add("mb-4");
    wrapper.appendChild(title);

    let inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "mb-3", "w-50");

    let input = document.createElement("input");
    input.setAttribute("placeholder", "Nouvelle tâche");
    input.classList.add("form-control");
    inputGroup.appendChild(input);

    let boutonWrapper = document.createElement("div");
    boutonWrapper.classList.add("input-group-append");

    let bouton = document.createElement("button");
    bouton.classList.add("btn", "btn-primary");
    bouton.textContent = "Ajouter";
    boutonWrapper.appendChild(bouton);

    inputGroup.appendChild(boutonWrapper);
    wrapper.appendChild(inputGroup);

    let ul = document.createElement("ul");
    ul.classList.add("list-group", "w-50");
    wrapper.appendChild(ul);

    bouton.addEventListener("click", () => {
        if(input.value.trim() !== ""){
            let li = document.createElement("li");
            li.textContent = input.value;
            li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            ul.appendChild(li);
            input.value = "";
        }
    });

    document.body.appendChild(wrapper);
}

TodoList();
