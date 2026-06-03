import { shopifyFetch } from "./client";

const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;

const PRODUCT_QUERY = `
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;

const CREATE_CART_MUTATION = `
  mutation CreateCart($variantId: ID!, $quantity: Int!) {
    cartCreate(input: {
      lines: [{ merchandiseId: $variantId, quantity: $quantity }]
    }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  variants: { edges: { node: { id: string } }[] };
};

export async function getProducts() {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
    PRODUCTS_QUERY,
    { first: 20 }
  );
  return data.products.edges.map((e) => e.node);
}

export async function getProductByHandle(handle: string) {
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>(
    PRODUCT_QUERY,
    { handle }
  );
  return data.product;
}

export async function createCheckout(variantId: string) {
  const data = await shopifyFetch<{
    cartCreate: { cart: { id: string; checkoutUrl: string }; userErrors: { field: string; message: string }[] };
  }>(CREATE_CART_MUTATION, { variantId, quantity: 1 });

  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }
  return data.cartCreate.cart;
}
