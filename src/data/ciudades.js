// Datos por ciudad para las páginas de "Dónde Estamos".
// Para activar una ciudad nueva, agrega su slug aquí con su información real.
export const CIUDADES = {
  medellin: {
    nombre: 'Medellín',
    subtitulo: 'Comunidad Hijos de Padre Pío: Un Latido de Amor en el Corazón de Medellín',
    banner: '/images/ciudad-medellin.jpg',
    whatsapp: '573016730620',
    whatsappDisplay: '+57 301 673 0620',
    cuentaBancaria: {
      banco: 'Bancolombia',
      tipo: 'Ahorros',
      numero: '379-641966-49',
      titular: 'DONUM CHRISTI COMUNIDAD APOSTOLICA SERVIDORES DEL SERVIDOR HIJOS DI PADRE PIO',
      llaveBreB: '@medellin',
      qr: 'https://gvdgqwxbkcauephznqfd.supabase.co/storage/v1/object/public/QRs/qr-medellin.png',
    },
    historia: {
      titulo: 'Nuestra Historia: Una Semilla de Fe',
      texto:
        'Todo comenzó el 28 de septiembre de 2008. Acogidos por la Parroquia del Padre Marianito y bajo la guía del sacerdote Bernardo Gómez, un pequeño grupo de 12 servidores decidió salir al encuentro del hermano. Lo que empezó como una entrega de 300 desayunos en la ribera del río Medellín, cerca de Barrio Triste, se convirtió en el cimiento de una obra que hoy, por gracia de Dios, sigue transformando vidas.',
      foto: '/images/medellin-obras.jpg',
    },
    labor: {
      titulo: 'Nuestra Labor Hoy: Presencia y Consuelo',
      texto:
        'Nuestra misión ha evolucionado, pero el espíritu de servicio permanece intacto. Actualmente, concentramos nuestros esfuerzos en tres frentes que buscan dignificar a quienes más lo necesitan.',
      foto: '/images/medellin-servicio.jpg',
    },
    grupos: [
      {
        titulo: null,
        puntos: [
          {
            nombre: 'Patio San Benito',
            horario: 'Domingos, 7:30 a.m.',
            descripcion:
              'Cada domingo nos reunimos en el sector de San Benito para compartir el alimento y la palabra con alrededor de 300 hermanos en situación de calle. Es nuestro encuentro más significativo, donde el desayuno es la excusa para entregar esperanza.',
            fotos: [],
          },
          {
            nombre: 'Canelazo',
            horario: 'Viernes, 6:00 p.m.',
            descripcion:
              'Al caer la tarde en Prado Centro, nos hacemos presentes para brindar calor y acompañamiento a cerca de 200 personas. Es un momento de cercanía y escucha en medio de la noche.',
            fotos: [],
          },
          {
            nombre: 'Ropero Tienda de Dios',
            horario: 'Sábados, 9:00 a.m.',
            descripcion:
              'En la Iglesia de San Benito, abrimos nuestras puertas para vestir con dignidad a quienes lo requieren. Cada sábado apoyamos a unas 50 personas con ropa en buen estado, recordándoles que su valor como seres humanos es inmenso.',
            fotos: [],
          },
        ],
      },
    ],
    cierre: {
      titulo: 'Sé Parte de Nuestra Obra',
      texto:
        'Nuestra comunidad no solo entrega alimento o vestuario; entrega el amor de Cristo hecho servicio. Cada voluntario y cada donación son el motor que nos permite seguir habitando las calles de nuestra ciudad con un mensaje de restauración y paz. Te invitamos a ser parte de esta familia. Porque, como nos enseñó el Padre Pío, en cada hermano necesitado está el rostro de nuestro Señor esperando ser reconocido.',
    },
  },

  bogota: {
    nombre: 'Bogotá',
    banner: '/images/ciudad-bogota.jpg',
    whatsapp: '573143347161',
    whatsappDisplay: '+57 314 334 7161',
    intro:
      'En el año 2002 es fundada nuestra querida comunidad en la ciudad de Bogotá y allí funciona la Casa General desde donde se gobierna la obra en el mundo. Nuestra administración se encuentra en la Carrera 20 # 62 - 37, Bogotá - Colombia. Celular +57 314 334 7161 / PBX +57 (1) 755 1335.',
    grupos: [
      {
        titulo: 'Nuestras Obras en Bogotá',
        puntos: [
          {
            nombre: 'Casa de Jesús',
            descripcion:
              'La casa de fraternidad y oración para todos, donde podemos estar en un encuentro con Jesús en el santísimo Sacramento del Altar y las reliquias de primer grado de Padre Pío y Carlo Acutis.',
            direccion: 'Carrera 20 # 62 - 37, Barrio San Luis, Bogotá D.C.',
            fotos: ['/images/bogota-casa-jesus.jpg'],
          },
          {
            nombre: 'Comedor Papa Francisco',
            descripcion:
              'La casa hogar de paso Papa Francisco es una obra de la comunidad, iniciada el 22 de julio de 2014, donde el hermano miserito, sintiendo el amor de Cristo a través de los servidores, puede encontrar asistencia física, alimentación, vestido, aseo y asistencia espiritual y humanitaria.',
            direccion: 'Carrera 16 # 22 - 50, Barrio Santafé, Bogotá D.C.',
            fotos: ['/images/bogota-comedor-francisco.png'],
          },
          {
            nombre: 'Comedor Madre Teresa',
            descripcion:
              'Atiende población de la tercera edad, hombres y mujeres que en su mayoría viven sin familia que los acompañe. Diariamente la casa atiende 100 adultos mayores, que reciben junto con la comida el amor que les ha sido negado.',
            direccion: 'Calle 23A # 17 - 48, Barrio Santafé, Bogotá D.C.',
            fotos: ['/images/bogota-comedor-teresa.png'],
          },
          {
            nombre: 'San Francisco de Asís',
            descripcion:
              'Atiende diariamente a 200 niños del barrio Ramírez, cercano al barrio Girardot, donde se provee el almuerzo cada día y algunas actividades para educar a los niños de este barrio, en su mayoría dedicado al reciclaje.',
            direccion: 'Carrera 1 # 1D - 16, Barrio Girardot, Bogotá D.C.',
            fotos: ['/images/bogota-san-francisco.png'],
          },
          {
            nombre: 'Casa de la Misericordia - Comedor de Padre Pío',
            descripcion: 'Atiende a la población de la tercera edad; diariamente se brindan 80 almuerzos.',
            direccion: 'Carrera 16 # 22 - 50, Barrio Santafé, Bogotá D.C.',
            telefono: '+57 314 334 7161 / +57 601 755 1335',
            horario: 'Martes a domingo, 10:00 a.m. a 1:00 p.m.',
            fotos: ['/images/bogota-misericordia.png'],
          },
          {
            nombre: 'La Torretta - Casa de Servicio Juvenil',
            descripcion:
              'La obra juvenil de la comunidad, donde niños y jóvenes se encuentran íntimamente con Jesús y con mamita María. Se realizan actividades como oración, formación humano-espiritual, salidas ecológicas, servicio de canelazo, películas y tertulias.',
            direccion: 'Carrera 20 # 62 - 37, Barrio San Luis, Bogotá D.C.',
            fotos: ['/images/bogota-torretta.png'],
          },
        ],
      },
      {
        titulo: 'Puntos de Servicio en Calle',
        puntos: [
          { nombre: 'Patio San Agustín', direccion: 'Carrera 8 # 6A - 58, Centro.', fotos: ['/images/bogota-patio-agustin.png'] },
          { nombre: 'Patio Santa Bárbara', direccion: 'Carrera 7 # 6 - 98 (al lado de la parroquia Santa Bárbara).', fotos: ['/images/bogota-patio-barbara.png'] },
          { nombre: 'Patio San Bernardo', direccion: 'Calle 6 # 11 - 14, Parque Tercer Milenio.', fotos: ['/images/bogota-patio-bernardo.png'] },
          { nombre: 'Santa Teresa de Calcuta', direccion: 'Carrera 15 # 10 - 73, parroquia del Sagrado Corazón de Jesús - Basílica Menor Voto Nacional, Centro.', fotos: ['/images/bogota-teresa-calcuta.png'] },
          { nombre: 'San Gregorio', direccion: 'Carrera 32 # 18A - 41, Barrio Cundinamarca (frente a la parroquia San Gregorio Magno).', fotos: ['/images/bogota-san-gregorio.png'] },
        ],
      },
      {
        titulo: 'El Canelazo',
        puntos: [
          {
            nombre: 'El Canelazo',
            coordinador: 'Lina García',
            direccion: 'Carrera 16 # 22 - 50, Barrio Santafé',
            telefono: '319 505 1354',
            horario: 'Lunes y jueves, 6:00 p.m.',
            fotos: ['/images/bogota-canelazo.png'],
          },
        ],
      },
    ],
  },

  miami: {
    nombre: 'Miami',
    banner: '/images/ciudad-miami.jpg',
    whatsapp: '13057468465',
    whatsappDisplay: '+1 305 746 8465',
    intro:
      'En Miami la comunidad comienza en noviembre del 2012, nos reunimos la noche de acción de gracias, acogiéndonos al llamado que nos hizo nuestro Señor. Desde ese día todas las semanas nos reunimos a preparar los alimentos y al día siguiente se los repartimos a nuestros hermanitos más necesitados, en la calle, en los diferentes puntos de servicio del sur de la Florida. Entregamos alrededor de 1.200 combos de comida mensuales en promedio. Además del servicio de la calle, llevamos apoyo a personas enfermas y nos reunimos como comunidad de oración todos los martes a las 7:30 p.m. en la Parroquia San Benito, 701 W 77th St, Hialeah, FL 33014.',
    grupos: [
      {
        titulo: 'Nuestras Obras en Miami',
        puntos: [
          {
            nombre: 'Servicio a Homeless — Downtown Miami',
            descripcion:
              'Nos reunimos afuera de la iglesia de Gesú, iniciando con oración y trasladándonos a los puntos de servicio "La Misericordia": Los Puentes (Bridge Point) y Casa Amarilla (Yellow House Point). Proveemos comida (sándwich y postre), agua, ropa y llevamos amor junto con la Palabra de Dios.',
            direccion: '118 NE 2nd St, Miami, FL 33132 (Iglesia de Gesú)',
            horario: 'Domingos, 7:30 a.m.',
            fotos: ['/images/miami-downtown.jpg'],
          },
          {
            nombre: 'Servicio a Homeless — Homestead',
            descripcion:
              'Nos reunimos afuera de la parroquia del Sagrado Corazón, iniciando con oración y trasladándonos a los puntos de servicio, donde proveemos comida (sándwich y postre), agua, ropa y llevamos amor junto con la Palabra de Dios.',
            direccion: 'Sacred Heart Church, Homestead, FL',
            horario: 'Domingos, 7:30 a.m.',
            fotos: ['/images/miami-homestead.jpg'],
          },
          {
            nombre: 'Punto de Servicio Francisco',
            descripcion: 'Servicio en la calle Mowry.',
            direccion: 'Sacred Heart Church, 106 SE 2nd Rd, Homestead, FL 33030',
            fotos: ['/images/miami-francisco.jpg'],
          },
          {
            nombre: 'Preparación de los Alimentos y Ropa',
            descripcion:
              'Todos los sábados nos reunimos en diferentes grupos para la preparación de los alimentos y organización de ropa.',
            telefono: '+1 305 746 8465',
            fotos: ['/images/miami-preparacion.jpg'],
          },
        ],
      },
    ],
    donaciones: {
      especie: [
        'Pan', 'Mantequilla', 'Jamón en rebanadas', 'Queso en rebanadas', 'Galletas', 'Aguas',
        'Bolsas de papel', 'Bolsas de basura de 13 galones', 'Mantel plástico', 'Guantes',
        'Bolsas plásticas de sándwiches', 'Artículos de aseo personal', 'Ropa y zapatos',
      ],
      monetariasTexto:
        'Wells Fargo Bank, N.A. — Cuenta Corriente (Cheques) No. 7575178319, a nombre de DONUM CHRISTI SERVIDORES DEL SERVIDOR.\n\nTambién aceptamos donaciones por Cash App, PayPal, Venmo (servidores del servidor) y tarjetas de crédito.\n\nCoordinadora Provincial Miami: Dulce Zuloaga — +1 305 746 8465 — servidoresdelservidormiami@gmail.com',
    },
  },

  paraguay: {
    nombre: 'Villarrica del Espíritu Santo',
    banner: '/images/py-villarica.jpg',
    intro:
      'La comunidad Servidores del Servidor tuvo presencia en Paraguay, expresamente en la localidad de Villarrica, cuando un joven llamado Matías Martínez en el año 2011 se sintió llamado por el Espíritu y reconoció la obra de Padre Pío mediante un programa de Pepe Alonso del canal católico EWTN en el cual entrevistó al fundador de la comunidad, Jorge Andrade. El hermano Matías realizó durante dos años los trámites para poder acoger el servicio en su país, y todos sus esfuerzos dieron fruto en el año 2013, días antes de la JMJ en Río (Jornada Mundial de la Juventud). De este maravilloso encuentro el hermano Matías nos comparte: "Lo más hermoso que nunca se borrará de nuestra mente fue cuando nuestro fundador sacó del bolsillo una monedita de 50 gs. (la moneda de menos valor aquí en Paraguay) y nos la entregó diciéndonos: he aquí la primera semillita de la Comunidad, cuídenla y recuerden que esto dará mucho fruto". Posteriormente los jóvenes de Paraguay viajaron a la JMJ y allí se incentivaron los deseos de consolidar la comunidad en Paraguay, comenzando el servicio con los hermanos necesitados que viven en las calles, compartiendo con ellos el evangelio y una merienda una vez a la semana. A pedido del párroco de Villarrica, se fundó un punto de servicio en la cárcel de menores; al principio fue difícil, pero luego se fueron creando lazos de confianza a través de pequeñas dinámicas. Unos meses más tarde se consagró como servidor el hermano Matías durante el Capítulo General de la comunidad en Bogotá, Colombia, y unos días antes los servidores de Paraguay recibieron una gran donación para fundar un comedor, el cual inició con 35 niños en situación de riesgo. En el año 2015, tras el anuncio de la visita del Papa Francisco a Paraguay, se fundó el punto "San Juan Pablo II". La visita del Santo Padre fue un acontecimiento maravilloso para la comunidad, que hoy en día cuenta con 17 Servidores pacientes y 30 Servidores Laboriosos en Paraguay.',
    grupos: [
      {
        titulo: 'Nuestras Obras en Paraguay',
        puntos: [
          {
            nombre: 'Casa Padre Pío Alivio del Sufrimiento',
            descripcion:
              'Lugar donde nuestros hermanos miseritos reciben un plato de comida más el alimento espiritual a través de catequesis dirigidas especialmente a niños. Cada sábado, además del comedor de niños, se realizan atención médica y odontológica gratuitas para niños y personas en situación de calle.',
            horario: 'Sábados, 8:00 a.m. (comedor) · Jueves, 9:00 a.m. (odontología)',
            telefono: 'Matías Martínez +595 986 940920 / Ingrid Orrego +595 984 293531',
            fotos: ['/images/py-casa-padre-pio.jpg'],
          },
          {
            nombre: 'Punto de Servicio San Juan Pablo II',
            descripcion:
              'Ubicado en el Barrio Centro, en los lugares donde se encuentran habitantes de la calle, se provee alimento material y especialmente el espiritual a través de la Palabra de Dios.',
            horario: 'Viernes, 8:00 p.m.',
            fotos: ['/images/py-san-juan-pablo.jpg'],
          },
          {
            nombre: 'Punto de Servicio Sembrador',
            descripcion:
              'Funciona en el Centro Educativo Sembrador, más conocido como la cárcel de menores. Cada domingo se lleva a 60 jóvenes un mensaje de esperanza a través del Evangelio, la catequesis y actividades grupales y deportivas que ayudan a su reinserción en la sociedad.',
            horario: 'Domingos',
            fotos: ['/images/py-sembrador.jpg'],
          },
        ],
      },
      {
        titulo: 'Puntos de Reunión para el Servicio',
        puntos: [
          {
            nombre: 'Comedor Chiquitunga',
            descripcion: 'Salón Parroquial de la Catedral de Villarrica, ubicado sobre las calles Natalicio Talavera c/ Joaquín Estigarribia.',
            horario: 'Domingos, 7:00 a.m.',
            direccion:
              'Encargados: Cristóbal Amadit (+595 975 495322), Williams Vázquez (+595 982 599342, williamspy96@gmail.com)',
            fotos: ['/images/py-villarica.jpg'],
          },
        ],
      },
    ],
  },

  bucaramanga: {
    nombre: 'Bucaramanga',
    banner: '/images/ciudad-bucaramanga.jpg',
    subtitulo: 'Historia de los Servidores del Servidor en la provincia de Bucaramanga',
    intro:
      'El nacimiento de la comunidad Servidores del Servidor se gestó oficialmente el 1 de noviembre del año 2003. En ese mismo momento también el cielo quiso que se fundara una rama de la comunidad en la ciudad de Bucaramanga. El encuentro fue uno de los más grandes regalos de Papá Dios, puesto que permitió que los servidores provenientes de Bogotá realizaran un retiro en Piedecuesta, Santander, lugar donde se ubicaba en ese entonces la Comunidad de los Ermitaños Eucarísticos del Padre Celestial junto con su fundador, el Padre Antonio Lootens. El Padre Lootens, iluminado por el Espíritu Santo, reconoció en ellos la espiritualidad del Padre Pío y no solo los acogió, sino que les ofreció su apoyo y dirección para consolidar esta comunidad naciente tanto en Bogotá como en Bucaramanga.',
    grupos: [
      {
        titulo: 'Nuestras Obras en Bucaramanga',
        puntos: [
          {
            nombre: 'Caminantes del Padre Pío',
            coordinador: 'Olga Lucía Romero Quiñonez',
            direccion: '10 con Cra 6, parque principal de Piedecuesta, Santander',
            telefono: '318 481 7078',
            fotos: ['/images/buc-caminantes.jpg'],
          },
          {
            nombre: 'Punto San Juan de la Cruz',
            coordinador: 'Gabriel Calderón Sánchez',
            direccion: 'Cra 5 entre calles 11 y 12, Piedecuesta, Santander',
            telefono: '315 673 0814',
            fotos: ['/images/buc-san-juan-cruz.jpg'],
          },
          {
            nombre: 'San Francisco de Asís',
            coordinador: 'Edyth Vargas',
            direccion: 'Parque principal de Piedecuesta, Santander',
            telefono: '316 431 3864',
            fotos: ['/images/buc-san-francisco.jpg'],
          },
          {
            nombre: 'Santa Teresa de Ávila',
            coordinador: 'Diana Guevara',
            direccion: 'Coliseo Villaconcha, frente a la plaza campesina, Piedecuesta, Santander',
            telefono: '317 728 9332',
            fotos: ['/images/buc-santa-teresa.jpg'],
          },
          {
            nombre: 'Punto Nuestra Señora de Guadalupe',
            coordinador: 'Aura Consuelo Almeida Díaz',
            direccion: 'Bucaramanga',
            fotos: ['/images/buc-guadalupe.jpg'],
          },
          {
            nombre: 'Punto Madre Laura Montoya',
            coordinador: 'Bárbara Gómez G.',
            direccion: 'Cra 15 con calle 24',
            telefono: '300 222 2974 / 316 248 9913',
            fotos: ['/images/buc-madre-laura.jpg'],
          },
          {
            nombre: 'Punto San Jorge',
            descripcion:
              'Está ubicado en la carrera 30 con 14. Contactos: Gladys Marcela Duarte (Carrera 30 # 14-71), Claudia Patricia Duarte (Carrera 29 # 17-44), Lucila Vargas (Carrera 28 # 16-61).',
            fotos: ['/images/buc-san-jorge.jpg'],
          },
          {
            nombre: 'Punto de Servicio Divino Niño',
            descripcion:
              'Ubicado en la calle 63 con carrera 28, frente al parque de Saludcoop y el conjunto residencial Conucos en Bucaramanga.',
            fotos: ['/images/buc-divino-nino.jpg'],
          },
        ],
      },
    ],
  },

  tulua: {
    nombre: 'Tuluá',
    banner: '/images/ciudad-tulua.jpg',
    enConstruccion: true,
    correoContacto: 'administracion@servidoresdelservidor.org',
  },
  barranquilla: {
    nombre: 'Barranquilla',
    banner: '/images/ciudad-barranquilla.jpg',
    enConstruccion: true,
    correoContacto: 'administracion@servidoresdelservidor.org',
  },
  neiva: {
    nombre: 'Neiva',
    banner: '/images/ciudad-neiva.jpg',
    enConstruccion: true,
    correoContacto: 'administracion@servidoresdelservidor.org',
  },
  cucuta: {
    nombre: 'San José de Cúcuta',
    banner: '/images/ciudad-cucuta.webp',
    enConstruccion: true,
    correoContacto: 'administracion@servidoresdelservidor.org',
  },
  cartagena: {
    nombre: 'Cartagena',
    banner: '/images/ciudad-cartagena.jpg',
    enConstruccion: true,
    correoContacto: 'administracion@servidoresdelservidor.org',
  },
}
