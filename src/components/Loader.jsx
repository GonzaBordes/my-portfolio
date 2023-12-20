

function Loader() {

  setTimeout(function() {
    const loader = document.querySelector('.loader')
    loader.classList.add('closed');
  }, 1200);

  return (
    <div className="loader">
        <div className="overflow-box">
            <span className="loader-title">Transformando ideas en experiencias</span>
        </div>        
    </div>
  )
}

export default Loader