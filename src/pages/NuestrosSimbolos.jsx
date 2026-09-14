import PageBanner from '../components/PageBanner'

export default function NuestrosSimbolos() {
  return (
    <>
      <PageBanner title="Nuestros Símbolos" />

      {/* Escapulario y Brida */}
      <section className="px-[72px] py-[60px]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-[0.8fr_1.2fr] gap-14 items-center">
          <img src="/images/simbolo-habito.jpg" alt="Escapulario" className="w-full object-contain" />
          <div>
            <h2 className="font-serif-display text-[26px] text-brand-blue font-medium mb-5">Escapulario</h2>
            <div className="space-y-4 text-[15px] leading-[1.8] text-brand-ink-muted">
              <p>
                Escapulario: tiene cortes rectos y cae desde los hombros sobre pecho y espalda hasta la
                media pierna o hasta el medio muslo. Puede ir suelta o amarrada a la cintura. Tiene en su
                interior 2 pedazos de tela de color púrpura o rojo en forma de cruz, que son imagen de su
                sangre redentora que cae dulcemente y son el signo vivo y amoroso de su redención.
              </p>
              <p>Cada vez que se usa este escapulario nos guardamos en la sangre preciosa de Jesús.</p>
              <p>
                Brida: Distintivo franciscano, que es signo de templanza y a imagen de Cristo atado y ceñido
                en el cumplimiento de su humilde servicio. Puede ser trenzada con hilos rojos y puede ir
                rematada con 3 o 7 nudos. Cada vez que se usa es Cristo quien nos sostiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escudo */}
      <section className="px-[72px] py-[60px] bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-[0.8fr_1.2fr] gap-14 items-center">
          <img src="/images/simbolo-escudo.jpg" alt="Escudo" className="w-full object-contain" />
          <div>
            <h2 className="font-serif-display text-[26px] text-brand-blue font-medium mb-5">Escudo</h2>
            <div className="space-y-4 text-[15px] leading-[1.8] text-brand-ink-muted">
              <p><strong className="text-brand-blue">Donum Christi:</strong> el servicio es el don de Cristo para nosotros.</p>
              <p><strong className="text-brand-blue">Sol:</strong> con 14 rayos grandes divididos en dos grupos de siete. Sol que representa a aquel que enviado del cielo por el Padre es la luz y el calor del amor que debemos seguir.</p>
              <p><strong className="text-brand-blue">Un corazón:</strong> a imagen del corazón amoroso de la santa Madre, la Virgen María, siempre dispuesta con su sí.</p>
              <p><strong className="text-brand-blue">Una hostia:</strong> circundada de 33 rayos pequeños, presencia viva y perenne de Jesucristo resucitado y divina promesa de salvación.</p>
              <p><strong className="text-brand-blue">Una corona de espinas:</strong> Entretejida en tres tallos que representan la humildad, la obediencia y el servicio por amor a Dios, Padre creador.</p>
              <p><strong className="text-brand-blue">10 Corazones pequeños:</strong> Simbolizan el amor de los servidores al Servidor. 3 corazones, la trinidad; 3 virtudes teologales; 3 clavos. 7 corazones; 7 fundadores; 7 pilares; 7 sacramentos.</p>
              <p><strong className="text-brand-blue">14 rayos:</strong> 7 obras de misericordia materiales y 7 obras espirituales. Hijos de Padre Pio: Bajo el carisma y el amparo del Santo Padre Pío.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cruz Eucaristica */}
      <section className="px-[72px] py-[60px]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif-display text-[26px] text-brand-blue font-medium mb-5">Cruz Eucarística</h2>
          <div className="space-y-4 text-[15px] leading-[1.8] text-brand-ink-muted">
            <p>
              Elaborada de dos tipos de madera que se encontraban en el huerto de los olivos. Tiene en el
              centro una hostia rodeada por 14 rayos que simbolizan las 7 obras de misericordia materiales y
              las 7 obras de misericordia espirituales. Su forma es de cruz latina, usada antiguamente en la
              edificación de iglesias y catedrales. Del centro se desprenden hacia los cuatro puntos de la
              cruz, como granos de trigo que se extienden hacía los cuatro puntos cardinales, y que
              representan la presencia de los servidores en todo el mundo, que son como semillas y que dan
              abundante fruto.
            </p>
            <p>
              Por el respaldo de la cruz se encuentra en un pequeño orificio un pedazo de tela. Alrededor la
              inscripción “Ex Indumentatis Di Padre Pio” que significa una parte del hábito de Padre Pío. En
              la parte inferior una “M” atravesada por una cruz (Símbolo Mariano) y dos corazones que
              simbolizan la presencia perenne de la Virgen María en la vida de un servidor.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
