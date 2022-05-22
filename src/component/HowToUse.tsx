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
  <div id='howtouse' className='bg-gray-50 p-5 text-center'>
    <div>
      <p className='text-sm font-bold'>{subtitle}</p>
      <h2 className='text-[20px] font-bold'>{title}</h2>
    </div>
    <div className='sm:flex sm:justify-center'>
      {card.map((c, index) => (
        <div key={index} className='my-8 sm:w-1/2'>
          <h3 className='text-[20px] font-bold'>{c.title}</h3>
          <div className='my-4'>
            <Image
              src={c.image.src}
              alt={c.image.alt}
              width={c.image.width}
              height={c.image.height}
            />
          </div>
          <p className='text-left leading-7 sm:px-8'>{c.text}</p>
        </div>
      ))}
    </div>
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
        text: 'プレゼントをもらう人が豊富なラインナップからほしい物リストを作成します。贈り手の人たちに欲しいものリストを共有して、同じものを選ぶことを防ぎます。',
      },
      {
        title: '贈る人はリストを確認するだけ',
        image: {
          src: ConfirmImage,
          alt: 'choice',
          width: 270,
          height: 238,
        },
        text: '共有されたほしい物リストを確認して、自分が送るプレゼントを選択します。あなたが送るプレゼントを選択したときは、リアルタイムで情報が反映されるので渡すプレゼントが一緒のことはないです。',
      },
    ],
  };
  return <HowToUseContainer {...Data} />;
};
