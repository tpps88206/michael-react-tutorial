/** TodoApp.js */

// 1. 使用元件類別前，記得先從 window.App 中取出
const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;

class TodoApp extends React.Component {
    render() {
        // 2. 組合元件的觀念，與架構 HTML 元素是一樣的
        return (
            <div>
                <TodoHeader />
                <InputField />
                <TodoList />
            </div>
        );
    }
}

window.App.TodoApp = TodoApp;