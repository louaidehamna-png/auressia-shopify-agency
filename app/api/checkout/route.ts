import { NextRequest, NextResponse } from "next/server";
import { getProductByHandle, createCheckout } from "@/lib/shopify/products";

export async function POST(req: NextRequest) {
  try {
    const { shopifyHandle } = await req.json();
    if (!shopifyHandle) return NextResponse.json({ error: "shopifyHandle required" }, { status: 400 });

    const product = await getProductByHandle(shopifyHandle);
    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    const variantId = product.variants.edges[0]?.node.id;
    if (!variantId) return NextResponse.json({ error: "No variant found" }, { status: 404 });

    const cart = await createCheckout(variantId);
    return NextResponse.json({ checkoutUrl: cart.checkoutUrl });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
