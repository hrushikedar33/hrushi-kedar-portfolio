// frontend call to get socail data
import { HomePage } from '../../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/config/clientConfig';

export async function getHomePage(): Promise<HomePage> {
    return sanityClient.fetch(groq`*[_type == "homePage"][0]`);
}
