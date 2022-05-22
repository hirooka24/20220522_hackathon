export const PageFooter: React.FC = () => (
  <>
    <div className='bg-gradient-to-r from-primary-800 to-primary-500 py-5 px-5 text-white'>
      <div>
        <p className='text-lg'>About</p>
        <div className='flex'>
          <p>課題</p>
          <p className='ml-4'>解決策</p>
          <p className='ml-4'>利用方法</p>
        </div>
      </div>
      <div>
        <p className='pt-2 text-lg'>Links</p>
        <div className='flex'>
          <p>メディアキット</p>
          <p className='ml-4'>サイトマップ</p>
        </div>
      </div>
      <div>
        <p className='pt-2 text-lg'>Legal</p>
        <div className='flex'>
          <p>利用規約</p>
          <p className='ml-4'>プライバシーポリシー</p>
        </div>
        <div className='flex'>
          <p>特記法表記</p>
          <p className='ml-4'>運営会社</p>
        </div>
      </div>
      <p className='pt-8 text-center font-light'>@Shuichi Hirooka</p>
    </div>
  </>
);
