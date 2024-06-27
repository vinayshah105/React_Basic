import image from '../assets/react-core-concepts.png';
import './Header.css';

const reactDescription = ['fundamental', 'Core', 'Basic', 'Advanced'];

function title(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[title(2)];

  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
