import { UiContext } from "@/context/ui";
import { useContext } from "react";


/*
  Componente que se encarga de renderizar el icono del rayo en el componente chatDescription para indicar las capacidades de la aplicacion
  @returns {React.ReactElement} - Componente ThunderIcon
*/
export const ThunderIcon = () => {

  const { theme } = useContext(UiContext)

  return (
    <>
      <svg
        className={`h-6 w-6 mb-5 ${theme === 'dark' ? '' : 'text-gray-950'}`}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
        ></path>
      </svg>
    </>
  );
};
