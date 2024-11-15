export interface ICourse {
  id?: string
  course: string
  short_detail?: string
  long_description?: string
  duration?: number
  level?: 'graduation' | 'master' | 'bacharel'
  slug?: string
  shift?: IShift
  years: IYear[]
  course_cover: string
  additional_courses?: ICourse[];
}

export interface IShift {
  morning: boolean
  afternoon: boolean
  evening: boolean
}

export interface IYear {
  year: number
  semesters: ISemester[]
}

export interface ISemester {
  semester: number
  subjects: ISubject[]
}

export interface ISubject {
  name: string
  workload: number // in hours
}