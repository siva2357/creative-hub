import ProductDetailClient from "@/app/components/ProductDetailClient";
import { detailedProducts } from "@/app/data/products";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { productId: 'meet-gen' },
    { productId: 'community-hub' },
    { productId: 'talent-hub' },
    { productId: 'resume-hub' },
    { productId: 'course-platform' },
    { productId: 'cloud-hub' },
  ];
}

export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params;
  const product = detailedProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div style={{ paddingTop: "150px", textAlign: "center" }} className="container-custom">
        <h1>Product not found</h1>
        <Link href="/products" className="pill-button" style={{ marginTop: "20px" }}>Back to Ecosystem</Link>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}