import { routes } from '@/infra/routes.vars';

export default function CourseNotFound() {
  return (
    <div className=''>

      <center>
        <h1 className="text-4xl">
          Vá para a home page para selecionar um curso
        </h1>
        <a href={routes.HOME_ROUTE}>Pagina Inicial</a>
      </center>
    </div>
  );
};