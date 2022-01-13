import Footer from "./components/Footer"
import VisibleTodoList from "./containers/VisibleTodoList"
import AddTodo from "./containers/AddTodo"

const AppRedux = () => (
    <>
        <h1>App de Redux</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </>
)

export default AppRedux
