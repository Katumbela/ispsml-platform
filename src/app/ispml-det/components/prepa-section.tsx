import { images } from "@/assets";

export function PrepaSection() {
  return (
    <div className="prepa-section bg-primary ">
      <div className="relative flex ">
        <div className="containers w-full grid place-content-center items-center ps-[3.9vw]">
          <div className='text-white '>
            <h2 className="text-4xl font-bold">
              Preparatorio Engenharias
            </h2>
            <br />
            <p>
              Nosso curso preparatório de engenharias é projetado para fornecer aos alunos uma base sólida nas disciplinas fundamentais da engenharia. Com foco em matemática, física e habilidades práticas, preparamos os alunos para os desafios acadêmicos e profissionais que encontrarão em suas futuras carreiras.
            </p>
          </div>
        </div>
        <div
          style={{ background: `url('${images.departImages.studying_group.src}') center center / cover no-repeat` }}

          className="w-full relative h-[60vh]">

        </div>
      </div>
    </div>

  )
}