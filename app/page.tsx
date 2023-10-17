import { Filter, Hero, SearchBar } from '@/components';

const Home = () => {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold capitalize'>Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <Filter title='fuel' />
            <Filter title='year' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
