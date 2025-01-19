"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { createDepartment } from "@/services/dep.service";
import { ICourse } from "@/infra/interfaces/course.interface";

interface DepartmentDirector {
    name: string;
    picture: File | null;
}

interface DepartmentFormValues {
    name: string;
    catalog_link: string;
    department_cover: File | null;
    departmentDirector: DepartmentDirector;
    courses: ICourse[];
}

const departmentSchema = Yup.object().shape({
    name: Yup.string().required("Department name is required"),
    catalog_link: Yup.string().url("Must be a valid URL").required("Catalog link is required"),
    department_cover: Yup.mixed().required("Department cover image is required"),
    departmentDirector: Yup.object().shape({
        name: Yup.string().required("Director's name is required"),
        picture: Yup.mixed().required("Director's picture is required"),
    }),
    courses: Yup.array()
        .of(
            Yup.object().shape({
                course: Yup.string().required("Course name is required"),
                duration: Yup.number().required("Duration is required").positive().integer(),
                level: Yup.string().required("Course level is required"),
                short_detail: Yup.string().required("Short detail is required"),
                slug: Yup.string().required("Slug is required"),
                long_description: Yup.string().required("Description is required"),
                benefits: Yup.array().of(Yup.string().required("Each benefit is required")),
                shift: Yup.object().shape({
                    morning: Yup.boolean(),
                    afternoon: Yup.boolean(),
                    evening: Yup.boolean(),
                }),
                course_cover: Yup.mixed().required("Course cover image is required"),
                entryProfile: Yup.array().of(Yup.string().required("Entry profile is required")),
                outProfile: Yup.array().of(Yup.string().required("Out profile is required")),
                additional_courses: Yup.array().of(
                    Yup.object().shape({
                        course: Yup.string().required("Additional course name is required"),
                        duration: Yup.number().positive().integer(),
                    })
                ),
                years: Yup.array().of(
                    Yup.object().shape({
                        year: Yup.number().required("Year is required").positive().integer(),
                        semesters: Yup.array().of(
                            Yup.object().shape({
                                semester: Yup.number().required("Semester number is required").positive().integer(),
                                subjects: Yup.array().of(
                                    Yup.object().shape({
                                        name: Yup.string().required("Subject name is required"),
                                        workload: Yup.number().required("Workload is required").positive().integer(),
                                    })
                                ),
                            })
                        ),
                    })
                ),
            })
        )
        .required("At least one course is required"),
});

const DepartmentForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    return (
        <div className="py-32">
            <Formik
                initialValues={{
                    name: "",
                    catalog_link: "",
                    department_cover: null,
                    departmentDirector: { name: "", picture: null },
                    courses: [],
                }}
                validationSchema={departmentSchema}
                onSubmit={async (values: DepartmentFormValues, { resetForm }: FormikHelpers<any>) => {
                    setLoading(true);
                    try {
                        const formData = new FormData();
                        formData.append("data", JSON.stringify(values));
                        if (values.department_cover) formData.append("department_cover", values.department_cover);
                        if (values.departmentDirector.picture)
                            formData.append("departmentDirector_picture", values.departmentDirector.picture);

                        for (const course of values.courses) {
                            if (course.course_cover) formData.append("course_cover", course.course_cover);
                        }

                        const response = await createDepartment(formData);
                        setSuccessMessage("Department created successfully!");
                        resetForm();
                    } catch (error) {
                        console.error("Error creating department:", error);
                    } finally {
                        setLoading(false);
                    }
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form className="max-w-4xl p-8 mx-auto space-y-6 bg-white rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold text-gray-800">Create Department</h1>

                        {/* Department Name */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Department Name</label>
                            <Field
                                name="name"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-sm text-red-500"
                            />
                        </div>

                        {/* Catalog Link */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Catalog Link</label>
                            <Field
                                name="catalog_link"
                                type="url"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage
                                name="catalog_link"
                                component="div"
                                className="text-sm text-red-500"
                            />
                        </div>

                        {/* Department Cover */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Department Cover</label>
                            <input
                                name="department_cover"
                                type="file"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:bg-gray-50 file:hover:bg-gray-100"
                                onChange={(event) =>
                                    setFieldValue("department_cover", event.target.files ? event.target.files[0] : "")
                                }
                            />
                            <ErrorMessage
                                name="department_cover"
                                component="div"
                                className="text-sm text-red-500"
                            />
                        </div>

                        {/* Director's Name */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Directors Name</label>
                            <Field
                                name="departmentDirector.name"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <ErrorMessage
                                name="departmentDirector.name"
                                component="div"
                                className="text-sm text-red-500"
                            />
                        </div>

                        {/* Director's Picture */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Directors Picture</label>
                            <input
                                name="departmentDirector.picture"
                                type="file"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:bg-gray-50 file:hover:bg-gray-100"
                                onChange={(event) =>
                                    setFieldValue("departmentDirector.picture", event.target.files && event.target.files[0])
                                }
                            />
                            <ErrorMessage
                                name="departmentDirector.picture"
                                component="div"
                                className="text-sm text-red-500"
                            />
                        </div>

                        {/* Courses */}
                        <FieldArray
                            name="courses"
                            render={(arrayHelpers) => (
                                <div className="space-y-4">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            arrayHelpers.push({
                                                course: "",
                                                duration: 0,
                                                level: "",
                                                short_detail: "",
                                                slug: "",
                                                long_description: "",
                                                benefits: [],
                                                shift: { morning: false, afternoon: false, evening: false },
                                                course_cover: null,
                                                entryProfile: [],
                                                outProfile: [],
                                                additional_courses: [],
                                                years: [],
                                            })
                                        }
                                        className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                                    >
                                        Add Course
                                    </button>
                                    {values.courses.map((course: any, index) => (
                                        <div key={index} className="p-4 space-y-2 border rounded-lg shadow-sm">
                                            <Field
                                                name={`courses.${index}.course`}
                                                placeholder="Course Name"
                                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name={`courses.${index}.course`}
                                                component="div"
                                                className="text-sm text-red-500"
                                            />

                                            <Field
                                                name={`courses.${index}.duration`}
                                                placeholder="Course Duration"
                                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name={`courses.${index}.duration`}
                                                component="div"
                                                className="text-sm text-red-500"
                                            />

                                            <Field
                                                name={`courses.${index}.level`}
                                                placeholder="Course Level"
                                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name={`courses.${index}.level`}
                                                component="div"
                                                className="text-sm text-red-500"
                                            />

                                            <Field
                                                name={`courses.${index}.short_detail`}
                                                placeholder="Short Detail"
                                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name={`courses.${index}.short_detail`}
                                                component="div"
                                                className="text-sm text-red-500"
                                            />

                                            <Field
                                                name={`courses.${index}.slug`}
                                                placeholder="Slug"
                                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name={`courses.${index}.slug`}
                                                component="div"
                                                className="text-sm text-red-500"
                                            />

                                            <Field
                                                as="textarea"
                                                name={`courses.${index}.long_description`}
                                                placeholder="Long Description"
                                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            />
                                            <ErrorMessage
                                                name={`courses.${index}.long_description`}
                                                component="div"
                                                className="text-sm text-red-500"
                                            />

                                            {/* Benefits */}
                                            <FieldArray
                                                name={`courses.${index}.benefits`}
                                                render={(benefitHelpers) => (
                                                    <div className="space-y-2">
                                                        {course.benefits.map((_benefit: any, bIndex: number) => (
                                                            <div key={bIndex} className="flex items-center space-x-2">
                                                                <Field
                                                                    name={`courses.${index}.benefits.${bIndex}`}
                                                                    placeholder="Benefit"
                                                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => benefitHelpers.remove(bIndex)}
                                                                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        ))}
                                                        <button
                                                            type="button"
                                                            onClick={() => benefitHelpers.push("")}
                                                            className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                                                        >
                                                            Add Benefit
                                                        </button>
                                                    </div>
                                                )}
                                            />

                                            {/* Shift */}
                                            <div className="flex space-x-4">
                                                {["morning", "afternoon", "evening"].map((shift) => (
                                                    <label key={shift} className="flex items-center space-x-2">
                                                        <Field
                                                            type="checkbox"
                                                            name={`courses.${index}.shift.${shift}`}
                                                        />
                                                        <span>{shift.charAt(0).toUpperCase() + shift.slice(1)}</span>
                                                    </label>
                                                ))}
                                            </div>

                                            {/* Course Cover */}
                                            <Field
                                                type="file"
                                                name={`courses.${index}.course_cover`}
                                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            />

                                            {/* Entry Profile */}
                                            <FieldArray
                                                name={`courses.${index}.entryProfile`}
                                                render={(entryHelpers) => (
                                                    <div className="space-y-2">
                                                        {course.entryProfile.map((_: any, eIndex: number) => (
                                                            <div key={eIndex} className="flex items-center space-x-2">
                                                                <Field
                                                                    name={`courses.${index}.entryProfile.${eIndex}`}
                                                                    placeholder="Entry Profile"
                                                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => entryHelpers.remove(eIndex)}
                                                                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        ))}
                                                        <button
                                                            type="button"
                                                            onClick={() => entryHelpers.push("")}
                                                            className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                                                        >
                                                            Add Entry Profile
                                                        </button>
                                                    </div>
                                                )}
                                            />

                                            {/* Output Profile */}
                                            <FieldArray
                                                name={`courses.${index}.outProfile`}
                                                render={(outHelpers) => (
                                                    <div className="space-y-2">
                                                        {course?.outProfile.map((_output: any, oIndex: number) => (
                                                            <div key={oIndex} className="flex items-center space-x-2">
                                                                <Field
                                                                    name={`courses.${index}.outProfile.${oIndex}`}
                                                                    placeholder="Output Profile"
                                                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => outHelpers.remove(oIndex)}
                                                                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        ))}
                                                        <button
                                                            type="button"
                                                            onClick={() => outHelpers.push("")}
                                                            className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                                                        >
                                                            Add Output Profile
                                                        </button>
                                                    </div>
                                                )}
                                            />
                                            <FieldArray
                                                name={`courses.${index}.years`}
                                                render={(yearHelpers) => (
                                                    <div className="space-y-2">
                                                        {course.years.map((year: { semesters: any[]; }, yIndex: number) => (
                                                            <div key={yIndex} className="flex items-center space-x-2">
                                                                {/* Campo para o ano */}
                                                                <Field
                                                                    name={`courses.${index}.years.${yIndex}.year`}
                                                                    placeholder="Year"
                                                                    type="number"
                                                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                />

                                                                {/* Para os semestres */}
                                                                <FieldArray
                                                                    name={`courses.${index}.years.${yIndex}.semesters`}
                                                                    render={(semesterHelpers) => (
                                                                        <div className="space-y-1">
                                                                            {year.semesters.map((_semester: any, sIndex: number) => (
                                                                                <div key={sIndex} className="flex items-center space-x-2">
                                                                                    <Field
                                                                                        name={`courses.${index}.years.${yIndex}.semesters.${sIndex}.semester`}
                                                                                        placeholder="Semester"
                                                                                        type="number"
                                                                                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                                    />
                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={() => semesterHelpers.remove(sIndex)}
                                                                                        className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                                                                    >
                                                                                        Remove Semester
                                                                                    </button>
                                                                                </div>
                                                                            ))}
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => semesterHelpers.push({ semester: 1, subjects: [] })}
                                                                                className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                                                                            >
                                                                                Add Semester
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                />

                                                                <button
                                                                    type="button"
                                                                    onClick={() => yearHelpers.remove(yIndex)}
                                                                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                                                >
                                                                    Remove Year
                                                                </button>
                                                            </div>
                                                        ))}
                                                        <button
                                                            type="button"
                                                            onClick={() => yearHelpers.push({ year: new Date().getFullYear(), semesters: [] })}
                                                            className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                                                        >
                                                            Add Year
                                                        </button>
                                                    </div>
                                                )}
                                            />

                                        </div>
                                    ))}
                                </div>
                            )}
                        />

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-6 py-3 text-white font-medium rounded-lg shadow-md transition ${loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                            {successMessage && (
                                <p className="mt-4 font-medium text-green-600">{successMessage}</p>
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default DepartmentForm;
