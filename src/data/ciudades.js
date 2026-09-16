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
      qr: null, // pendiente: imagen del QR
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
    cierre: {
      titulo: 'Sé Parte de Nuestra Obra',
      texto:
        'Nuestra comunidad no solo entrega alimento o vestuario; entrega el amor de Cristo hecho servicio. Cada voluntario y cada donación son el motor que nos permite seguir habitando las calles de nuestra ciudad con un mensaje de restauración y paz. Te invitamos a ser parte de esta familia. Porque, como nos enseñó el Padre Pío, en cada hermano necesitado está el rostro de nuestro Señor esperando ser reconocido.',
    },
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
