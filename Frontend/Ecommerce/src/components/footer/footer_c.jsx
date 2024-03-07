import './footer.css';

function footer_c() {
  return (
    <>
      <footer>
        <div className='row'>
            <div className='col'>
                <img className='icon_enterprise' src='https://cdn-icons-png.flaticon.com/512/12251/12251640.png'></img>
                <p>Retro Games Project</p>
            </div>
            <div className='col'>
                <h5>Nuestras Redes Sociales</h5>
                <img className='icon_redes' src="https://cdn-icons-png.flaticon.com/512/2168/2168281.png"></img>
                <img className='icon_redes' src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"></img>
                <img className='icon_redes' src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png"></img>
            </div>
            <div className='col'>
                <h5>Sobre Nosotros</h5>
                <h6>Misión y Visión</h6>
                <h6>Nuestros Valores</h6>
                <h6>Libro de Reclamaciones</h6>
                <h6>Acuerdo de Privacidad del Consumidor</h6>
                
            </div>
        </div>
        <div className='row'>
            <h6>@RetroGamesProject by Miguel Alonso Guillen Medina</h6>
        </div>
      </footer>
    </>
  );
}

export default footer_c;