// โจทย์สำหรับทำ program To Do List
//      1. สามารถ Add todo ได้ โดยพิมพ์คำว่า - "new"
//          พอ "new" แล้ว ใส่ข้อความปุ๊บให้มันบอกว่า add to the list แล้ว
//      2. สามารถ List all todo (เพิ่มข้อมูลใน array) ได้ โดยพิมพ์คำว่า - "list"
//          list ทั้ง index และ item ออกมาดู
//      3. สามารถ Remove specific todo (ระบุ index ได้) ได้ โดยพิมพ์คำว่า - "delete"
//          ถ้าใส่มั่วต้องเด้งให้กรอก index ใหม่
//      4. สามารถ Quit app ได้ โดยพิมพ์คำว่า - "quit"

let input = prompt("What would you like to do ?")
const todo = []
// if new >> input todo
// if list >> list todo
// if delete >> put index
// if quit >> quit loop
// all actions need to print it's successfully


while (input != 'quit') {

    if (input == 'new') {
        let newTodo = prompt("What is the new todo ?")
        if (newTodo != null) {
            todo.push(newTodo)
            console.log("Item has been added.");
        } else {
            newTodo = prompt("Please enter the new todo ?")
        }

    } else if (input == 'list') {
        if (todo.length > 0) {
            for (const listTodo of todo) {
                console.log(`${todo.indexOf(listTodo)} : ${listTodo}`);
            }
        } else {
            alert("The list is empty")
        }

    } else if (input == 'delete') {
        let delTodo = Number(prompt("Which item to delete ?"))
        // หรือจะแปลง value ที่เค้า input ให้เป็น number ก่อนก็ได้ ทีนี้ถ้าค่าที่เค้าใส่มาไม่ใช่ตัวเลข มันจะเป็น NaN
        if (!Number.isNaN(delTodo)) {
            todo.splice(delTodo,1)
            console.log("Item has been deleted.");
        } else {
            delTodo = prompt("Please enter index to delete ?")
            if (!Number.isNaN(delTodo)) {
                todo.splice(delTodo,1)
                console.log("Item has been deleted.");
            }
        }

    } else {
        break;

    }
    
    input = prompt("What would you like to do ?")

}

alert("You quit, thank you!")

