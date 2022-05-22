export const PageHeader: React.FC = () => {
  const muneList: string[] = ['Task', 'Solution', 'How to use'];
  return (
    <header className='bg-gradient-to-r from-primary-800 to-primary-500 py-4 text-white'>
      <p className='text-center text-lg font-bold tracking-widest'>Hoshimo</p>
      <ul className='mt-2 flex items-center justify-center gap-8 text-base'>
        {muneList.map((list, i) => (
          <li key={i} className='hover:cursor-pointer hover:opacity-75'>
            {list}
          </li>
        ))}
      </ul>
    </header>
  );
};
