import Card from './Card';

import Icon1 from 'D:/usuarios/alumno/documentos/GitHub/four-card-feature-section-master/src/assets/images/icon-calculator.svg';
import Icon2 from 'D:/usuarios/alumno/documentos/GitHub/four-card-feature-section-master/src/assets/images/icon-karma.svg';
import Icon3 from 'D:/usuarios/alumno/documentos/GitHub/four-card-feature-section-master/src/assets/images/icon-supervisor.svg';
import Icon4 from 'D:/usuarios/alumno/documentos/GitHub/four-card-feature-section-master/src/assets/images/icon-team-builder.svg';

let cards = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    imageUrl: Icon3,
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    imageUrl: Icon4,
  },
  {
    title: "Karma",
    description: "Regulary evaluates our talent to ansure quality",
    imageUrl: Icon2,
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    imageUrl: Icon1,
  },
];

function Main() {
  return (
    <main className='main'>
      <Card
        className={cards[0].title}
        title={cards[0].title}
        description={cards[0].description}
        imageUrl={cards[0].imageUrl}
      />

      <div className='cards_container'>
        <Card
          className={cards[1].title}
          title={cards[1].title}
          description={cards[1].description}
          imageUrl={cards[1].imageUrl}
        />
        <Card
          className={cards[2].title}
          title={cards[2].title}
          description={cards[2].description}
          imageUrl={cards[2].imageUrl}
        />
      </div>

      <Card
        className={cards[3].title}
        title={cards[3].title}
        description={cards[3].description}
        imageUrl={cards[3].imageUrl}
      />
    </main>
  );
}
export default Main;
