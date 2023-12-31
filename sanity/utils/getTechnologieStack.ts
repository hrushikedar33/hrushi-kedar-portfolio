// frontend call to get socail data
import { TechnologieStack } from '../../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/config/clientConfig';

export async function getTechnologieStack(): Promise<TechnologieStack> {
    return sanityClient.fetch(groq`*[_type == "technologieStack"][0] {
        ...,
        languages[]->,
        frameworks[]->,
        databases[]->,
        tools[]->,
      } `);
}
