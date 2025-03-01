'use client';

// import QuickLinks from '@/components/QuickLinks'; 
// import { coursesData } from '@/infra/data/courses-data';
import { StringUtils } from '@/utils';
// import { useParams } from 'next/navigation';
import { routes } from '@/infra/routes.vars';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import { CardCourseComponent } from '../components/card-course-component';
import { getDepartmentBySlug } from '@/services/dep.service';
import { useQuery } from 'react-query';
import { env } from '@/infra/env';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

const CSADepartment = ({ slug }: { slug: string }) => {

    // const { department: slug } = useParams() as { department: string };
    // const department = coursesData[department as string];

    const { data: department, isLoading: loading } = useQuery(['department', slug], () => getDepartmentBySlug(slug));

    // Remova o uso do useState e useEffect
    // const [department, setDepartment] = useState<IDepartment | null>(null);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     const fetchDep = async () => {
    //         const dep = await getDepartmentBySlug(slug);
    //         setDepartment(dep);
    //         setLoading(false);
    //     };
    //     fetchDep();
    // }, [slug]);

    if (loading) {
        return (
            <>
                <div className="h-24 mb-10 bg-gray-800" />
                <div className="p-4">
                    <div className="h-[25vh] bg-gray-200 animate-pulse mb-4"></div>
                    <div className="space-y-4">
                        <div className="flex my-10 gap-10">
                            <div className="h-[20vh] w-full bg-gray-200 animate-pulse"></div>
                            <div className="h-[20vh] w-full bg-gray-200 animate-pulse"></div>
                        </div>
                        <div className="h-6 bg-gray-200 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 animate-pulse"></div>
                    </div>
                    <div className="flex my-10 gap-4">
                        <div className="h-64 bg-gray-200 animate-pulse mt-4 w-64"></div>
                        <div className="h-64 bg-gray-200 animate-pulse mt-4 w-64"></div>
                    </div>
                </div>
            </>
        );
    }

    if (!department) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center bg-white rounded-lg shadow-lg p-14">
                    <h1 className="mb-4 text-3xl font-semibold">Departamento não encontrado</h1>
                    <p className="text-lg text-gray-700">
                        Desculpe, não conseguimos encontrar o departamento que você está procurando.
                    </p>
                    <div className="flex">
                    </div>
                    <button
                        onClick={() => window.location.href = routes.ORGANIC_UNIT_ROUTE}
                        className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                        Voltar para Unidades Orgânicas
                    </button>
                </div>
            </div>
        );
    }


    return (
        <>
            <head>
                <title>Ciências Sociais Aplicadas | ISPSML</title>
                <meta
                    name="description"
                    content="Saiba mais sobre o departamento de Ciências Sociais Aplicadas na ISPSML."
                />
                <meta name="keywords" content="Ciências Sociais Aplicadas, ISPSML, cursos" />
            </head>
            <div className="pt-24 pb-10 bg-primary-footer">
                <div className="containers">
                    <p className="pb-1 mb-5 text-white border-b">
                        <a href={routes.ORGANIC_UNIT_ROUTE}>Unidades Orgânicas</a> / {department.name}{' '}
                    </p>
                    <div className="sticky top-0 w-full bg-primary-footer">

                        <h1 className="text-4xl font-bold text-white">
                            {StringUtils.getFirstLetterOfEachWord(`Unidade ${department.name}`)}
                        </h1>
                        <span className="text-white text-md">Unidade de {department.name}</span>
                    </div>
                </div>
            </div>
            {/* <GlobalHero
                className="h-[400px] 2xl:h-[50px]"
                bottomBG="dark"
                bgImage={images.departImages.ciencias_sociais.src}
                title="Ciências Sociais Aplicadas"
            /> */}
            <main className="flex gap-1 ">
                <div className="relative w-full">
                    <Image
                        alt=""
                        src={department.department_cover || ""}
                        layout="fill"
                        objectFit="cover"
                        blurDataURL={env.BLUR_IMAGE}
                        placeholder='blur'
                    />
                </div>
                <div className="w-full 2xl:p-16 p-14">
                    <p className="mt-4">

                        <p dangerouslySetInnerHTML={{ __html: department?.description || "" }} />
                        <br />
                        <br />
                    </p>
                    <br />
                    <div className="flex">
                        <p className="flex w-full gap-4">
                            <Image alt=''
                                width={100}
                                height={100}
                                placeholder='blur'
                                className='w-[2em] my-auto border border-black rounded-full h-[2em]'
                                src={department.departmentDirector?.picture || ""}
                                blurDataURL={env.BLUR_IMAGE}
                            />
                            <span className="flex flex-col my-auto">
                                {department?.departmentDirector?.name}
                                <span className="text-xs">
                                    <strong className='text-gray-500'>Chefe do Dep. </strong>
                                </span>
                            </span>
                        </p>

                    </div>
                    <br />
                    <div>
                        <button onClick={() => window.location.href = department.catalog_link || ""} className="flex w-auto gap-2 py-5 text-white uppercase transition-all bg-black border-2 border-black mt- px-7 hover:bg-white hover:text-black ">
                            <span className="my-auto">Baixar Catalogo</span>
                            <FaAngleRight className="my-auto" />
                        </button>
                    </div>
                </div>
            </main>
            <div className="containers">
                <br />
                <br />
                <h2 className="mb-6 title">Cursos Destacados de {department.name}</h2>
                <p className="text-slate-500">
                    <i>
                        O departamento de {department.name} é dedicado a fornecer uma educação de alta qualidade e promover a pesquisa em diversas áreas. Nossos cursos são projetados para preparar os alunos para carreiras de sucesso e contribuir para o avanço do conhecimento. Junte-se a nós e descubra as oportunidades que o departamento de {department.name} tem a oferecer.
                    </i>
                </p>
                <br />
            </div>
            <div className="px-1 mb-1">
                <div className="grid gap-1.5 grid-cols-4">
                    {department?.courses?.map((course, i) => (
                        <CardCourseComponent key={i} course={course} department={department} />
                    ))}
                </div>
            </div>

            {/* <QuickLinks />  */}
        </>
    );
};

export default CSADepartment;

