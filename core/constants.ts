import { PageType, RobotsContent, MetaTags } from '../interfaces/tag';
import { concatenateStrings } from '../utils/concatenateStrings';

export const defaultMetaTags: MetaTags = {
   canonical: 'https://www.alepouroullis.com',
   description: "The official website of Alexandros 'Alé' Pouroullis",
   image: 'https://ibb.co/W233S4f',
   robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
   type: PageType.website,
   title: "Alé Pouroullis"
};