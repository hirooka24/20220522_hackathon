import Image, { StaticImageData } from 'next/image';
import ChoiceImage from '~/img/howtouse-choice.png';
import ConfirmImage from '~/img/howtouse-confirm.png';

interface HowToUseProps {
  title: string;
  subtitle: string;
  card: HowToUseCard[];
}

interface HowToUseCard {
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  text: string;
}

const HowToUseContainer: React.FC<HowToUseProps> = ({ title, subtitle, card }) => (
  <div className='px-5 text-center'>
    <div>
      <p className='text-sm font-bold'>{subtitle}</p>
      <h2 className='text-[20px] font-bold'>{title}</h2>
    </div>
    {card.map((c, index) => (
      <div key={index} className='my-8'>
        <h3 className='text-[20px] font-bold'>{c.title}</h3>
        <div className='my-4'>
          <Image
            src={c.image.src}
            alt={c.image.alt}
            width={c.image.width}
            height={c.image.height}
          />
        </div>
        <p className='text-left  leading-7'>{c.text}</p>
      </div>
    ))}
  </div>
);

export const HowToUse = () => {
  const Data: HowToUseProps = {
    title: 'ー 利用方法 ー',
    subtitle: 'How To Use',
    card: [
      {
        title: 'もらう人が欲しいものを選択',
        image: {
          src: ChoiceImage,
          alt: 'choice',
          width: 270,
          height: 238,
        },
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
      {
        title: '贈る人はリストを確認するだけ',
        image: {
          src: ConfirmImage,
          alt: 'choice',
          width: 270,
          height: 238,
        },
        text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
      },
    ],
  };
  return <HowToUseContainer {...Data} />;
};
