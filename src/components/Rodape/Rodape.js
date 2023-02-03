import './Rodape.css'

export const Rodape = () => {
    return (
        <footer className='rodape-pagina'>
            <div className='container'>
                <div className='social'>
                    <a href='https://www.facebook.com/AluraCursosOnline' target="_blank" rel="noreferrer">
                        <img src='/images/fb.png' alt='Facebook' />
                    </a>
                    <a href='https://twitter.com/aluraonline' target="_blank" rel="noreferrer">
                        <img src='/images/tw.png' alt='Facebook' />
                    </a>
                    <a href='https://www.instagram.com/aluraonline' target="_blank" rel="noreferrer">
                        <img src='/images/ig.png' alt='Facebook' />
                    </a>
                </div>
                <div className='logo'>
                    <img src='/images/logo.png' alt="oregano" />
                </div>
                <div className='creditos'>
                    <p>Desenvolvido por <a href='https://stsmuniz.tech' target='_blank' rel="noreferrer">@stsmuniz</a>.</p>
                </div>
            </div>
        </footer>
    )
}