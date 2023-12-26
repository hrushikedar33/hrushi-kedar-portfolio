// frontend call to get socail data
import { Social } from '../../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/config/clientConfig';

export async function getSocial(): Promise<Social[]> {
    return sanityClient.fetch(groq`*[_type == "social"] `);
}
