import Image, { StaticImageData } from 'next/image';
import TaskReceiverImage from '~/img/task-receiver.png';
import TaskSenderImage from '~/img/task-sender.png';

interface TaskProps {
  title: string;
  card: TaskCard[];
}

interface TaskCard {
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  list: string[];
}

const TaskContainer: React.FC<TaskProps> = ({ title, card }) => (
  <div className='py-12' id='task'>
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

export const Task = () => {
  const Data: TaskProps = {
    title: '贈り物のミスマッチをなくす',
    card: [
      {
        title: '贈り手',
        image: {
          src: TaskReceiverImage,
          alt: 'receiver',
          width: 208,
          height: 215,
        },
        list: ['・何が欲しいのかわからない', '・使ってもらえるか不安', '・サイズがわからない'],
      },
      {
        title: '贈り手',
        image: {
          src: TaskSenderImage,
          alt: 'sender',
          width: 240,
          height: 203,
        },
        list: ['・既に持っている', '・趣味ではないため活用しない', '・同じ贈り物をもらう'],
      },
    ],
  };
  return <TaskContainer {...Data} />;
};
