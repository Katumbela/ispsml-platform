export interface ICourse {
  id?: string;
  course: string;
  short_detail?: string;
  long_description?: string;
  duration: number; // Campo obrigatório, conforme o modelo
  level:
  | "bacharel"
  | "graduation"
  | "professional"
  | "master"
  | "pos-graduation"
  | "preparatory";
  slug: string; // Campo obrigatório
  shift?: IShift; // Ajustado para incluir shiftId diretamente
  benefits?: string;
  entryProfile?: string;
  outProfile?: string;
  years?: IYear[]; // Corrigido para corresponder ao modelo `Year`
  course_cover: string;
  additional_courses?: ICourse[];
  departmentId: number; // Adicionado conforme o modelo
  department?: IDepartment; // Referência ao departamento
  shiftId?: number; // Relacionado opcional ao turno
}

export interface IShift {
  id?: string; // Identificação do turno (se necessário)
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
}

export interface IDepartment {
  id?: string;
  name: string;
  departmentDirector?: {
    name: string;
    picture: string;
  };

  department_cover?: string;
  catalog_link?: string;
  courses?: ICourse[];
  slug: string;
  directorId?: number;
}

export interface IYear {
  year: string; // Exemplo: 1, 2, 3...
  semesters: ISemester[];
}

export interface ISemester {
  semester: string; // Exemplo: 1, 2
  subjects: ISubject[];
}

export interface ISubject {
  name: string;
  workload: number; // Em horas
}
