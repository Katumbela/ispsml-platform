// import { routes } from "@/infra/routes.vars";
import { FaAngleRight } from "react-icons/fa";

export interface IButtonBlue {
    text: string
    onclick?: () => void
}

export default function ButtonBlueComponent({ text, onclick }: IButtonBlue) {
    return (
        <button
            onClick={onclick}
            className="flex gap-2 py-5 mt-10 text-white uppercase transition-all border-2 border-primary bg-primary px-7 hover:bg-white hover:text-primary ">
            <span className="my-auto">{text}</span>
            <FaAngleRight className="my-auto" />
        </button>
    )
}