import React from 'react';
import "./Blog.css";

const Blog = () => {
  document.title = "Gamarucci | Blog";
  return (
    <main className="BL-main">
      <section className="BL-news">
        <article className="BL-news-item">
          <img src="/images/linkinParkB.png" className="BL-img" />
          <h2 className="BL-title">"LINKIN PARK ANUNCIA GIRA MUNDIAL 'FROM ZERO'"</h2>
          <p className="BL-paragraph">
            Linkin Park regresa a los escenarios con el lanzamiento de su esperado álbum <b>'From Zero'</b> programado para salir al mercado el próximo 15 de noviembre
            con once canciones inéditas de la banda de rock alternativo junto a sus nuevos integrantes: la vocalista <b>Emily Armstrong</b> y el baterista <b>Colin Brittain</b>.
          </p>
        </article>
        <article className="BL-news-item">
          <img src="/images/marilynMansonB.png" className="BL-img" />
          <h2 className="BL-title">"MARILYN MANSON EN VIVO X EL ROCK: LA BESTIA DEL ROCK PESADO EN PERÚ"</h2>
          <p className="BL-paragraph">
            Uno de los artistas más controvertidos en la historia del rock encabezará la próxima edición de Vivo x el Rock. Tras años de controversias, acusaciones legales,
            mitos musicales y una carrera marcada por la provocación, Marilyn Manson está de regreso.
          </p>
        </article>
        <article className="BL-news-item">
          <img src="/images/nirvanaB.png" className="BL-img" />
          <h2 className="BL-title">"NIRVANA: UNA GUITARRA DESTROZADA POR KURT COBAIN FUE SUBASTADA POR 600.000 DÓLARES"</h2>
          <p className="BL-paragraph">
            La guitarra, que está restaurada pero es inservible como instrumento musical, partía con una estimación entre 60.000 dólares y 80.000 dólares y se disparó hasta 
            596.900 después de una treintena de pujas, indica la empresa.
          </p>
        </article>
        <article className="BL-news-item">
          <img src="/images/acdcB.png" className="BL-img" />
          <h2 className="BL-title">"ACDC: EL ÁLBUM BACK IN BLACK ALCANZA LAS 27 MILLONES DE COPIAS VENDIDAS EN USA"</h2>
          <p className="BL-paragraph">
            Este pasado 21 de agosto de 2024, el álbum Back In Black alcanzó un nuevo hito al ser certificado de la Asociación de la Industria Discográfica de América (RIAA) 
            por haber distribuido 27 millones de copias en los Estados Unidos. Esto lo convierte en el tercer álbum más vendido en la historia de Estados Unidos.
          </p>
        </article>
        <article className="BL-news-item">
          <img src="/images/metallicaB.png" className="BL-img" />
          <h2 className="BL-title">"'LA CHONA METALERA': EL TRIBUTO DE METALLICA A UNA POPULAR CANCIÓN MEXICANA"</h2>
          <p className="BL-paragraph">
            Metallica ofreció este viernes 20 de Septiembre el primero de cuatro conciertos programados en el Estadio GNP Seguros, en Ciudad de México, como parte de su gira
            <b>M72 World Tour</b>. La banda estadounidense, que no pisaba suelo Azteca desde el 2017, sorprendió a miles de espectadores de tierras Mexicanas.
          </p>
        </article>
        <article className="BL-news-item">
          <img src="/images/RamnsteinB.png" className="BL-img" />
          <h2 className="BL-title">"RAMNSTEIN: EL VOCALISTA TILL LINDEMANN, LANZÓ VERSIÓN DE 'ENTRE DOS TIERRAS', DE HÉROES DEL SILENCIO"</h2>
          <p className="BL-paragraph">
            Tras varios días de espera y luego de haber enfrentado acusaciones de abuso sexual, el cantante alemán publicó su propia versión de 'Entre dos Tierras', 
            tema emblemático de la banda de rock española Héroes del Silencio.
          </p>
        </article>
        <article className="BL-news-item">
          <img src="/images/thePoliceB.png" className="BL-img" />
          <h2 className="BL-title">"STING LA ICÓNICA VOZ DE 'THE POLICE' LLEGARÁ A LIMA EN 2025 CON SU GIRA MUNDIAL"</h2>
          <p className="BL-paragraph">
            El exvocalista de The Police regresa a Lima después de 14 años desde su último concierto en la ciudad. El aclamado músico británico se presentará en Costa
            21 en un show imperdible programado para el 2025, gracias a <b>Radio Oxígeno</b>. La preventa inicia el 25 de Septiembre en Teleticket.
          </p>
        </article>
        <article className="BL-news-item">
          <img src="/images/greenDayB.png" className="BL-img" />
          <h2 className="BL-title">"¿GREEN DAY EN LIMA? TODO LO QUE SE SABE DE SU POSIBLE PARTICIPACIÓN EN EL VIVO X EL ROCK"</h2>
          <p className="BL-paragraph">
            La posible presentación de <b>Green Day</b> en Perú se inició luego que Carlos Orozco revelara en su programa de YouTube los fuertes rumores que existen
            sobre la integración de la banda norteamericana en la lista de grupos confirmados para el <b>Vivo x el Rock 2025</b>.
          </p>
        </article>
        <article className="BL-news-item">
          <img src="/images/systemOfaDowB.png" className="BL-img" />
          <h2 className="BL-title">"SYSTEM OF A DOWN VUELVE A LOS ESCENARIOS"</h2>
          <p className="BL-paragraph">
            System of a Down, una de las bandas más emblemáticas del metal, se presentó el pasado 27 de abril en <b>Las Vegas Festival Grounds</b> como parte del Festival
            Sick New World 2024. La última ocasión en que la banda actuó en España fue en el <b>Download Festival</b> en el año 2017.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Blog;
