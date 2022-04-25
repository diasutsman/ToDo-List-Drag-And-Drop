class TodoElements {
    static todoItem(todo) {
        return new DOMParser().parseFromString(
            `
            <p id="${todo.id}" title="Drag me!" class="text-center" draggable=true ondragstart="drag(event)">${todo.task}</p>
        `,
            "text/html"
        ).firstElementChild.lastElementChild.firstChild
    }

    static todoNotFound = `
    <div class="position-relative" style = "height: 100%;">
        <div class="position-absolute top-50 start-50 translate-middle fs-6 fw-bold">No Todo</div>
    </div>
    `

    static ongoingNotFound = `
    <div class="position-relative" style = "height: 100%;">
        <div class="position-absolute top-50 start-50 translate-middle fs-6 fw-bold">No On Going</div>
    </div>
    `

    static completedNotFound = `
    <div class="position-relative" style = "height: 100%;">
        <div class="position-absolute top-50 start-50 translate-middle fs-6 fw-bold">No Completed</div>
    </div>
    `

}