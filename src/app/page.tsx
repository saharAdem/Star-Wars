import SearchInput from './components/ui/SearchInput'
import Button from './components/ui/button'

export default function Home() {
  return (
    <div className='container m-auto mt-9 w-5/6'>
      <section>
        <h1 className='text-center text-5xl font-bold m-5'>Start wars Challenge</h1>
        <div className='flex flex-row justify-around'>
          <SearchInput />
          <Button>Create Squad</Button>
        </div>
      </section>
    </div>
  )
}
