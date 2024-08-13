import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Personalización',
    Svg: require('@site/static/img/mask.svg').default,
    description: (
      <>
        Vitalit te permite personalizar cada aspecto de tu bienestar, desde rutinas de ejercicio hasta planes nutricionales y meditación, todo a través de IA. Configura tus objetivos y deja que Vitalit adapte las recomendaciones específicamente para ti.
      </>
    ),
  },
  {
    title: 'Todo en uno',
    Svg: require('@site/static/img/star.svg').default,
    description: (
      <>
        Con Vitalit, puedes gestionar tu salud física, mental y nutricional en un solo lugar. Nuestra plataforma integral te ofrece las herramientas necesarias para un enfoque completo y equilibrado del bienestar.
      </>
    ),
  },
  {
    title: 'Escalabilidad con Tecnología Moderna',
    Svg: require('@site/static/img/scale.svg').default,
    description: (
      <>
        Desarrollada con las últimas tecnologías, incluyendo React y AI, Vitalit es altamente escalable y está preparada para crecer contigo. Aprovecha una experiencia rápida, segura y adaptable a tus necesidades cambiantes.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
