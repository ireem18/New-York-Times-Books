import App from "../App";
import Book from "./Book";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component = {App} exact />
            <Route path ="/book/:rank" component = {Book} />
        </Switch>
    </BrowserRouter>
)

export default Router;