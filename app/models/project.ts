import { Date } from './shared/date';
import { Image } from './shared/image';
import { Tech } from './shared/tech';

export interface Company {
  name: string;
  logo: string;
  url: string;
  role: string;
}

export interface Client {
  name: string;
  logo: string;
  url: string;
  featured: boolean;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  featured: boolean;
  active: boolean;
  category: string;
  company: Company;
  client: Client;
  desc: string;
  techs: Array<Tech>;
  gallery: Array<Image>;
  prototypes: Array<string>;
  dates: Date;
  url: string;
  github: string;
}
