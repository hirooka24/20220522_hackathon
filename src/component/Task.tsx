import Image, { StaticImageData } from 'next/image';
import TaskReceiverImage from '~/img/task-receiver.png';
import TaskSenderImage from '~/img/task-sender.png';

interface TaskProps {
  title: string;
  subtitle: string;
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

const TaskContainer: React.FC<TaskProps> = ({ title, subtitle, card }) => (
  <div className='bg-[#F9F9F9] py-12' id='task'>
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
        <ul>
          {c.list.map((l, index) => (
            <li key={index} className='my-4 text-center font-bold tracking-wider'>
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
    subtitle: 'Task',
    title: 'ー 贈り物のミスマッチをなくす ー',
    card: [
      {
        title: '贈るひと',
        image: {
          src: TaskSenderImage,
          alt: 'receiver',
          width: 126,
          height: 210,
        },
        list: ['・何が欲しいのかわからない', '・使ってもらえるか不安', '・サイズがわからない'],
      },
      {
        title: 'もらうひと',
        image: {
          src: TaskReceiverImage,
          alt: 'sender',
          width: 168,
          height: 212,
        },
        list: ['・既に持っている', '・同じ贈り物をもらう', '・趣味ではないため活用しない'],
      },
    ],
  };
  return <TaskContainer {...Data} />;
};
