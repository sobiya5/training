import { useNavigate } from "react-router-dom";

function Header() {
    const loginstatus = sessionStorage.getItem("loginstatus");
    const role = sessionStorage.getItem("role");
    const navigate = useNavigate();

    const logout = (lg) => {
        lg.preventDefault();
        sessionStorage.removeItem("loginstatus");
        sessionStorage.removeItem("role");
        navigate("/login");
    }


  return (
    <div className="container">
        <div className="ui large menu" style={{backgroundColor : 'silver'}}>
          <h1 className="right menu" style={{color : 'blue'}}>Book Information System</h1>
            <div className="right menu">
              { loginstatus ?
                <div className="item">
                 <button onClick={logout} className="ui primary button secondary">Logout</button> <br/>
                </div> : <div></div>

                }
            </div>
        </div>
    </div>
  )
};
export default Header;