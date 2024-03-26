export function Commands() {
  const list = ['commands', 'about', 'projects', 'skills', 'clear']
  return (
    <div className='pl-2 pr-2'>
      {list.map((command, index) => (
        <div className='flex items-center gap-2' key={'command' + index}>
          <p
            className='text-[10px] text-yellow-200'
            key={'commandText' + index}>
            {command}
          </p>
        </div>
      ))}
    </div>
  )
}
