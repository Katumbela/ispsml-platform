import { getDepartments } from '@/services/dep.service';
import { IDepartment } from '@/infra/interfaces/course.interface';

export async function generateStaticParams() {
    const departments = await getDepartments();
    return departments.map((department: IDepartment) => ({
        id: department.id ? department.id.toString() : '0',
    }));
}

export default generateStaticParams;
