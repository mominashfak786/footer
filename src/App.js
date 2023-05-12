import './App.css';
import Aboutus from "./components/aboutus"
import Contanctus from './components/contanctus';
import Cancellation from './components/cancellation';
import Privacy from "./components/privacy"
import Terms from "./components/terms"
import Packages from './components/packages';
function App() {
  return (
    <>
      <Aboutus />
      <br />
      <br />
      <hr />
      <Contanctus />
      <br />
      <br /><hr />
      <Cancellation />
      <br />
      <br /><hr />
      <Privacy />
      <br />
      <br /><hr />
      <Terms />
      <br />
      <br /><hr />
      <Packages/>
      
    </>
  );
}
export default App;
