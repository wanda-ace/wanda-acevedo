const listaProyectos = [
  // ----------------------------------------------------
  // MARCAS / COMERCIAL
  // ----------------------------------------------------
  {
    id: "com-brkv",
    categoria: "comercial",
    portadaImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500",
    publicaciones: [
      {
        idPub: "brkv-p1",
        año: "2025",
        titulo: "BRKV Co-Living Platform",
        tags: ["Branding", "UX/UI", "AI Tools"],
        descripcionES: "<p>Diseño de interfaz de usuario en Figma y assets promocionales globales adaptados siguiendo estrictamente las brand guidelines de la firma internacional para su lanzamiento en el mercado europeo.</p>",
        descripcionEN: "<p>User interface design in Figma and global promotional assets adapted strictly following the international firm's brand guidelines for its European market launch.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800">'
      }
    ]
  },
  {
    id: "com-techround",
    categoria: "comercial",
    portadaImg: "portada-techround",
    publicaciones: [
      {
        idPub: "tech-p1",
        año: "2025 - 2026",
        titulo: "TechRound UK",
        tags: ["medio digital especializado en tecnología"],
        descripcionES: `
          <p>**TechRound UK** es un medio digital de Inglaterra especializado en startups, emprendimiento, tecnología, innovación y negocios.</p>
          <p>Me desempeño en la producción y edición de contenido audiovisual a partir de noticias, artículos editoriales, entrevistas y contenido generado por usuarios (UGC), adaptado a múltiples formatos y plataformas, incluyendo YouTube y redes sociales. Mis responsabilidades incluyen <b>edición de audio y video</b>, <b>diseño gráfico</b> y <b>motion graphics</b>, trabajando en coordinación con el equipo editorial y colaboradores externos para desarrollar piezas alineadas con la identidad visual y con los objetivos editoriales del medio.</p>
          <div style="font-family: Google Sans, sans-serif; font-size: 16px; font-weight: 500; color: #000; margin-top: 30px; margin-bottom: 15px;">Contenido vertical:</div>
        `,
        descripcionEN: `
          <p>TechRound UK is a UK-based digital publication covering startups, entrepreneurship, technology, innovation, and business news.</p>
          <p>I produce and edit audiovisual content based on editorial articles, interviews, and user-generated content (UGC), adapting each piece for YouTube and social media. My responsibilities include <b>video and audio editing</b>, <b>graphic design</b>, and <b>motion graphics</b>, working closely with the editorial team and external collaborators to create engaging content aligned with the publication's editorial and visual identity.</p>
          <div style="font-family: Google Sans, sans-serif; font-size: 16px; font-weight: 500; color: #777; margin-top: 30px; margin-bottom: 15px;">Vertical content:</div>
        `,
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 40px; width: 100%;">
              <!-- Bloque Shorts (3 por línea) -->
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/O7dU0xT7YEw" title="TechRound Short 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/_Tq3gjhd2OE" title="TechRound Short 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/FBe_Ksg5--I" title="TechRound Short 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/wV34QG5qjLw" title="TechRound Short 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/MFsCDMDu5WM" title="TechRound Short 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/oyP4odWkCqQ" title="TechRound Short 6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/YRBSJyLF5YA" title="TechRound Short 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="width: 100%;"></div>
                  <div style="width: 100%;"></div>
              </div>

              <div style="font-family: Google Sans, sans-serif; font-size: 16px; font-weight: 500; color: #000; margin-top: 10px; border-top: 1px solid #eee; padding-top: 25px;">Videos informativos para youtube:</div>
              
              <!-- Bloque Informativos (2 por línea) -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/WowYXubbMtA" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/_sGjf7GJjg8" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/wOOaKOwpO4o" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/r-J_NXz301M" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/USTK72RWMAQ" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/f-TDSwcsogM" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/eo-LhjINVt0" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/y9hRbtiPLng" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/33JjFWKUaQY" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/zuUQ4Z7Ct_U" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/fO6fOBACI38" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/K0eAF-hlPuo" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/mtml-Et1uec" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/Pce02ol_tbQ" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/CZ_Vd1e9Ei0" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/-w9tehv60vY" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/afQcrd_VGwk" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/-Zva9himJf8" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/AmGqnZXe7p8" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/KxutngZA_0Q" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/h2gt1HD9utE" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/L4lbD00L-_0" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/3jL5N-PQPho" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/cogTsEs8K7E" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/42-bXIPD31I" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/qejv2-4Xqwc" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/FGhetvSkX5U" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/MKPsTYhSJug" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/h4o6ZnnsYWo" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/wX4MvAZISE0" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/AnycEnTfX4A" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/l8T3wMMGl9Q" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/lhy456D4Z40" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/rDMj6h4Pwlk" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/sbJeGPmqyrk" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/Z0znUPwhKfE" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/KUg5vKrJQlw" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/NsOQMRFb_w8" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/LG4VA1XH6Dg" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/GHfmjGnFQy4" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/eFp3zzSFTcg" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/z_db6YLPA18" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/lx7wGDNjQjM" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/-p5r_2oXluE" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/koD0ZTkg_hA" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="width: 100%;"></div>
              </div>

              <div style="font-family: Google Sans, sans-serif; font-size: 16px; font-weight: 500; color: #000; margin-top: 10px; border-top: 1px solid #eee; padding-top: 25px;">Entrevistas / Charlas:</div>

              <!-- Bloque Entrevistas (2 por línea) -->
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/RYV9A4SUyyU" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/iSywkYaPlLU" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/8fc3dDvUJ_k" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/CVNUVpW9IbA" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/niU5fjsgmic" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/vflO-CfVVxc" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/lNgtJLepXbg" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/a6yKkOmFq24" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/_FhXRepsieA" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/-JpxmBGP7IE" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/1EXNorJFwrw" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="width: 100%;"></div>
              </div>
          </div>
        `
      }
    ]
  },
  {
    id: "com-cosecha",
    categoria: "comercial",
    portadaImg: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500",
    publicaciones: [
      {
        idPub: "cos-p1",
        año: "2025",
        titulo: "La Cosecha - Hotelería Digital",
        tags: ["Short Form", "Branding", "Color Grading"],
        descripcionES: "<p>Postproducción visual adaptada a formatos móviles verticales enfocada en generar engagement orgánico y retención de audiencia en el nicho de turismo de lujo.</p>",
        descripcionEN: "<p>Visual postproduction adapted to vertical mobile formats focused on driving organic engagement and audience retention in the luxury tourism niche.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800">'
      }
    ]
  },
  {
    id: "com-flakka",
    categoria: "comercial",
    portadaImg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500",
    publicaciones: [
      {
        idPub: "flak-p1",
        año: "2024",
        titulo: "Flakkaboem Live Sessions",
        tags: ["Motion Graphics", "Short Form", "Color Grading"],
        descripcionES: "<p>Sincronización de múltiples cámaras en set, corrección de color de estilo cinematográfico y curaduría de fragmentos de alto impacto para distribución multiplataforma.</p>",
        descripcionEN: "<p>Multi-camera synchronization on set, cinematic-style color correction, and curation of high-impact snippets for cross-platform digital distribution.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800">'
      }
    ]
  },
  // ----------------------------------------------------
  // AUDIOVISUAL
  // ----------------------------------------------------
  {
    id: "aud-memoria",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-memoria.png",
    publicaciones: [
      {
        idPub: "aud-mem-p1",
        año: "2023",
        titulo: "memoria",
        tags: ["animación experimental"],
        descripcionES: "<p>“memoria” es un proyecto de animación resultado de una experimentación de diferentes técnicas audiovisuales: fotografía, imagen en movimiento, dibujos en papel y digitales. Fue realizado para la Universidad de Buenos Aires en el marco de los 40 años de Democracia en Argentina.</p>",
        descripcionEN: "<p>“memoria” is an animation project resulting from experimentation with various audiovisual techniques: photography, moving images, and both paper and digital drawings. It was produced for the University of Buenos Aires in the context of the 40th anniversary of democracy in Argentina.</p>",
        mediaHTML: '<iframe src="https://www.youtube.com/embed/_fNHM4maVpA" title="memoria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  {
    id: "aud-moyo",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-moyo.png",
    publicaciones: [
      {
        idPub: "aud-moyo-p1",
        año: "2023",
        titulo: "Moyo",
        tags: ["cortos de animación 2D"],
        descripcionES: `
          <p>Proyecto de animación 2d que mezcla técnicas de dibujo en papel con dibujo digital.</p>
          <div style="font-family: Google Sans, sans-serif; font-size: 15px; font-weight: 300; color: #000; margin-top: 25px;">Proceso de construcción:</div>
        `,
        descripcionEN: `
          <p>2D animation project blending paper-based drawing techniques with digital drawing.</p>
          <div style="font-family: Google Sans, sans-serif; font-size: 15px; font-weight: 300; color: #777; margin-top: 25px;">Construction process:</div>
        `,
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                  <iframe src="https://www.youtube.com/embed/1_h0tL3hrfA" title="Moyo Video 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                  <iframe src="https://www.youtube.com/embed/e0nDvOtpPjM" title="Moyo Video 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%; margin-top: 15px;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/-K0N8nFII5Y" title="Proceso 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/BC_WIf5bPTQ" title="Proceso 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/oUgn8nPFbTo" title="Proceso 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
          </div>
        `
      }
    ]
  },
  {
    id: "aud-cero-nueve",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-cero-nueve.png",
    publicaciones: [
      {
        idPub: "aud-cero-p1",
        año: "2023",
        titulo: "cero, nueve",
        tags: ["video experimental"],
        descripcionES: "<p>Interpretación audiovisual de un sueño.</p>",
        descripcionEN: "<p>Audiovisual interpretation of a dream.</p>",
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000; margin-bottom: 25px;">
              <iframe src="https://www.youtube.com/embed/jHQmMj2uQmo" title="cero, nueve" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-urdimbre-morfologias",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-urdimbre.png",
    publicaciones: [
      {
        idPub: "aud-urdimbre-p1",
        año: "2022",
        titulo: "urdimbre: morfologías e identidad en el espacio público",
        tags: ["video experimental"],
        descripcionES: `
          <p>"Urdimbre" es un collage audiovisual desarrollada durante 2022 junto a Delfina Di Giacomo. Explora las líneas, los recorridos y las formas que configuran el espacio público. El proyecto surge de una inquietun por observar las morfologías de la ciudad e imaginar las lógicas que subyacen a su organización.</p>
          <p>A partir del tránsito reiterado por los mismos espacios urbanos, la obra dirige su mirada hacia los no-lugares: ámbitos de circulación donde la identidad individual se diluye en el flujo constante de personas. La infraestructura urbana y sus trazados conducen nuestros desplazamientos a través de recorridos aparentemente mecánicos, que por momentos parecen abrir la posibilidad de ser interrumpidos o transformados.</p>
          <p><b>Exhibiciones</b></p>
          <p>2022 – <a href="https://www.instagram.com/muestramagma/" target="_blank">Muestra MAGMA</a>, Centro Hipermediático Experimental Latinoamericano (<a href="https://chela.org.ar/" target="_blank">CHELA</a>), Buenos Aires, Argentina.</p>
          <p>2024 – <a href="https://thesibarist.com/es/magazine/asi-fue-la-inauguracion-de-pensar-la-ciudad/" target="_blank">Pensar la Ciudad</a>, The Sibarist, Madrid, España.</p>
        `,
        descripcionEN: `
          <p>"Urdimbre" is an audiovisual collage developed throughout 2022 in collaboration with Delfina Di Giacomo. It explores the lines, pathways, and forms that shape public space. The project emerged from a fascination with the city's morphologies and a desire to imagine the hidden logics underlying its organization.</p>
          <p>Through the repeated experience of moving through the same urban environments, the work turns its attention to non-places: spaces of circulation where individual identity becomes diluted within the continuous flow of people. The city's infrastructure and network of lines guide our movements along seemingly mechanical paths that occasionally reveal the possibility of disruption and transformation.</p>
          <p><b>Exhibitions</b></p>
          <p>2022 – <a href="https://www.instagram.com/muestramagma/" target="_blank">MAGMA Exhibition</a>, Latin American Experimental Hypermedia Center (<a href="https://chela.org.ar/" target="_blank">CHELA</a>), Buenos Aires, Argentina.</p>
          <p>2024 – <a href="https://thesibarist.com/es/magazine/asi-fue-la-inauguracion-de-pensar-la-ciudad/" target="_blank">Pensar la Ciudad</a>, The Sibarist, Madrid, Spain.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/GC83fCLqHPs" title="Urdimbre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Imágenes:</div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/urdimbre-01.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/urdimbre-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-entre-las-dos",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-entre-las-dos.png",
    publicaciones: [
      {
        idPub: "aud-entre-p1",
        año: "2022",
        titulo: "entre las dos",
        tags: ["corto ficcional experimental"],
        descripcionES: `
          <p>"Entre las Dos" es un corto realizado en el marco de la materia Iluminación y Cámara 2 (Cátedra Valansi) de la carrera de Diseño de Imagen y Sonido de la Universidad de Buenos Aires (UBA). En este proyecto me desempeñé como <b>directora</b> y <b>diseñadora de iluminación</b>.</p>
        `,
        descripcionEN: `
          <p>“Entre las Dos” is a short film developed as part of the Lighting and Camera 2 course in the Image and Sound Design career at the University of Buenos Aires (UBA). For this project, I worked as the <b>director</b> and <b>lighting designer</b>.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/okDMsnwzYII" title="Entre las Dos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Backstage:</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-04.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-05.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-06.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-la-grulla",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-la grulla.png",
    publicaciones: [
      {
        idPub: "aud-grulla-p1",
        año: "2022",
        titulo: "la grulla",
        tags: ["docu-ficción"],
        descripcionES: `
          <p>La Grulla es mi abuela. Desde la productora Doña Mutante realizamos este proyecto con el objetivo de construir un retrato íntimo de su espiritualidad y su templanza en el contexto de una ciudad sonora, invasiva y constantemente agitada.</p>
          <p>Más que presentar ese entorno como un conflicto o una fuente de incomodidad, el retrato pone el foco en la manera en que ella habita ese espacio a través de sus rituales cotidianos.</p>
        `,
        descripcionEN: `
          <p>La Grulla is my grandmother. Produced by Doña Mutante, this project aims to create an intimate portrait of her spirituality and inner strength within the context of a noisy, intrusive, and constantly bustling city.</p>
          <p>Rather than portraying this environment as a source of conflict or discomfort, the portrait focuses on the way she inhabits it through her daily rituals, revealing a quiet coexistence between her inner world and the city's relentless rhythm.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/ey6VMglwguY" title="La Grulla" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Backstage:</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-albores",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-albores.png",
    publicaciones: [
      {
        idPub: "aud1-p1",
        año: "2023",
        titulo: "albores",
        tags: ["docu-ficción"],
        descripcionES: `
          <p>Trabajé como <b>directora</b>, <b>montajista</b> y <b>diseñadora de sonido</b> de "Albores", un cortometraje de docu-ficción estrenado en diciembre de 2023 en el Festival de Cortos de Amorina Cine Bar, un espacio dedicado a la exhibición del cine independiente argentino que reúne a realizadores y realizadoras emergentes.</p>
        `,
        descripcionEN: `
          <p>I worked as the <b>director</b>, <b>editor</b>, and <b>sound designer</b> of "Albores", a docfiction short film that premiered in December 2023 at the Amorina Cine Bar Short Film Festival, an event dedicated to showcasing independent Argentine cinema and bringing together emerging filmmakers.</p>
        `,
        mediaHTML: '<iframe src="https://www.youtube.com/embed/fLpjvvWXApA" title="Albores" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  {
    id: "aud-documental-del-azar",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-documentaldelazar.png",
    publicaciones: [
      {
        idPub: "aud-azar-p1",
        año: "2020",
        titulo: "documental del azar",
        tags: ["mixed-media"],
        descripcionES: `
          <p>"Documental del azar" es un video experimental realizado como proyecto final de la materia Proyecto Audiovisual 1 (Cátedra Campos/Trilnick) de la carrera de Diseño de Imagen y Sonido de la Universidad de Buenos Aires (UBA).</p>
          <p>El proyecto explora el cruce entre el registro documental y la intervención plástica, combinando imágenes documentales con manipulaciones realizadas directamente sobre los fotogramas para cuestionar los límites entre la representation y la experimentación visual.</p>
          <p>Realizado en colaboración con Javiera Ceniceros y Clara Bunge.</p>
        `,
        descripcionEN: `
          <p>"Documental del azar" is an experimental video created as the final project for the Audiovisual Project 1 course in the Image and Sound Design career at the University of Buenos Aires (UBA).</p>
          <p>The project explores the intersection of documentary filmmaking and visual experimentation by combining documentary footage with hand-crafted interventions applied directly to individual frames, blurring the boundaries between documentation and artistic expression.</p>
          <p>Created in collaboration with Javiera Ceniceros and Clara Bunge.</p>
        `,
        mediaHTML: '<iframe src="https://www.youtube.com/embed/FKYOi1UyxpY" title="Documental del azar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  // ----------------------------------------------------
  // FREELANCE
  // ----------------------------------------------------
  {
    id: "free-flakkaboem-sessions",
    categoria: "freelance",
    portadaImg: "img/portadas/portada-cero-nueve.png",
    publicaciones: [
      {
        idPub: "free-flakka-p1",
        año: "2024",
        titulo: "Flakkaboem Sessions",
        tags: ["live music sessions"],
        descripcionES: "<p>Postproducción de material audiovisual para sesiones de música en vivo, incluyendo <b> edición de video</b>, <b>corrección de color</b>, <b> sincronización multicámara</b>  y selección de fragmentos para la creación de contenido en formato vertical destinado a Instagram Reels y YouTube Shorts.</p>",
        descripcionEN: "<p>Post-production of audiovisual content for live music sessions, including <b> video editing</b> , <b>color correction</b>, <b> multicamera synchronization</b>, and the selection of highlights for short-form vertical content on Instagram Reels and YouTube Shorts.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 35px; width: 100%;">
              <!-- Videos de YouTube uno abajo del otro -->
              <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/S5clh2xefZw" title="Flakkaboem YT 1" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/KIdcWdvYjyI" title="Flakkaboem YT 2" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/4ShSn0kQJeE" title="Flakkaboem YT 3" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/WMMbMiQEcWA" title="Flakkaboem YT 4" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/EA6wyKV7xs4" title="Flakkaboem YT 5" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              
              <div style="font-family: Google Sans, sans-serif; font-size: 16px; font-weight: 500; color: #000; border-top: 1px solid #eee; padding-top: 25px; margin-top: 10px;">Contenido Shorts / Reels:</div>

              <!-- Instagram en líneas de máximo 3 -->
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C--qANCoZuu/embed" title="Flakkaboem IG 1" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C9m0jSiofec/embed" title="Flakkaboem IG 2" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C6wLgRnIE0y/embed" title="Flakkaboem IG 3" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C5EKt3_oolW/embed" title="Flakkaboem IG 4" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C3-b801Ivpj/embed" title="Flakkaboem IG 5" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="width: 100%;"></div>
              </div>
          </div>
        `
      }
    ]
  },
  {
    id: "free-lucuma",
    categoria: "freelance",
    portadaImg: "portada-lucuma",
    publicaciones: [
      {
        idPub: "free-lucuma-p1",
        año: "2026",
        titulo: "Lúcuma",
        tags: ["medio digital especializado en música"],
        descripcionES: "<p><b>Diseño gráfico</b> para redes sociales de Lúcuma, medio latinoamericano de crítica musical. Desarrollo de portadas, carruseles de Instagram y piezas promocionales para la difusión de reseñas y artículos, adaptando cada propuesta visual a la identidad editorial del medio y al contenido de cada publicación.</p>",
        descripcionEN: "<p><b>Graphic design</b> for Lúcuma, a Latin American music criticism platform. Creation of cover images, Instagram carousels, and promotional graphics to support the publication of reviews and editorial content, adapting each visual piece to the platform's editorial identity and the tone of every article.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 100%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/p/DZGWi2LFTRw/embed" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 100%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/p/DXsPvFZAJ4x/embed" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 100%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/p/DWFMgTmjusW/embed" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="width: 100%;"></div>
              </div>
          </div>
        `
      }
    ]
  },
  // ----------------------------------------------------
  // INSTALACIONES
  // ----------------------------------------------------
  {
    id: "inst-bajo-sur",
    categoria: "instalaciones",
    portadaImg: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500",
    publicaciones: [
      {
        idPub: "inst1-p1",
        año: "2025",
        titulo: "Bajo Sur - Instalación",
        tags: ["Instalación", "Nuevas Tecnologías", "Fine Arts"],
        descripcionES: "<p>Montaje espacial multimedia inmersivo que investiga de forma crítica las tensiones directas entre la contaminación acústica y las luces artificiales fijas.</p>",
        descripcionEN: "<p>Immersive multimedia spatial staging that critically investigates the direct tensions between acoustic pollution and fixed artificial lights.</p>",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800">'
      }
    ]
  },
  { id: "inst-2", categoria: "instalaciones", portadaImg: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=500", publicaciones: [{ idPub: "inst2-p1", año: "2024", titulo: "Urdimbre - Madrid", tags: ["Instalación", "Vector Art", "Textiles"], descripcionES: "<p>Exhibición interactiva en la muestra colectiva que cruza texturas analógicas pesadas con proyecciones vectoriales de código vivo.</p>", descripcionEN: "<p>Interactive exhibition in the collective showcase that crosses heavy analog textures with live-coded vector projections.</p>", mediaHTML: "" }] },
  { id: "inst-3", categoria: "instalaciones", portadaImg: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500", publicaciones: [{ idPub: "inst3-p1", año: "2025", titulo: "Frecuencias Latentes", tags: ["Nuevas Tecnologías", "Granular Sound", "Immersive"], descripcionES: "<p>Performance espacial de carácter interactivo que utiliza síntesis granular manipulada mediante sensores de movimiento corporales.</p>", descripcionEN: "<p>Interactive spatial performance using granular synthesis manipulated through body motion sensors.</p>", mediaHTML: "" }] },
  { id: "inst-4", categoria: "instalaciones", portadaImg: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", publicaciones: [{ idPub: "inst4-p1", año: "2026", titulo: "Humedades Digitales", tags: ["Instalación", "Generative Art", "Algorithms"], descripcionES: "<p>Instalación de arte generativo basada estrictamente en algoritmos biológicos simulados que mutan según la temperatura ambiente de la sala.</p>", descripcionEN: "<p>Generative art installation strictly based on simulated biological algorithms that mutate according to the room's ambient temperature.</p>", mediaHTML: "" }] },
  // ----------------------------------------------------
  // DISEÑO GRÁFICO
  // ----------------------------------------------------
  { id: "dis-1", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500", publicaciones: [{ idPub: "dis1-p1", año: "2025", titulo: "Branding Residencial", tags: ["Branding", "Typography", "Editorial Layout"], descripcionES: "<p>Desarrollo de identidad de marca premium y sistemas tipográficos limpios orientados al sector de desarrollos inmobiliarios de lujo.</p>", descripcionEN: "<p>Premium brand identity development and clean typographic systems tailored for the luxury real estate development sector.</p>", mediaHTML: "" }] },
  { id: "dis-2", font_style: "google-sans", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500", publicaciones: [{ idPub: "dis2-p1", año: "2025", titulo: "UI/UX Camping App", tags: ["UX/UI", "Figma Design", "Prototyping"], descripcionES: "<p>Prototipado interactivo de alta fidelidad y desarrollo detallado del sistema de componentes responsivos para aplicaciones móviles de turismo aventura.</p>", descripcionEN: "<p>High-fidelity interactive prototyping and detailed development of the responsive component system for adventure tourism mobile applications.</p>", mediaHTML: "" }] },
  { id: "dis-3", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500", publicaciones: [{ idPub: "dis3-p1", año: "2025", titulo: "AdeaHealth Interface", tags: ["UX/UI", "Product Design", "Healthcare"], descripcionES: "<p>Rediseño de flujos funcionales y optimización de interfaces críticas para sistemas globales de historias clínicas digitales.</p>", descripcionEN: "<p>Redesign of functional flows and optimization of critical interfaces for global digital medical record systems.</p>", mediaHTML: "" }] },
  { id: "dis-4", categoria: "diseno", portadaImg: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500", publicaciones: [{ idPub: "dis4-p1", año: "2025", titulo: "Packaging La Cosecha", tags: ["Branding", "Sustainability", "Die-cuts"], descripcionES: "<p>Diseño estructural de empaques sustentables utilizando troqueles mínimos y una paleta tipográfica restrictiva de alta gama.</p>", descripcionEN: "<p>Structural sustainable packaging design using minimal die-cuts and a restrictive high-end typographic palette.</p>", mediaHTML: "" }] },
  // ----------------------------------------------------
  // FOTOGRAFÍA
  // ----------------------------------------------------
  { id: "foto-1", categoria: "fotografia", portadaImg: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500", publicaciones: [{ idPub: "fot1-p1", año: "2024", titulo: "Conciertos Under 2024", tags: ["Fotografía", "Analog Film", "High Contrast"], descripcionES: "<p>Registro fotográfico en blanco y negro de alto contraste capturado íntegramente con película analógica de alta sensibilidad forzada.</p>", descripcionEN: "<p>High-contrast black and white photographic registry entirely captured with pushed analog high-sensitivity film.</p>", mediaHTML: "" }] },
  { id: "foto-2", categoria: "fotografia", portadaImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500", publicaciones: [{ idPub: "fot2-p1", año: "2025", titulo: "Arquitectura Simétrica", tags: ["Fotografía", "Geometry", "Urban Architecture"], descripcionES: "<p>Ensayo visual enfocado en la ortogonalidad y la rigidez estructural de las fachadas brutalistas sobrevivientes en centros urbanos.</p>", descripcionEN: "<p>Visual essay focused on the orthogonal and structural rigidity of surviving brutalist facades in urban centers.</p>", mediaHTML: "" }] },
  { id: "foto-3", categoria: "fotografia", portadaImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500", publicaciones: [{ idPub: "fot3-p1", año: "2024", titulo: "Retratos de Artistas", tags: ["Fotografía", "Lighting", "Portraits"], descripcionES: "<p>Sesiones de estudio personalizadas para músicos utilizando iluminación puntual indirecta para acentuar el carácter dramático de la pieza.</p>", descripcionEN: "<p>Custom studio sessions for musicians utilizing precise indirect lighting to enhance the dramatic character of the piece.</p>", mediaHTML: "" }] },
  { id: "foto-4", categoria: "fotografia", portadaImg: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500", publicaciones: [{ idPub: "foto-4-p1", año: "2026", titulo: "Espacios Vacíos", tags: ["Fotografía", "Industrial Decay", "Fine Arts"], descripcionES: "<p>Exploración estética sobre el deterioro institucional a través del registro analógico detallado de locaciones industriales en desuso.</p>", descripcionEN: "<p>Aesthetic exploration regarding institutional decay through detailed analog registry of defunct industrial locations.</p>", mediaHTML: "" }] }
];

const textoBio = `
    <div class="bio-content-view" style="font-family: Google Sans, sans-serif; display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; width: 100%;">
        <div class="bio-es" style="font-weight: 300; font-size: 15px; line-height: 1.6; color: #000;">
            <p style="margin-bottom: 16px;"><b style="font-weight: 500;">Wanda Acevedo</b> es Diseñadora Audiovisual especializada en edición de video, diseño gráfico y producción de contenido digital para diferentes marcas, proyectos y empresas.</p>
            <p style="margin-bottom: 16px;">Especializada en la Universidad de Buenos Aires (UBA) y con un fuerte enfoque técnico, investiga narrativas contemporáneas y las tecnologías creativas emergentes.</p>
        </div>
        <div class="bio-en" style="font-weight: 300; font-size: 15px; line-height: 1.6; color: #777;">
            <p style="margin-bottom: 16px;"><b style="font-weight: 500;">Wanda Acevedo</b> is an Audiovisual Designer specializing in video editing, graphic design, and digital content production for various brands, projects, and companies.</p>
            <p style="margin-bottom: 16px;">Formed at the University of Buenos Aires (UBA) and with a strong technical focus, she researches contemporary narratives and emerging creative technologies.</p>
        </div>
    </div>
`;

let categoriaActual = 'todos';
let imagenesLightboxActuales = [];
let indiceLightboxActual = 0;

function irAHome() {
    document.getElementById('filtros-comerciales').classList.add('hidden');
    document.getElementById('back-button-container').classList.add('hidden');
    document.getElementById('dynamic-content').innerHTML = '';
}

function mostrarInfo() {
    document.getElementById('filtros-comerciales').classList.add('hidden');
    document.getElementById('back-button-container').classList.add('hidden');
    document.getElementById('dynamic-content').innerHTML = textoBio;
}

function renderizarGrillaProyectos(proyectosAVisualizar) {
    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';
    const divGrilla = document.createElement('div');
    divGrilla.className = 'grid-proyectos';
    divGrilla.style.display = 'grid';
    divGrilla.style.width = '100%';
    proyectosAVisualizar.forEach(proy => {
        const primeraPub = proy.publicaciones[0];
        if (!primeraPub) return;
        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyecto-tarjeta';
        tarjeta.setAttribute('onclick', `verProyecto('${proy.id}')`);
        tarjeta.style.fontFamily = 'Google Sans, sans-serif';
        tarjeta.style.width = '100%';
        let previewTexto = primeraPub.descripcionES.replaceAll('<b>', '<b style="font-weight: 500;">');
        tarjeta.innerHTML = `
            <img class="proyecto-tarjeta-media" src="${proy.portadaImg}" alt="${primeraPub.titulo}" style="width: 100%;">
            <div class="pub-ano" style="font-family: Google Sans, sans-serif; font-size: 14px; margin-top: 10px;">${primeraPub.año}</div>
            <h3 style="font-family: Google Sans, sans-serif; font-size: 17px; margin-top: 4px; margin-bottom: 8px;">${primeraPub.titulo}</h3>
            <div class="line-clamp-preview" style="font-family: Google Sans, sans-serif; font-weight: 300; font-size: 14px;">
                ${previewTexto} <span class="mas-link" style="color: #76C4AA;">[+]</span>
            </div>
        `;
        divGrilla.appendChild(tarjeta);
    });
    contenedor.appendChild(divGrilla);
}

function renderizarGrillaPublicacionesFiltradas(publicacionesFiltradas) {
    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';
    const divGrilla = document.createElement('div');
    divGrilla.className = 'grid-proyectos';
    divGrilla.style.display = 'grid';
    divGrilla.style.width = '100%';
    publicacionesFiltradas.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyecto-tarjeta';
        tarjeta.setAttribute('onclick', `verProyecto('${item.padreId}')`);
        tarjeta.style.fontFamily = 'Google Sans, sans-serif';
        tarjeta.style.width = '100%';
        let previewTexto = item.pub.descripcionES.replaceAll('<b>', '<b style="font-weight: 500;">');
        tarjeta.innerHTML = `
            <img class="proyecto-tarjeta-media" src="${item.padreImg}" alt="${item.pub.titulo}" style="width: 100%;">
            <div class="pub-ano" style="font-family: Google Sans, sans-serif; font-size: 14px; margin-top: 10px;">${item.pub.año}</div>
            <h3 style="font-family: Google Sans, sans-serif; font-size: 17px; margin-top: 4px; margin-bottom: 8px;">${item.pub.titulo}</h3>
            <div class="line-clamp-preview" style="font-family: Google Sans, sans-serif; font-weight: 300; font-size: 14px;">
                ${previewTexto} <span class="mas-link" style="color: #76C4AA;">[+]</span>
            </div>
        `;
        divGrilla.appendChild(tarjeta);
    });
    contenedor.appendChild(divGrilla);
}

function verProyecto(idProyecto) {
    const proy = listaProyectos.find(p => p.id === idProyecto);
    if (!proy) return;
    document.getElementById('filtros-comerciales').classList.add('hidden');
    
    const botonVolver = document.getElementById('back-button-container');
    if (botonVolver) {
        botonVolver.classList.remove('hidden');
    }
    const contenedor = document.getElementById('dynamic-content');
    contenedor.innerHTML = '';
    const divProyecto = document.createElement('div');
    divProyecto.className = 'proyecto-interno';
    divProyecto.style.width = '100%';
    divProyecto.style.maxWidth = '100%';
    
    let contenidoHTML = '';
    proy.publicaciones.forEach(pub => {
        let mediaRenderizado = pub.mediaHTML;
        
        if (mediaRenderizado && mediaRenderizado.includes('<iframe') && !mediaRenderizado.includes('display: grid') && !mediaRenderizado.includes('display: flex')) {
            mediaRenderizado = mediaRenderizado.replace(/width="[^"]*"/, '').replace(/height="[^"]*"/, '');
            mediaRenderizado = `
                <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                    ${mediaRenderizado.replace('<iframe', '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"')}
                </div>
            `;
        } else if (mediaRenderizado && mediaRenderizado.includes('<img') && !mediaRenderizado.includes('display: grid')) {
            mediaRenderizado = mediaRenderizado.replaceAll('<img', '<img data-lightbox="true" style="cursor:pointer; width: 100%; height: auto; border-radius: 4px;"');
        }
        let descES = pub.descripcionES.replaceAll('<p>', '<p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: #000; font-weight: 300;">');
        descES = descES.replaceAll('<b>', '<b style="font-weight: 500; color: #000;">');
        descES = descES.replaceAll('<strong>', '<strong style="font-weight: 500; color: #000;">');
        
        let descEN = pub.descripcionEN.replaceAll('<p>', '<p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: #777; font-weight: 300;">');
        descEN = descEN.replaceAll('<b>', '<b style="font-weight: 500; color: #555;">');
        descEN = descEN.replaceAll('<strong>', '<strong style="font-weight: 500; color: #555;">');
        contenidoHTML += `
            <div class="publicacion-item" style="margin-bottom: 50px; font-family: Google Sans, sans-serif; width: 100%;">
                <div class="pub-ano" style="font-size: 18px; font-weight: 400; color: #999; margin-bottom: 4px;">${pub.año}</div>
                <div class="pub-titulo-interno" style="font-size: 32px; font-weight: 700; color: #000; margin-bottom: 8px; line-height: 1.2;">${pub.titulo}</div>
                <div class="pub-tags" style="font-size: 16px; color: #76C4AA; font-weight: 400; margin-bottom: 35px; letter-spacing: 0.5px;">${pub.tags.join(' - ')}</div>
                
                <div class="idiomas-columnas-container" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; width: 100%; margin-bottom: 35px;">
                    <div class="descripcion-bloque-es">${descES}</div>
                    <div class="descripcion-bloque-en">${descEN}</div>
                </div>
                
                <div class="pub-media-container" style="width: 100%; margin-top: 25px;">
                    ${mediaRenderizado || '<div style="font-size:11px;color:#999999;padding:20px;border:1px dashed #ddd;text-align:center;">[ espacio multimedia vacío / empty media slot ]</div>'}
                </div>
            </div>
        `;
    });
    divProyecto.innerHTML = contenidoHTML;
    contenedor.appendChild(divProyecto);
    window.scrollTo(0,0);
}

function volverALaGrilla() {
    document.getElementById('back-button-container').classList.add('hidden');
    filtrarCategoria(categoriaActual);
}

function filtrarCategoria(cat) {
    categoriaActual = cat;
    document.getElementById('back-button-container').classList.add('hidden');
    
    if (cat === 'comercial') {
        document.getElementById('filtros-comerciales').classList.remove('hidden');
    } else {
        document.getElementById('filtros-comerciales').classList.add('hidden');
    }
    const filtrados = listaProyectos.filter(p => p.categoria === cat);
    renderizarGrillaProyectos(filtrados);
}

function filtrarPorMetadato(tagBuscado) {
    document.getElementById('back-button-container').classList.add('hidden');
    let publicacionesCoincidentes = [];
    listaProyectos.forEach(proy => {
        if (proy.categoria === 'comercial') {
            proy.publicaciones.forEach(pub => {
                if (pub.tags.includes(tagBuscado)) {
                    publicacionesCoincidentes.push({
                        padreId: proy.id,
                        padreImg: proy.portadaImg,
                        pub: pub
                    });
                }
            });
        }
    });
    
    renderizarGrillaPublicacionesFiltradas(publicacionesCoincidentes);
}

document.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-lightbox') || event.target.closest('[data-lightbox]')) {
        const targetImg = event.target.tagName === 'IMG' ? event.target : event.target.querySelector('img');
        if (!targetImg) return;
        
        const todasLasImgs = Array.from(document.querySelectorAll('#dynamic-content img[data-lightbox="true"]'));
        imagenesLightboxActuales = todasLasImgs.map(img => img.getAttribute('src'));
        
        const urlImagen = targetImg.getAttribute('src');
        indiceLightboxActual = imagenesLightboxActuales.indexOf(urlImagen);
        if (indiceLightboxActual === -1) {
            imagenesLightboxActuales = [urlImagen];
            indiceLightboxActual = 0;
        }
        const modal = document.getElementById('lightbox-modal');
        if (modal) {
            modal.classList.remove('hidden');
            actualizarImagenLightbox();
            inyectarFlechasNavegacion(modal);
        }
    }
});

function actualizarImagenLightbox() {
    const imagenModal = document.getElementById('lightbox-img');
    if (imagenModal && imagenesLightboxActuales.length > 0) {
        imagenModal.src = imagenesLightboxActuales[indiceLightboxActual];
    }
    const btnPrev = document.getElementById('lightbox-prev-btn');
    const btnNext = document.getElementById('lightbox-next-btn');
    if (btnPrev && btnNext) {
        if (imagenesLightboxActuales.length <= 1) {
            btnPrev.style.display = 'none';
            btnNext.style.display = 'none';
        } else {
            btnPrev.style.display = 'block';
            btnNext.style.display = 'block';
        }
    }
}

function inyectarFlechasNavegacion(modal) {
    if (document.getElementById('lightbox-prev-btn')) return;
    const btnPrev = document.createElement('button');
    btnPrev.id = 'lightbox-prev-btn';
    btnPrev.innerHTML = '&#8592;';
    btnPrev.style.cssText = 'position: absolute; left: 20px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #ffffff; font-size: 35px; cursor: pointer; padding: 10px; z-index: 10010; transition: opacity 0.2s;';
    btnPrev.setAttribute('onclick', 'lightboxAnterior(event)');
    
    const btnNext = document.createElement('button');
    btnNext.id = 'lightbox-next-btn';
    btnNext.innerHTML = '&#8594;';
    btnNext.style.cssText = 'position: absolute; right: 20px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #ffffff; font-size: 35px; cursor: pointer; padding: 10px; z-index: 10010; transition: opacity 0.2s;';
    btnNext.setAttribute('onclick', 'lightboxSiguiente(event)');
    [btnPrev, btnNext].forEach(btn => {
        btn.onmouseover = () => btn.style.opacity = '0.7';
        btn.onmouseout = () => btn.style.opacity = '1';
    });
    modal.appendChild(btnPrev);
    modal.appendChild(btnNext);
    actualizarImagenLightbox();
}

function lightboxAnterior(event) {
    if (event) event.stopPropagation();
    if (imagenesLightboxActuales.length <= 1) return;
    indiceLightboxActual--;
    if (indiceLightboxActual < 0) {
        indiceLightboxActual = imagenesLightboxActuales.length - 1;
    }
    actualizarImagenLightbox();
}

function lightboxSiguiente(event) {
    if (event) event.stopPropagation();
    if (imagenesLightboxActuales.length <= 1) return;
    indiceLightboxActual++;
    if (indiceLightboxActual >= imagenesLightboxActuales.length) {
        indiceLightboxActual = 0;
    }
    actualizarImagenLightbox();
}

document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('lightbox-modal');
    if (modal && !modal.classList.contains('hidden')) {
        if (event.key === 'ArrowLeft') {
            lightboxAnterior(null);
        } else if (event.key === 'ArrowRight') {
            lightboxSiguiente(null);
        } else if (event.key === 'Escape') {
            cerrarImagen();
        }
    }
});

function cerrarImagen() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

irAHome();
