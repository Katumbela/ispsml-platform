import type { IYear } from '@/infra/interfaces/course.interface';
import React from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface YearAccordionProps {
  year: IYear;
  isOpen: boolean;
  toggleYear: (year: number) => void;
}

const YearAccordion: React.FC<YearAccordionProps> = ({ year, isOpen, toggleYear }) => {
  return (
    <div className=''>
      <h2 className={cn("py-4 my-0 text-xl font-bold  transition-all cursor-pointer text-primary hover:bg-slate-100/80 bg-slate-50 container flex gap-3")} onClick={() => toggleYear(year.year)}>
        {
          !isOpen ? <FaPlus className='my-auto text-xl' /> : <FaMinus className='my-auto text-xl' />
        }
        {year.year}º ano

      </h2>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ overflow: 'hidden' }}
      >
        {isOpen && (
          <>
            {year.semesters.map(semester => (
              <div className='mb-10' key={semester.semester}>
                <div className="container py-2 text-md bg-slate-200/50">   {semester.semester}º Semestre</div>
                <table className='table w-full table-fixed text-start text-balance'>
                  <thead>
                    <tr className='container py-6 font-medium bg-slate-100/60'>
                      <th className='px-4 py-2 text-start'>Disciplina</th>
                      <th className='px-4 py-2 text-start'>Carga Horária</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.subjects.map(subject => (
                      <tr key={subject.name} className='text-sm transition-all hover:bg-slate-100'>
                        <td className='px-4 py-1 '>{subject.name}</td>
                        <td className='px-4 py-1 '>{subject.workload} hours</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </>
        )}
      </motion.div>
    </div >
  );
};

export default YearAccordion;