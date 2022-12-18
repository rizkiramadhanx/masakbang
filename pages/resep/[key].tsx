import { useGetDetailRecipe } from '@/hooks/Recipes/useGetDetailRecipe';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Resep = () => {
  const router = useRouter();

  const key = router.query.key as unknown as string;

  const { data, isSuccess } = useGetDetailRecipe({ key: key });

  return <div>{data && JSON.stringify(data)}</div>;
};

export default Resep;
