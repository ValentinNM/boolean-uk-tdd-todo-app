const { verify } = require("crypto")
const todoApp = require("../src/todoApp")

describe("Todo App",() => {


    // manual teardown
    beforeEach(() => {
        console.log("in the beforeEach\n")
        todoApp.id = 0 // reseting the id for validatin the
                    // create many todos SPEC 
        todoApp.todos = [] // reseting the todos for create new todo
    
    })                 


    it("creates a to do item", () => { 

        //setup
        const expected = { 
            id: 1, text: "make pizza", status: "incomplete"
        }

        //execute
        expect(todoApp.create("make pizza")).toEqual(expected)


        //verify

    } )


    it("creates many todo items", () => { 

        // setup
        const item1 = todoApp.create("make bread")
        const item2 = todoApp.create("make time")
        
        //execute 
        expect(item1.id).toEqual(1)
        expect(item2.id).toEqual(2)
        
        // verify
    })
    
    it("shows all todos", () => { 
        
        //setup
        // const item1 = todoApp.create("make bread")
        // const item2 = todoApp.create("make time")
        todoApp.create("plain")
        todoApp.create("text")

        const todos = todoApp.showAll()

        const expected = [
            {
                    id: 1,
                    text: "plain",
                    status : "incomplete"
            },
            {
                    id: 2,
                    text: "text",
                    status : "incomplete"
            }
        ]

        //execute

        //verify
        expect(todos).toEqual(expected)

        // expect(item1.id).toEqual(1)
        // expect(item2.id).toEqual(2)
        
    })


    it("turns an incomplete into a completed todo and display it", () => { 
        
        //setup
        const todo1 = {
            id: 1,
            text: "five",
            status : "incomplete"
            }

        todoApp.create("test")
        // todoApp.create("test2")
        // todoApp.create("test3")
        
        const expected =
        // [
            {
                    id: 1,
                    text: "test",
                    status : "complete"
            }
            // {
            //         id: 2,
            //         text: "test2",
            //         status : "complete"
            // }
            // {
            //         id: 1,
            //         text: "test3",
            //         status : "incomplete"
            // }
        // ]
        //execute

        // verify

        // expect(todo1.status).toEqual(expected[0].status)
        expect(todoApp.setCompleted(1)).toEqual(expected)
    })

        it("only shows the incompleted todos", () => { 

        //setup

        todoApp.create("map")
        todoApp.create("map2")
        todoApp.create("map3")

        const todos = todoApp.showIncompleted()

        const expected = [
        // {
        //     id: 1,
        //     text: "map",
        //     status : "complete"
        // },
        {
            id: 2,
            text: "map2",
            status : "incomplete"
        },
        {
            id: 3,
            text: "map3",
            status : "incomplete"
        }
    ]
        //execute

        //verify
    // expect(todoApp.showIncompleted()).toEqual(expected)
    expect(todos).toEqual(expected)
    })
    
})