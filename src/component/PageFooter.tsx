export const PageFooter: React.FC = () => (
  <>
    <div className='bg-gray-50 py-5 px-5 text-black'>
      <div className='pb-2'>
        <p className='text-lg'>About</p>
        <div className='flex'>
          <p className='hover:cursor-pointer hover:opacity-70'>課題</p>
          <p className='ml-4 hover:cursor-pointer hover:opacity-70'>解決策</p>
          <p className='ml-4 hover:cursor-pointer hover:opacity-70'>利用方法</p>
        </div>
      </div>
      <div className='pb-2'>
        <p className='pt-2 text-lg'>Links</p>
        <div className='flex'>
          <p className='hover:cursor-pointer hover:opacity-70'>メディアキット</p>
          <p className='ml-4 hover:cursor-pointer hover:opacity-70'>サイトマップ</p>
        </div>
      </div>
      <div>
        <p className='pt-2 text-lg'>Legal</p>
        <div className='flex'>
          <p className='hover:cursor-pointer hover:opacity-70'>利用規約</p>
          <p className='ml-4 hover:cursor-pointer hover:opacity-70'>プライバシーポリシー</p>
        </div>
        <div className='flex'>
          <p className='hover:cursor-pointer hover:opacity-70'>特記法表記</p>
          <p className='ml-4 hover:cursor-pointer hover:opacity-70'>運営会社</p>
        </div>
      </div>
      <p className='pt-8 text-center font-light'>@Shuichi Hirooka</p>
    </div>
  </>
);
