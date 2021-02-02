import NavBar from './Components/NavBar';
import NavBar1 from './Components/NavBar1';
import{connect} from "react-redux";
import './App.css';
const App = ({auth}) => {
  // console.log("app.js auth : ",auth);
  const isAuthenticated = auth.isAuthenticated;
  return (
    <div>
      {isAuthenticated ?<NavBar1 /> :  <NavBar /> }
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth : state.auth,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);