import { Date } from './shared/date.interface';
import { Image } from './shared/image.interface';
import { Project } from './shared/project.interface';

export interface Subject {
  name: string
  spe: boolean
}

export interface School {
  name: string
  image: string
  place: string
  country: string
  url: string
}

export interface Diploma {
  id: string
  name: string
  category: string
  gallery: Array<Image>
  subjects: Array<Subject>
  school: School
  dates: Date
  projects: Array<Project>
}
