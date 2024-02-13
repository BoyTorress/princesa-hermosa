import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [textP, setTextP] = useState('Vamos, respondeme! ')
    const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif')

    const options = ['Segura Amorcito?', 'Segurisima?', 'Estas completamente segura?', 'Me voy a enojar nadia', 'Yapooo amor dime que si:(', 'Por favor hazlo por el teo', 'Yo se que si quieres:)', 'te quiero muchito bb', 'YA DIME QUE SIIII ', 'Me voy a poner a llorar', 'Me haces feliz pon que si:(']

    const handleButtonNo = () => {
        setIndex(index + 1)
        setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif')
        setTextP(options.at(index))
        
        if(index === options.length - 1) setIndex(0)
    }

    const handleButtonYes = () => {
        setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif")
        setTextP('Gracias por aceptar, te quiero mucho <3')
        confetti()
    }

    return { handleButtonNo, handleButtonYes, textP, image }
}
