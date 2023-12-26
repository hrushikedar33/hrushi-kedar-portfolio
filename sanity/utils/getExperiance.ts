// frontend call to get socail data
import { Experiance } from '../../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/config/clientConfig';

export async function getExperiance(): Promise<Experiance[]> {
    return sanityClient.fetch(groq`*[_type == "experiance"] {
        ...,
        technologies[]->,
      }`);
}
