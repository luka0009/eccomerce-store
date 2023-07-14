import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
	categoryId?: string;
	colorId?: string;
	sizeId?: string;
	isFeatured?: boolean;
}

const getProducts = async (query: Query, excludeProductId?: string): Promise<Product[]> => {
	const url = qs.stringifyUrl({
	  url: URL,
	  query: {
		colorId: query.colorId,
		sizeId: query.sizeId,
		categoryId: query.categoryId,
		isFeatured: query.isFeatured,
	  },
	});
  
	const res = await fetch(url);
	const products: Product[] = await res.json();
  
	const filteredProducts = products.filter((product) => product.id !== excludeProductId);
  
	return filteredProducts;
  };
export default getProducts;
