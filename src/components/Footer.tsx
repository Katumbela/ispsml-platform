/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { images } from '@/assets';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="pt-20 text-white bg-[#212121]">
            <div className="grid grid-cols-1 gap-8 mx-auto containers md:grid-cols-4">
                <div>
                    <h3 className="mb-4 text-xl font-semibold">{t('footer.contact')}</h3>
                    <p>{t('footer.phone1')}</p>
                    <p>{t('footer.email')}</p>
                    <p>{t('footer.addressLine2')}</p>
                    <p>{t('footer.city')}</p>
                    <br />
                    <div className="flex gap-3">
                        <FaFacebook className="my-auto" />
                        <FaLinkedin className="my-auto" />
                        {/* <FaXTwitter className="my-auto" /> */}
                        {/* <FaTiktok className="my-auto" /> */}
                        <FaInstagram className="my-auto" />
                        {/* <FaYoutube className="my-auto" /> */}
                    </div>
                </div>
                <div>
                    <h3 className="mb-4 text-xl font-semibold">{t('footer.usefulLinks')}</h3>
                    <ul>
                        <li>
                            <a href="/my-portal" className="hover:underline">
                                {t('navbar.studyAtISPSML')}
                            </a>
                        </li>
                        <li>
                            <a href="/moodle" className="hover:underline">
                                {t('navbar.academicServices')}
                            </a>
                        </li>
                        <li>
                            <a href="/vacancies" className="hover:underline">
                                Vagas
                            </a>
                        </li>
                        <li>
                            <a href="/student-webmail" className="hover:underline">
                                Webmail do Estudante
                            </a>
                        </li>
                        <li>
                            <a href="https://ispsml.forlearn.ao/pt" target='_blank' className="hover:underline">
                                Intranet ISPSML
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 text-xl font-semibold">{t('footer.researchInnovation')}</h3>
                    <ul>
                        <li>
                            <a href="/research-services" className="hover:underline">
                                {t('navbar.research.policy')}
                            </a>
                        </li>
                        <li>
                            <a href="/journals" className="hover:underline">
                                Jornais ISPSML
                            </a>
                        </li>
                        <li>
                            <a href="/repository" className="hover:underline">
                                Repositório ISPSML
                            </a>
                        </li>
                        <li>
                            <a href="/press" className="hover:underline">
                                Imprensa ISPSML
                            </a>
                        </li>
                        <li>
                            <a href="/grants" className="hover:underline">
                                Aplicação de Subsídios
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://drive.google.com/file/d/18xyjGSo_-a5MYvZPAZK-3lyNR0a4yBO-/view?usp=sharing"
                                className="hover:underline"
                            >
                                Calendário ISPSML
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 text-xl font-semibold">{t('footer.extension')}</h3>
                    <ul>
                        <li>
                            <a href="/research-services" className="hover:underline">
                                {t('navbar.research.policy')}
                            </a>
                        </li>
                        <li>
                            <a href="/journals" className="hover:underline">
                                Jornais ISPSML
                            </a>
                        </li>
                        <li>
                            <a href="/repository" className="hover:underline">
                                Repositório ISPSML
                            </a>
                        </li>
                        <li>
                            <a href="/press" className="hover:underline">
                                Imprensa ISPSML
                            </a>
                        </li>
                        <li>
                            <a href="/grants" className="hover:underline">
                                Aplicação de Subsídios
                            </a>
                        </li>
                        <li>
                            <a
                                target='_blank'
                                href="https://drive.google.com/file/d/18xyjGSo_-a5MYvZPAZK-3lyNR0a4yBO-/view?usp=sharing"
                                className="hover:underline"
                            >
                                Calendário ISPSML
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* <h3 className="mb-4 text-xl font-semibold">{t('footer.calendar')}</h3>
                    <button className="w-full py-3 text-sm transition-all bg-primary hover:bg-primary-dark">
                        {t('footer.viewCalendar')}
                    </button> */}
                </div>
            </div>
            <div className="py-4 mt-10 text-start bg-primary">
                <div className="flex justify-between w-full text-xs containers">
                    <div className="w-full my-auto text-start">
                        <span className='my-auto'>&copy;{t('footer.allRightsReserved')}</span>
                    </div>
                    <div className="flex justify-end w-full gap-2 text-end">
                        <span className='flex gap-1.5 my-auto '>Developed by</span>
                        <a title='Clique para saber mais' href="https://www.m2jtecnologia.ao" target='_blank' className="my-a"><Image alt='' className='h-[1.8em] my-auto w-[3em]' src={images.logos.m2j_logo_p_white} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
