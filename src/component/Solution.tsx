import Image, { StaticImageData } from 'next/image';
import ReceiverImage from '~/img/solution-receiver.png';
import SenderImage from '~/img/solution-sender.png';

interface SolutionProps {
  title: string;
  subtitle: string;
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

const SolutionContainer: React.FC<SolutionProps> = ({ title, subtitle, card }) => (
  <div className='py-12' id='solution'>
    <p className='text-center text-sm font-bold'>{subtitle}</p>
    <h2 className='text-center text-[20px] font-bold'>{title}</h2>
    {card.map((c, index) => (
      <div key={index} className=' text-center'>
        <h3 className='my-8 inline-block rounded-3xl bg-yellow-800 py-1 px-5 text-[20px] font-bold'>
          {c.title}
        </h3>
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
    title: 'ー 貰い手の欲しいものリストを共有 ー',
    subtitle: 'Solution',
    card: [
      {
        title: '贈るひと',
        image: {
          src: SenderImage,
          alt: 'receiver',
          width: 208,
          height: 215,
        },
        list: ['・自信を持って送れる', '・サイズや色がわかる'],
      },
      {
        title: 'もらうひと',
        image: {
          src: ReceiverImage,
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
