import { Date } from './shared/date';
import { Tech } from './shared/tech';
import { Project } from './shared/project';

export interface Company {
  name: string;
  logo: string;
  place: string;
  url: string;
}

export interface Role {
  id: string;
  name: string;
  category: string;
  company: Company;
  desc: string;
  techs: Array<Tech>;
  dates: Date;
  projects: Array<Project>;
}
