interface TabPrpos {
  children?: React.ReactNode
  tabText?: string
}

export function Tab({ tabText, children }: TabPrpos) {
  return (
    <div className='bg-[#75507B] w-full h-8 rounded-t-md items-center relative'>
      <div className='flex items-center h-full p-4 gap-2 absolute'>
        {children}
      </div>
      <div className=' flex w-full h-full justify-center items-center text-sm '>
        {tabText}
      </div>
    </div>
  )
}
