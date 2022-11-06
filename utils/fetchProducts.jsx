export const fetchProducts = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
    );
  
    const data = await res.json();
    // console.log(data);
     const products = data;
  
    return products;
  };