import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { CreateBlog } from "./CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BlogDetail } from "./BlogDetail";
import { NotFound } from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/createblog">
              <CreateBlog />
            </Route>
            <Route path="/blog/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
