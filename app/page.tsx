import Image from 'next/image'
import {CustomFilter, Hero, SearchBar} from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
        <div className={'mt-12 padding-x padding-y max-width'} id='discover'>
            <div className={'home__text-container'}>
                <h1 className={'text-4xl font-extrabold'}>
                    Каталог машин
                </h1>
                <p>Машины, которые могут вам понравиться</p>

                <div className={'home__filters'}>
                    <SearchBar/>
                    <div className={'home__filter-container'}>
                        <CustomFilter title={'fuel'}/>
                        <CustomFilter title={'year'}/>
                    </div>
                </div>
            </div>
        </div>

    </main>
  )
}
