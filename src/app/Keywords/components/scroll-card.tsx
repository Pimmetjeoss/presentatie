// component.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef } from 'react';
import Link from 'next/link';

interface ArticleCardData {
  title: string;
  description: string;
  link: string;
  color: string;
  rotation: string;
}

const articleCardsData: ArticleCardData[] = [
  {
    title: 'Prompt',
    description:
      'Een prompt is de tekstinstructie of vraag die je aan een LLM geeft om specifieke output te genereren. Het is je communicatiemiddel met de LLM - de manier waarop je het model vertelt wat je wilt. Een prompt kan variëren van een simpele vraag tot complexe instructies met rolbeschrijvingen, context, voorbeelden, en outputspecificaties.',
    link: '#',
    color: '#E8E8E8', // Lightest Gray
    rotation: 'rotate-6',
  },
  {
    title: 'AI weet totaal niet waar ie het over heeft!',
    description:
      'Een LLM heeft geen bewustzijn of begrip van betekenis. Het model werkt op basis van statistische patronen in tekst, niet vanuit daadwerkelijk begrip. Het is alsof je een zeer geavanceerde autoaanvulling hebt die voorspelt wat de meest waarschijnlijke volgende woorden zijn. Het systeem "begrijpt" niet dat water nat is - het weet alleen dat deze woorden vaak samen voorkomen.',
    link: '#',
    color: '#D8D8D8', // Light Gray
    rotation: 'rotate-0',
  },
  {
    title: 'AI kan geen nee verkopen',
    description:
      'Een LLM kan om die reden niet aangeven dat hij iets niet weet, maar genereert altijd een antwoord op basis van waarschijnlijkheden. Moderne systemen zijn wel getraind om voorzichtiger te formuleren bij onzekerheid, maar dit is aangeleerd gedrag, geen echte twijfel.',
    link: '#',
    color: '#C8C8C8', // Medium Light Gray
    rotation: '-rotate-6',
  },
  {
    title: 'Loopt altijd achter de feiten aan',
    description:
      'Het trainen van een groot model kost maanden en enorme rekenkracht. Tussen het verzamelen van data, het trainen, testen en uitrollen zit vaak meer dan een jaar. Daarom weten ze niets over recente gebeurtenissen, nieuwe ontwikkelingen of actuele nieuwsfeiten.',
    link: '#',
    color: '#B8B8B8', // Medium Gray
    rotation: 'rotate-3',
  },
  {
    title: 'Context',
    description:
      'Context is cruciaal voor goede antwoorden. Als je vraagt "Is deze boom ziek?" zonder foto of beschrijving, kan een LLM alleen algemene informatie geven. Met context (foto, locatie, seizoen, boomsoort) kan het een veel gerichter antwoord geven. Context bepaalt de relevantie en accuratesse van het antwoord.',
    link: '#',
    color: '#A8A8A8', // Medium Dark Gray
    rotation: 'rotate-0',
  },
  {
    title: 'Contextwindow',
    description:
      'Het contextwindow is het "werkgeheugen" van een LLM - hoeveel tekst het tegelijk kan verwerken. Dit varieert van enkele duizenden tot honderdduizenden tokens (ongeveer 0,75 woord per token). Alles buiten dit window "vergeet" het model. Bij lange gesprekken kan informatie van het begin verloren gaan.',
    link: '#',
    color: '#989898', // Darker Gray
    rotation: '-rotate-3',
  },
  {
    title: 'Hallucinaties',
    description:
      'Hallucinaties zijn verzonnen of incorrecte informatie die een LLM presenteert alsof het waar is. Dit gebeurt omdat het model altijd probeert een plausibel antwoord te genereren, ook als het de informatie niet kent. Voorbeelden: niet-bestaande studies citeren, valse feiten verzinnen, of niet-bestaande functies beschrijven.',
    link: '#',
    color: '#888888', // Even Darker Gray
    rotation: 'rotate-6',
  },
  {
    title: 'Gestructureerde data',
    description:
      'LLMs zijn primair getraind op ongestructureerde tekst, maar worstelen met gestructureerde data zoals tabellen, databases of spreadsheets. Ze kunnen moeite hebben met het behouden van relaties tussen datapunten, het uitvoeren van precieze berekeningen, of het consistent interpreteren van kolommen en rijen.',
    link: '#',
    color: '#787878', // Darker Gray
    rotation: 'rotate-0',
  },
  {
    title: 'Multimodaal',
    description:
      'Multimodale LLM kan verschillende soorten input verwerken: tekst, afbeeldingen, audio, en soms video. Dit opent nieuwe mogelijkheden zoals het analyseren van röntgenfoto&apos;s of het transcriberen van audio. Het model leert verbanden tussen verschillende modaliteiten, waardoor AI-systemen veelzijdiger maar ook complexer worden.',
    link: '#',
    color: '#686868', // Even Darker Gray
    rotation: '-rotate-6',
  },
  {
    title: 'Agentic AI',
    description:
      'Agentic AI verwijst naar AI-systemen die zelfstandig kunnen handelen om doelen te bereiken, zonder constante menselijke sturing. In tegenstelling tot traditionele AI die alleen reageert, kan agentic AI taken opdelen, planning maken, tools gebruiken, en meerdere stappen ondernemen om een complex probleem op te lossen.',
    link: '#',
    color: '#585858', // Very Dark Gray
    rotation: 'rotate-3',
  },
  {
    title: 'Generative AI',
    description:
      'Generative AI is kunstmatige intelligentie die nieuwe content kan creëren op basis van patronen uit trainingsdata. Dit omvat het genereren van tekst (ChatGPT), afbeeldingen (DALL-E), muziek, video, code, en 3D-modellen. Het "generatieve" aspect betekent dat het iets nieuws maakt dat de patronen en stijlen volgt die het heeft geleerd.',
    link: '#',
    color: '#484848', // Darkest Gray
    rotation: '-rotate-3',
  },
];

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        <div className='wrapper'>
          <section className='text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              De keywords die je AI-resultaten transformeren <br /> Van basis tot expert prompting
            </h1>
          </section>
        </div>

        <section className='text-white w-full bg-slate-950'>
          <div className='flex justify-between px-16'>
            <div className='grid gap-2'>
              {articleCardsData.map((card, i) => (
                <figure key={i} className='sticky top-0 h-screen grid place-content-center'>
                  <article
                    className={`${card.color} h-[45rem] w-[80rem] rounded-2xl ${card.rotation} p-16 grid place-content-center gap-12`}
                    style={{ backgroundColor: card.color }}
                  >
                    <h1 className='text-7xl font-bold'>{card.title}</h1>
                    <p className='text-3xl leading-relaxed'>{card.description}</p>
                  </article>
                </figure>
              ))}
            </div>
            <div className='sticky top-0 h-screen grid place-content-center'>
              <h1 className='text-4xl px-8 font-medium text-center tracking-tight leading-[120%]'>
                Essential AI <br /> Concepts 🚀
              </h1>
            </div>
          </div>
        </section>

        <footer className='group bg-slate-950 '>
          <Link href='/nano_banana' className='block'>
            <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear hover:from-gray-300 hover:to-gray-700 cursor-pointer'>
              Contiweb
            </h1>
          </Link>
          <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full text-white'></div>
        </footer>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;