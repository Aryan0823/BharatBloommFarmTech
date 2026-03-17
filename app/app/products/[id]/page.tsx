import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
    return products.map(p => ({ id: p.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === params.id);
    if (!product) notFound();
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
    return <ProductDetailClient product={product} related={related} />;
}
