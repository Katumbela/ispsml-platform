"use client"
import type { ICourse, IDepartment } from "@/infra/interfaces/course.interface";
import { routes } from "@/infra/routes.vars";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
interface CardCourseComponentProps {
  course: ICourse,
  department: IDepartment
}

export function CardCourseComponent({ course, department }: CardCourseComponentProps) {
  return (
    // <div className="grid col-span-2 card-view-course  w-full h-[11rem] 2xl:h-[13rem] items-center text-white bg-primary hover:bg-primary-dark cursor-pointer transition-all place-content-center">
    <div onClick={() => window.location.href = `${routes.ORGANIC_UNIT_ROUTE}/${department.slug}/${course.slug}`} className="relative cursor-pointer card h-[19rem] group">
      <Image
        alt=""
        src={course.course_cover}
        layout="fill"
        objectFit="cover"
        className="inset-0 transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-300 bg-black bg-opacity-30 group-hover:bg-opacity-60">
        <h3 className="text-2xl font-semibold">{course.course}</h3>
        <a
          href={`${routes.ORGANIC_UNIT_ROUTE}/${department.slug}/${course.slug}`}
          className="p-1.5 mt-3 -mb-4 transition-opacity duration-300 border-2 opacity-0 group-hover:opacity-100"
        >
          <FaArrowRight className="text-3xl" />
        </a>
      </div>
      {/* </div> */}
    </div>
  )
}