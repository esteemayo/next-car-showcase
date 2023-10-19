'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';

import { CarCard, Filter, Hero, SearchBar, ShowMore } from '@/components';

const Home = () => {
  const params = useSearchParams();

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search state
  const [model, setModel] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  // filter state
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);

  // pagination states
  const [limit, setLimit] = useState(10);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const res = await fetchCars({
          manufacturer: manufacturer || '',
          year: year || 2022,
          fuel: fuel || '',
          limit: limit || 10,
          model: model || '',
        });

        setAllCars(res);
      } catch (err: any) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold capitalize'>Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <Filter title='fuel' options={fuels} setFilter={setFuel} />
            <Filter
              title='year'
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car, index) => {
                return <CarCard key={index} car={car} />;
              })}
            </div>
            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  src='/svg/loader.svg'
                  width={50}
                  height={50}
                  alt='loader'
                  className='object-contain'
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl'>Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
