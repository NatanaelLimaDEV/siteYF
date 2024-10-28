import './button-contato.css'

type Text = {
    text: React.ReactNode;
}

function ButtonContato({text}: Text) {
    return (
        <button className='bt-contato' type='button'>
            {text}
        </button>
    )
}

export default ButtonContato