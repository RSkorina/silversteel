var root = document.body

const HelloWorld = {
    view: () =>  {
        return m("main", [
            m("h1", {class: "title"}, "My first app"),
            m("button", "A button"),
        ])
    }
};

// Render the component to the #app element
m.mount(root, HelloWorld);