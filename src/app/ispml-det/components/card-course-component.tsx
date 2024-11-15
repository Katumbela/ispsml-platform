"use client"
import type { ICourse } from "@/infra/interfaces/course.interface";
import { routes } from "@/infra/routes.vars";
import { FaAngleRight } from "react-icons/fa6";
interface CardCourseComponentProps {
  course: ICourse,
  department: string
}

export function CardCourseComponent({ course, department }: CardCourseComponentProps) {
  return (
    <div onClick={() => window.location.href = `${routes.VIEW_COURSE_ROUTE}/${department}/${course.slug}`} className="grid col-span-2 card-view-course w-[15vw] h-[30vh] items-center text-white bg-primary hover:bg-primary-dark cursor-pointer transition-all place-content-center">
      <div className="text-center whitespace-break-spaces">
        <h2 className="text-2xl mg-3">
          {course.course}
        </h2>
        <a href={`${routes.VIEW_COURSE_ROUTE}/${department}/${course.slug}`} className="justify-center hidden gap-1 text-xs underline transition-all ">
          <span className="my-auto">Ver programa</span>
          <FaAngleRight className="my-auto text-xs" />
        </a>
      </div>
    </div>
  )
}