
import { ICourse, IDepartment } from "@/infra/interfaces/course.interface";
import { createSessionStore } from "sessionize-auth";


export const useAuthStore = createSessionStore<ICourse | IDepartment>({
  storageType: "cookies",
});
