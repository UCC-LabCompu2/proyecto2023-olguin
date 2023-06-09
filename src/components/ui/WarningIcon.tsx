import { UiContext } from "@/context/ui";
import { useContext } from "react";


/*
  Componente que se encarga de renderizar el icono de advertencia en el componente chatDescription para indicar las limitaciones de la aplicacion
  @returns {React.ReactElement} - Componente WarningIcon
*/
export const WarningIcon = () => {

  const { theme } = useContext(UiContext)

  return (
    <>
      <svg
        className={`h-6 w-6 mb-5 ${theme === 'dark' ? '' : 'text-gray-950'}`}
        stroke='currentColor'
        fill='none'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'></path>
        <line x1='12' y1='9' x2='12' y2='13'></line>
        <line x1='12' y1='17' x2='12.01' y2='17'></line>
      </svg>
    </>
  );
};
