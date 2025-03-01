/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Formik, Field, FieldArray, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

const AddCourseForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
    const initialValues = {
        courses: [
            {
                course: '',
                duration: '',
                level: '',
                short_detail: '',
                slug: '',
                long_description: '',
                benefits: [''],
                shift: { morning: false, afternoon: false, evening: false },
                course_cover: null,
                entryProfile: [''],
                outProfile: [''],
                years: [
                    {
                        year: new Date().getFullYear(),
                        semesters: [{ semester: 1, subjects: [] }],
                    },
                ],
            },
        ],
    };

    const validationSchema = Yup.object().shape({
        courses: Yup.array().of(
            Yup.object().shape({
                course: Yup.string().required('Course name is required'),
                duration: Yup.string().required('Course duration is required'),
                level: Yup.string().required('Course level is required'),
                slug: Yup.string().required('Slug is required'),
                benefits: Yup.array().of(Yup.string().required('Benefit cannot be empty')),
                entryProfile: Yup.array().of(Yup.string().required('Entry profile cannot be empty')),
                outProfile: Yup.array().of(Yup.string().required('Output profile cannot be empty')),
                years: Yup.array().of(
                    Yup.object().shape({
                        year: Yup.number().required('Year is required'),
                        semesters: Yup.array().of(
                            Yup.object().shape({
                                semester: Yup.number().required('Semester is required'),
                            })
                        ),
                    })
                ),
            })
        ),
    });

    const handleSubmit = (values: any) => {

        // console.log(values);
        onSubmit(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ values }) => (
                <Form className="space-y-6">
                    {values.courses.map((course, index) => (
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
                                        {course.benefits.map((_benefit, bIndex) => (
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
                                            onClick={() => benefitHelpers.push('')}
                                            className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                                        >
                                            Add Benefit
                                        </button>
                                    </div>
                                )}
                            />

                            {/* Shift */}
                            <div className="flex space-x-4">
                                {['morning', 'afternoon', 'evening'].map((shift) => (
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
                                        {course.entryProfile.map((_, eIndex) => (
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
                                            onClick={() => entryHelpers.push('')}
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
                                        {course.outProfile.map((_, oIndex) => (
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
                                            onClick={() => outHelpers.push('')}
                                            className="px-4 py-2 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700"
                                        >
                                            Add Output Profile
                                        </button>
                                    </div>
                                )}
                            />

                            {/* Years and Semesters */}
                            <FieldArray
                                name={`courses.${index}.years`}
                                render={(yearHelpers) => (
                                    <div className="space-y-2">
                                        {course.years.map((year, yIndex) => (
                                            <div key={yIndex} className="flex items-center space-x-2">
                                                <Field
                                                    name={`courses.${index}.years.${yIndex}.year`}
                                                    placeholder="Year"
                                                    type="number"
                                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => yearHelpers.remove(yIndex)}
                                                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                                >
                                                    Remove
                                                </button>

                                                {/* Semesters */}
                                                <FieldArray
                                                    name={`courses.${index}.years.${yIndex}.semesters`}
                                                    render={(semesterHelpers) => (
                                                        <div className="space-y-2">
                                                            {year.semesters.map((semester, sIndex) => (
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
                                                                        Remove
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
                    <div className="flex justify-end">
                        <button type="submit" className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddCourseForm;
