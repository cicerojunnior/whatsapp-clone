import React from "react"

import './ChatIntro.css'
import LockIcon from '@mui/icons-material/Lock'

export default () => {
    return (
        <div className="chatIntro">
            <img src="https://comofazerfacil.com.br/wp-content/uploads/2022/08/como-abrir-dois-ou-mais-whatsapp-web-no-mesmo-computador-ou-notebook-510x403.jpg.webp" alt="" />
            <h1>WhatsApp Web</h1>
            <h2>Envie e receba mensagens sem precisar manter seu celular conectado a internet.<br/>
            Use o WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo.</h2>
            <div className="chatIntro--lock">
                <LockIcon style={{fontSize: '12px'}} />
                Protegido com criptografia de ponta a ponta
            </div>
        </div>
    )
}