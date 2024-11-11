
export interface ICourse {
  id?: string
  course: string
  short_detail?: string
  longDetail?: string
  duration?: number
  level?: 'graduation' | 'master' | 'bacharel'
  slug?: string
}