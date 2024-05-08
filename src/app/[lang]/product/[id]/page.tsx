import { getOneProduct } from '@/service/product';
import { Locale } from '../../../../../i18n.config';
import { baseURLImg } from '@/service';
import ProductComponent from './components/ProductComponent';
import { Metadata, ResolvingMetadata } from 'next';
type Props = {
  params: { id: string };
};

const fetchBlog = async (id: string) => {
  const product: any = await getOneProduct(id);
  return product;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product: any = await fetchBlog(params.id);
  const previousImages = (await parent).openGraph?.images || [];
  const desc = product?.data?.data?.description?.ru;

  return {
    title: product?.data?.data?.name?.ru,
    description: desc,
    openGraph: {
      images: [
        `${baseURLImg}/${product?.data?.data?.images}`,
        ...previousImages,
      ],
    },
  };
}

export default function Product({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) {
  return (
    <>
      <ProductComponent id={id} params={lang} />
    </>
  );
}
