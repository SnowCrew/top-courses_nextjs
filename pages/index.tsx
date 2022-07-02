import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearence="primary" arrow="right">Knopka</Button>
      <Button appearence="ghost" arrow="right">Knopka</Button>
      <Ptag size='S'>Some text</Ptag>
      <Ptag>Some text</Ptag>
      <Ptag size='B'>Some text</Ptag>
      <Tag size='S' color='red'>Small</Tag>
      <Tag size='M' color='green'>medium</Tag>
      <Tag color='primary'>Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}