import { Date } from './shared/date.interface';
import { Image } from './shared/image.interface';
import { Tech } from './shared/tech.interface';
import { Resource } from "./shared/resource.interface";

export interface Company {
  name: string
  logo: string
  url: string
  role: string
}

export interface Client {
  name: string
  logo: string
  url: string
  featured: boolean
}

export interface Project {
  id: string
  name: string
  image: string
  featured: boolean
  active: boolean
  category: string
  company: Company
  client: Client
  desc: string
  techs: Array<Tech>
  gallery: Array<Image>
  prototypes: Array<Resource>
  docs: Array<Resource>
  dates: Date
  confidentiality: string
  url: string
  github: string
}
