import "./Login.css"
import Logo from "../../assets/logo.svg"


const Login = () => {
    return (
        <div id="login_container">

            
            <form id="login_form">
               
            <img src={Logo} alt="logo" id="logo"/>
                <div className="input_group">
                    <label>Kullanıcı Adı</label>
                    <input type="text" id="username" placeholder="Kullanıcı Adı"/>

                </div>
                <div className="input_group">
                    <label>Şifre</label>
                    <input type="password" id="password" placeholder="Şifre"/>
                </div>

                <button type="submit" id="submit">
                    Giriş
                </button>

            </form>
        </div>
    )
}

export default Login