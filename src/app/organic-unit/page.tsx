'use client';

import HeroOrganicUnit from './components/HeroOrganicUnit';
import { routes } from '@/infra/routes.vars';
import { coursesData } from '@/infra/data/courses-data';

const departments = Object.entries(coursesData).map(([key, value]) => ({
  link: `${routes.ORGANIC_UNIT_ROUTE}/${key}`,
  name: `Departamento de ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  cover: value.department_cover
}));

export default function OrganicUnitPage() {
  return (
    <div> 
      <HeroOrganicUnit />
      <br />
      <div className="containers">
        <h2 className="text-3xl title">Unidades Organicas ISPSML</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem provident nesciunt sit id est
          laborum tempore dolores eum deleniti similique sed nisi, inventore ullam harum hic, unde eveniet
          atque?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem provident nesciunt sit id est
          laborum tempore dolores eum deleniti similique sed nisi, inventore ullam harum hic, unde eveniet
          atque?
        </p>
        <br />
        <br />
        <br />
        <h2 className="title">Conheça as Nossas Unidades Organicas</h2>
        <p className="mt-4 text-gray-500">
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam repellendus nisi
            voluptate quis? Doloremque, odit velit ullam ad numquam quibusdam recusandae neque delectus
            consectetur nostrum repellat, obcaecati, accusamus quidem!
          </i>
        </p>
        <br />
        <br />
      </div>
      <div className="px-1">
        <div className="grid grid-cols-1 gap-1 mb-1 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((department, i) => (
            <div
              onClick={() => window.location.href = department.link}
              key={i}
              className="p-4 border grid items-center justify-center cursor-pointer px-10 text-white text-center h-[15rem] card-depa"
            //   style={{
            //     backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${department.cover})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center'
            //   }}
            >
              <h3 className="text-xl font-bold">{department.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
