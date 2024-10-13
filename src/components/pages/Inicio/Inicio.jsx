
import Carousel from "./Banner"
import "./Inicio.css"

const Inicio = () => {

    document.title = "Gamarucci"

  return (
    <div>
        <section id="home" class="banner">
            <h1>Bienvenido a Gamarucci</h1>
            <p style={{width: "50%", margin: "auto"}}>Los mejores polos de tus bandas favoritas, en un solo lugar. En Gamarucci, nos apasiona ofrecerte una selección exclusiva de ropa que refleja tu estilo y tus gustos musicales.</p>
        </section>
       <Carousel/>
        <section id="products" class="products-section">
            <h2 className="TituloI">Nuestros Polos Destacados</h2>
            <div class="products-grid">
                <div class="product-card" data-aos="fade-down">
                    <img src="/images/Des1.webp" alt="Polo Deftones" />
                    <p>Un polo con el logo clásico de la banda.</p>
                </div>
                <div class="product-card" data-aos="fade-up">
                    <img src="/images/Des2.webp" alt="Polo Ac/Dc" />
                    <p>AC/DC - Campanas del Infierno 1980</p>
                </div>
                <div class="product-card" data-aos="fade-down">
                    <img src="/images/Des3.webp" alt="Polo Nirvana" />
                    <p>Nirvana - Happy Face - Camiseta</p>
                </div>
                <div class="product-card" data-aos="fade-up">
                    <img src="/images/Des4.webp" alt="Polo FF" />
                    <p>Foo Fighters - Camiseta</p>
                </div>
                <div class="product-card" data-aos="fade-down">
                    <img src="/images/Des5.webp" alt="The Green day" />
                    <p>Green Day - Chaqueta</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Inicio