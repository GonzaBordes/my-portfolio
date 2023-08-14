import './footer.css'

function Footer() {
    return ( 
        <>  
            <footer data-scroll-section >
                <div data-scroll className="container">
                    <span>© Gonzalo Bordes All rights reserved</span>
                    <span >{new Date().getFullYear()}</span>
                    <span>Sitio inspirado en <a target={"blank"} href="https://www.weareteller.com/">weareteller</a></span>
                </div>   
            </footer>
        </>
        
     );
}

export default Footer;