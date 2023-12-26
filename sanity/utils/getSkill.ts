// frontend call to get socail data
import { Skill } from '../../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity/config/clientConfig';

export async function getSkill(): Promise<Skill[]> {
    return sanityClient.fetch(groq`*[_type == "skill"]`);
}
