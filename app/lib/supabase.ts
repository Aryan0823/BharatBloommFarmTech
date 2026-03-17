import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type NewsArticle = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    read_time: string;
    slug: string;
    cover_image_url: string | null;
    published: boolean;
    created_at: string;
};

export type FarmerTestimonial = {
    id: string;
    farmer_name: string;
    location: string;
    crop_type: string;
    testimonial: string;
    yield_improvement: number;
    avatar_url: string | null;
};
