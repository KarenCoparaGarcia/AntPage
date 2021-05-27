import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import MenuSelecction from "./components/MenuSelecction";
import MenuApp from "./components/MenuApp";
import Razas from "./pages/Razas";
import RazasM from "./pages/RazasM";
import RazasG from "./pages/RazasG";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Guia from "./pages/Guia";
import CarouselModel from "./components/CarouselModel";
import HeaderModel from "./components/HeaderModel";
import Tables from "./components/Tables";
import Opiniones from "./pages/Opiniones";
const { Header, Content, Sider } = Layout;
function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Header>
            <HeaderModel />
          </Header>
          <Layout>
            <Sider>
              <MenuApp />
            </Sider>
            <Layout>
              <MenuSelecction />
              <Content className="content">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/Guia" exact component={Guia} />
                  <Route path="/RazasPequeñas" component={Razas} />
                  <Route path="/RazasMedianas" component={RazasM} />
                  <Route path="/RazasGrandes" component={RazasG} />
                  <Route path="/Login" component={Login} />
                  <Route path="/Comentarios" component={Opiniones} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}
//redireccionar a la página principal
const Home = () => (
  <div>
    <CarouselModel />
    <hr></hr>
    <Tables />
  </div>
);
export default App;
