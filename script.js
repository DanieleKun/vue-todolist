const root = new Vue({
    el : "#app",
    data : {
        newTodo : "",
        todos : [
            {
                text : "Ricordati di respirare",
                done: false
            },
            {
                text : "Studiare",
                done: true
            },
            {
                text : "Andare a mare",
                done: false
            }
        ]
    },
    methods : {
        addItem(){
            //creo nuovo oggetto
            const addTodo = new Object();
            addTodo.text = this.newTodo;
            addTodo.done = true;
            //pusho nuovo oggetto e pulisco input
            if(this.newTodo !== ""){
                this.todos.push(addTodo);
                this.newTodo = "";
            }
        },
        deleteItem(idx){
            this.todos.splice(idx, 1);
        }
    }

});