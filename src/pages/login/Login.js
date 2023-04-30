import "./Login.css"
import Logo from "../../assets/logo.svg"
import { getDB, panelLogin } from "../../firebase/db"
import { useState } from "react"





const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div id="login_container">

            
            <form id="login_form" onSubmit={(e) => panelLogin(e,username, password)}>
               
            <img src={Logo} alt="logo" id="logo"/>
                <div className="input_group">
                    <label>Kullanıcı Adı</label>
                    <input type="text" id="username" placeholder="Kullanıcı Adı" value={username} onChange={(e) => setUsername(e.target.value)}/>

                </div>
                <div className="input_group">
                    <label>Şifre</label>
                    <input type="password" id="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" id="submit">
                    Giriş
                </button>

            </form>
        </div>
    )
}

export default Login