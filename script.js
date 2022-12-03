function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')    
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.` 
        img.src = 'manhasemfundo(1).png'
        window.document.body.style.background = '#b9846f'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = 'tardesemfundo(1).png'
        window.document.body.style.background = '#e2cd9f'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = 'noitesemfundo(1).png'
        window.document.body.style.background = '#515154'
    }
}

