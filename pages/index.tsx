import Category from '@/components/molecules/Category';
import { useGetAllCategoryRecipe } from '@/hooks/Recipes/usegetAllCategoryRecipe';
import { useGetAllRecipeByPage } from '@/hooks/Recipes/useGetAllRecipeByPage';
import { useGetRecipeBySearch } from '@/hooks/Recipes/useGetRecipeBySearch';
import { Card, Footer, Navbar, SearchBox, SkeletonCard } from '@/Molecules';
import { FC, useMemo } from 'react';
import { useState } from 'react';

const Home: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string | null>(null);
  const { data, isFetched } = useGetAllRecipeByPage({
    page: page,
  });

  const { data: dataCategory, isLoading } = useGetAllCategoryRecipe();

  const listRecipeCategory = useMemo(() => {
    const datalist = dataCategory?.results.map((e) => {
      return { name: e.category, value: e.key };
    });

    return datalist;
  }, [dataCategory]);

  const {
    data: dataSearchRecipes,
    isFetched: isFecthedSearch,
    isLoading: isLoadingSearch,
  } = useGetRecipeBySearch({
    query: search,
  });

  const eventSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log(dataSearchRecipes);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex justify-between gap-5">
          <div className="md:w-5/6 w-full">
            <div className="bg-orange-500 text-white py-5 px-2 mb-5 rounded-sm flex items-center justify-between">
              <h1 className="text-2xl">Resep Masakan</h1>
              <SearchBox onChange={eventSearch} placeholder="Cari resep" />
            </div>
            {search && (
              <div className="py-2 text-lg">
                Hasil dari pencarian {search}...
              </div>
            )}
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5 w-full">
              {
                isFetched &&
                  !search &&
                  data?.results.map((e, i) => <Card key={i} data={e} />)
                // eslint-disable-next-line prefer-spread
              }

              {(isLoading || isLoadingSearch) &&
                // eslint-disable-next-line prefer-spread
                Array.apply(null, Array(10)).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              {isFecthedSearch &&
                search &&
                dataSearchRecipes?.results.map((e, i) => (
                  <Card key={i} data={e} />
                ))}
            </div>
            {!search && (
              <div className="flex justify-end gap-2 mt-5 items-center">
                <button
                  className="bg-orange-500 p-1 rounded-sm text-white"
                  onClick={() => {
                    return page > 0 ? setPage(page - 1) : null;
                  }}
                >
                  sebelumnya
                </button>
                <h1 className="bg-orange-500 py-1 px-2 rounded-sm text-white">
                  {page}
                </h1>
                <button
                  className="bg-orange-500 p-1 rounded-sm text-white"
                  onClick={() => setPage(page + 1)}
                >
                  selanjutnya
                </button>
              </div>
            )}
          </div>
          <div className="bg-orange-500 text-white w-1/6 p-2 hidden md:flex md:flex-col rounded-sm">
            {listRecipeCategory && (
              <Category data={listRecipeCategory} name="Kategori Resep" />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
