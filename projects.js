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
        descripcionES: "Diseño de interfaz de usuario en Figma y assets promocionales globales adaptados siguiendo estrictamente las brand guidelines de la firma internacional para su lanzamiento en el mercado europeo.",
        descripcionEN: "User interface design in Figma and global promotional assets adapted strictly following the international firm's brand guidelines for its European market launch.",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800">'
      }
    ]
  },
  {
    id: "com-techround",
    categoria: "comercial",
    portadaImg: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=500",
    publicaciones: [
      {
        idPub: "tech-p1",
        año: "2025",
        titulo: "TechRound UK Video Editorial",
        tags: ["Short Form", "Motion Graphics", "AI Tools"],
        descripcionES: "Edición dinámica a partir de crudos periodísticos y optimización masiva de flujos de trabajo de subtitulado automatizado con herramientas de inteligencia artificial avanzadas.",
        descripcionEN: "Dynamic editing based on journalistic raw footage and massive optimization of automated subtitling workflows using advanced artificial intelligence tools.",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=800">'
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
        descripcionES: "Postproducción visual adaptada a formatos móviles verticales enfocada en generar engagement orgánico y retención de audiencia en el nicho de turismo de lujo.",
        descripcionEN: "Visual postproduction adapted to vertical mobile formats focused on driving organic engagement and audience retention in the luxury tourism niche.",
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
        descripcionES: "Sincronización de múltiples cámaras en set, corrección de color de estilo cinematográfico y curaduría de fragmentos de alto impacto para distribución multiplataforma.",
        descripcionEN: "Multi-camera synchronization on set, cinematic-style color correction, and curation of high-impact snippets for cross-platform digital distribution.",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800">'
      }
    ]
  },

  // ----------------------------------------------------
  // FREELANCE
  // ----------------------------------------------------
  {
    id: "free-lucuma",
    categoria: "freelance",
    portadaImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500",
    publicaciones: [
      {
        idPub: "luc-p1",
        año: "2026",
        titulo: "Lúcuma Medio Digital",
        tags: ["Branding", "UX/UI", "Layout Design"],
        descripcionES: "Generación de identidad visual completa y plantillas editoriales fijas destinadas a la difusión de reseñas críticas y lanzamientos discográficos independientes.",
        descripcionEN: "Complete visual identity generation and static editorial templates aimed at promoting critical reviews and independent album releases.",
        mediaHTML: '<img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800">'
      }
    ]
  },
  { id: "free-2", categoria: "freelance", portadaImg: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500", publicaciones: [{ idPub: "fr2-p1", año: "2024", titulo: "Indie Clip: Solitary Boy", tags: ["Short Form", "Color Grading", "Directing"], descripcionES: "Registro audiovisual de campo y montaje rítmico final para el lanzamiento del videoclip oficial de la banda.", descripcionEN: "Audiovisual field recording and final rhythmic editing for the band's official music video launch.", mediaHTML: "" }] },
  { id: "free-3", categoria: "freelance", portadaImg: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500", publicaciones: [{ idPub: "fr3-p1", año: "2023", titulo: "Concierto Niceto Club", tags: ["Fotografía", "Concert Music", "Documentary"], descripcionES: "Cobertura fotográfica documental en condiciones de iluminación complejas dentro del marco del festival de música emergente.", descripcionEN: "Documentary photographic coverage in complex lighting conditions within the framework of the emerging music festival.", mediaHTML: "" }] },
  { id: "free-4", categoria: "freelance", portadaImg: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=500", publicaciones: [{ idPub: "fr4-p1", año: "2024", titulo: "Identidad Visual: AlmaSense", tags: ["UX/UI", "AI Tools", "Branding"], descripcionES: "Optimización técnica de bibliotecas digitales y catalogación integral de assets automatizados asistidos por modelos de IA.", descripcionEN: "Technical optimization of digital libraries and comprehensive cataloging of automated assets assisted by AI models.", mediaHTML: "" }] },

  // ----------------------------------------------------
  // AUDIOVISUAL
  // ----------------------------------------------------
  {
    id: "aud-albores",
    categoria: "audiovisual",
    portadaImg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
    publicaciones: [
      {
        idPub: "aud1-p1",
        año: "2023",
        titulo: "Corto Documental: Albores",
        tags: ["Documental", "Audiovisual", "Sound Design"],
        descripcionES: "Exploración exhaustiva de paisajes sonoros analógicos y microrrelatos urbanos locales bajo una impronta cinematográfica experimental de autor.",
        descripcionEN: "Comprehensive exploration of analog soundscapes and local urban micro-narratives under an experimental authorial cinematic stamp.",
        mediaHTML: '<img src="
