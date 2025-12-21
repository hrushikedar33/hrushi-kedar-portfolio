// frontend call to get socail data
import { Blog } from '../../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/config/clientConfig';

export async function getBlog(): Promise<Blog[]> {
    return sanityClient.fetch(groq`*[_type == "blog"] | order(order asc) {
        ...,
        technologies[]->,
      } `);
}
