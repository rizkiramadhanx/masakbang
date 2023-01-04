import { Category, Navbar } from '@/components/molecules';
import { useGetAllCategoryRecipe } from '@/hooks/Recipes/useGetAllCategoryRecipe';
import { useGetDetailRecipe } from '@/hooks/Recipes/useGetDetailRecipe';
import { RecipeService } from '@/services/Recipe';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdFoodBank } from 'react-icons/md';
import { GiChefToque } from 'react-icons/gi';

const Resep = () => {
  const router = useRouter();

  const key = router.query.key as unknown as string;

  const { data: dataCategory } = useGetAllCategoryRecipe();

  const listRecipeCategory = useMemo(() => {
    const datalist = dataCategory?.results.map((e) => {
      return { name: e.category, value: e.key };
    });

    return datalist;
  }, [dataCategory]);

  const { data, isSuccess } = useGetDetailRecipe({ key: key });

  const dataDetail = data?.results;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex justify-between gap-5">
          {isSuccess && (
            <div className="md:w-5/6 w-full flex flex-col gap-3">
              <h1 className="text-2xl font-bold">{dataDetail?.title}</h1>
              <div className="sm:flex sm:justify-between">
                <ul className="flex gap-2">
                  <li className="flex gap-1 items-center">
                    <AiOutlineClockCircle size={20} color="red" />
                    <div>{dataDetail?.times || 'tidak diketahui'}</div>
                  </li>
                  <li className="flex gap-1 items-center">
                    <MdFoodBank size={20} color="red" />
                    <div>{dataDetail?.serving || 'tidak diketahui'}</div>
                  </li>
                  <li className="flex gap-1 items-center">
                    <GiChefToque size={20} color="red" />
                    <div>{dataDetail?.difficulty || 'tidak diketahui'}</div>
                  </li>
                </ul>
                <div>
                  {`✍🏼 ${dataDetail?.author.user}` || 'tidak diketahui'} |
                  {`📆 ${dataDetail?.author.datePublished}` ||
                    ' tidak diketahui'}
                </div>
              </div>
              <div className="h-full w-full">
                {dataDetail?.thumb && dataDetail.title && (
                  <Image
                    src={dataDetail?.thumb}
                    alt={dataDetail?.title}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full"
                  />
                )}
              </div>
              {/* konten */}
              <div className="flex flex-col gap-2">
                <p>{dataDetail?.desc}</p>
              </div>
            </div>
          )}
          <div className="bg-orange-500 text-white w-1/6 p-2 hidden md:flex md:flex-col rounded-sm">
            {listRecipeCategory && (
              <Category data={listRecipeCategory} name="Kategori Resep" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const key = context.params?.key as string;
  const queryClient = new QueryClient();

  await queryClient.fetchQuery({
    queryKey: ['use-get-detail-recipe', { key }],
    queryFn: async () => RecipeService.getDetailRecipe({ key }),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Resep;
