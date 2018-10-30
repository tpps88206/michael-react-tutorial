// 1. 新增一個繼承 React.Component 的子類別
class TodoApp extends React.Component {
    // 2. 必須實作 render 方法：
    //    透過該方法回傳的元素，讓 React 瞭解要如何繪製該元件在頁面上
    render() {
        return (<div>TodoApp</div>);
    }
}

// 3. 將元件類別 (TodoApp) 定義在 window.App 下：
//    這可以讓其他 JS 檔使用該元件類別
window.App.TodoApp = TodoApp;