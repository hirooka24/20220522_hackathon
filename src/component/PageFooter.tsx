export const PageFooter: React.FC = () => (
  <div className='bg-gray-50 py-6'>
    <div className=' py-5 px-5 text-black sm:flex sm:justify-around'>
      <div className='pb-2'>
        <p className='text-lg'>About</p>
        <div className='flex'>
          <a
            className='scroll-smooth font-bold hover:cursor-pointer hover:opacity-70 '
            href='#task'
          >
            Task
          </a>
          <a
            className='ml-4 scroll-smooth font-bold hover:cursor-pointer hover:opacity-70 '
            href='#solution'
          >
            Solution
          </a>
          <a
            className='ml-4 scroll-smooth font-bold hover:cursor-pointer hover:opacity-70 '
            href='#howtouse'
          >
            How to use
          </a>
        </div>
      </div>
      <div className='pb-2'>
        <p className='pt-2 text-lg'>Links</p>
        <div className='flex'>
          <p className='font-bold hover:cursor-pointer hover:opacity-70 '>メディアキット</p>
          <p className='ml-4 font-bold hover:cursor-pointer hover:opacity-70 '>サイトマップ</p>
        </div>
      </div>
      <div>
        <p className='pt-2 text-lg'>Legal</p>
        <div className='flex'>
          <p className='font-bold hover:cursor-pointer hover:opacity-70 '>利用規約</p>
          <p className='ml-4 font-bold hover:cursor-pointer hover:opacity-70 '>
            プライバシーポリシー
          </p>
        </div>
        <div className='flex'>
          <p className='font-bold hover:cursor-pointer hover:opacity-70 '>特記法表記</p>
          <p className='ml-4 font-bold hover:cursor-pointer hover:opacity-70 '>運営会社</p>
        </div>
      </div>
    </div>
    <p className='pt-8 text-center font-light'>@Shuichi Hirooka</p>
  </div>
);
