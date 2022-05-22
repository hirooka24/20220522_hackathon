import Image, { StaticImageData } from 'next/image';
import ReceiverImage from '~/img/solution-receiver.png';
import SenderImage from '~/img/solution-sender.png';

interface SolutionProps {
  title: string;
  card: SolutionCard[];
}

interface SolutionCard {
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  list: string[];
}

const SolutionContainer: React.FC<SolutionProps> = ({ title, card }) => (
  <div className='py-12'>
    <h2 className='text-center text-base font-bold'>{title}</h2>
    {card.map((c, index) => (
      <div key={index} className=' text-center'>
        <h3 className='my-8 text-lg font-bold'>{c.title}</h3>
        <div>
          <Image
            src={c.image.src}
            alt={c.image.alt}
            width={c.image.width}
            height={c.image.height}
          />
        </div>
        <ul className='grid grid-cols-1 '>
          {c.list.map((l, index) => (
            <li key={index} className='my-4 font-bold  tracking-wider'>
              {l}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const Solution = () => {
  const Data: SolutionProps = {
    title: '貰い手の欲しいものリストを共有',
    card: [
      {
        title: '贈り手',
        image: {
          src: ReceiverImage,
          alt: 'receiver',
          width: 208,
          height: 215,
        },
        list: ['・自信を持って送れる', '・サイズや色がわかる'],
      },
      {
        title: '贈り手',
        image: {
          src: SenderImage,
          alt: 'sender',
          width: 240,
          height: 203,
        },
        list: ['・サイズや色のミスマッチがなくなる', '・欲しいものが手に入る'],
      },
    ],
  };
  return <SolutionContainer {...Data} />;
};
