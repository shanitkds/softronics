const todoInput = $("#todo-input");
const todoContainer = $("#conTainer");
const form = $("#form");




form.submit((e) => {
    e.preventDefault();

    const todoText = todoInput.val().trim();

    if (todoText === "") {
        alert("Please write something.");
        return;
    }
    todoInput.val("");

   
    const li = $("<li>");
    const edit =$('<button>');
    const del =$('<button>');
    const div1 =$("<div>");
    const toggle =$("<button>");



    
    div1.addClass("d-flex align-items-center justify-content-between gap-2 my-2 p-3 bg-light border rounded shadow-sm")

    li.text(todoText);
    li.addClass("list-unstyled flex-grow-1 m-0")

    edit.text("Edit")
    edit.addClass("btn btn-warning btn-sm")

    del.text("Delete")
    del.addClass("btn btn-danger btn-sm");


    toggle.text("Completed")
    toggle.addClass("btn btn-success btn-sm")

    div1.append(li, edit, del, toggle);
    todoContainer.append(div1);

    // Toggle complete
    toggle.click(() => {
        if (li.css("text-decoration").includes("line-through")){
            li.css("color","red")
            li.css("text-decoration","")
            toggle.text("Completed")
            toggle.addClass("btn btn-success btn-sm");
        } else {
            li.css("text-decoration" ,"line-through")
            li.css("color","gray");
            toggle.text("Pending")
            toggle.addClass("btn btn-secondary btn-sm")
        }
    });

    
    edit.click( () => {
        const liText = li.text();
        li.detach();
        edit.detach();  
        del.detach();
        toggle.detach();

        const editInput = $("<input>");
        editInput.val(liText)
        editInput.addClass("form-control")

        const save =$("<button>");
        save.text("Save")
        save.addClass("btn btn-primary btn-sm")

        const cancel =$("<button>");
        cancel.text("Cancel");
        cancel.addClass("btn btn-secondary btn-sm");

        save.click(() => {
            li.text(editInput.val());
            editInput.remove();
            save.remove();
            cancel.remove();
            div1.append(li, edit, del, toggle);
        });

        cancel.click(() => {
            editInput.remove();
            save.remove();
            cancel.remove();
            div1.append(li, edit, del, toggle);
        });

        div1.append(editInput, save, cancel);
    });

    
    del.click(() => {
        div1.remove();
    });
});
                                                                                                                                                        
