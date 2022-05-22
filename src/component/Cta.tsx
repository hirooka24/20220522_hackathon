import Link from 'next/link';

export const Cta: React.FC = () => (
  <div className=' bg-primary-800'>
    <div className='py-12 px-8 text-right sm:mx-auto sm:w-9/12'>
      <h2 className='text-left text-lg font-bold text-white'>
        世の中の<span className='text-xl'>もったいない</span>
        <br />
        <span className='text-xl'>ミスマッチ</span>をなくす
      </h2>
      <div></div>
      <Link
        href='https://docs.google.com/forms/d/e/1FAIpQLSeDoJQyvb2tK_XG6cm5Co_NAGZsg_P-olEKVSo6OZedOHWHjg/viewform'
        target='_blank'
        passHref
      >
        <button className='mt-12 rounded-md bg-gray-100 px-6 py-3 font-bold tracking-widest text-primary-800 hover:opacity-70'>
          資料請求
        </button>
      </Link>
    </div>
  </div>
);
