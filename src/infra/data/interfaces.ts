export interface Role {
  id?: string;
  pic: string;
  name: string;
  about: string;
  cv: string;
  role: string;
  linkedin?: string;
  x?: string;
  phrases?: Phrase[];
  team: string[];
}

export interface Phrase {
  id?: string;
  title: string;
  description: string;
  roleid?: string;
  Role: Role;
}

export interface News {
  id?: string;
  title: string;
  shortDescription: string;
  content: string;
  postDate: Date;
  poster: string;
  link: string;
  slug: string;
  image: string;
  sponsor?: boolean;
}

export interface Department {
  id?: string;
  name: string;
  description: string;
  image: string | File; // Adicionado campo image
  courses?: Course[];
}

export interface Course {
  id?: string;
  title: string;
  shortDetail?: string;
  longDescription?: string;
  duration: number;
  level: string;
  slug: string;
  courseCover: string;
  departmentid?: string;
  department: Department;
  shiftId?: string;
  shift?: string;
  benefits: string[];
  years: Year[];
}

export interface Year {
  id?: string;
  year: number;
  courseid?: string;
  course: Course;
  semesters: Semester[];
}

export interface Semester {
  id?: string;
  semester: number;
  yearid?: string;
  year: Year;
  subjects: Subject[];
}

export interface Subject {
  id?: string;
  name: string;
  workload: number;
  semesterid?: string;
  semester: Semester;
}

export interface Application {
  id?: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  course: string;
  interest: string;
  date: Date;
}

export interface Event {
  id?: string;
  title: string;
  description: string;
  longDescription: string;
  date: Date;
  category: string;
  imageUrl: string;
  isFeatured: boolean;
  slug: string;
  place: string;
}
