// frontend call to get socail data
import { Project } from '../../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/config/clientConfig';

export async function getProject(): Promise<Project[]> {
    return sanityClient.fetch(groq`*[_type == "project"] | order(order asc) {
        ...,
        technologies[]->,
      } `);
}
