import React from "react"
import Api from "../../Api"
import './login.css'

export default ({onReceive}) => {

    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup()
        if(result) {
            onReceive(result.user)
        }
        else {
            alert("Erro!")
        }
    }

    return(
        <div className="login">  
            <button className="login--button" onClick={handleFacebookLogin}> Login com o Facebook </button>
        </div>
    )
}