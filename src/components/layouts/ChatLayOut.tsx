import { FC, MouseEvent, useContext } from 'react';
import Head from 'next/head';
import { SideBar } from '../index';
import { UiContext } from '@/context/ui';
import { MenuIcon } from '../ui/icons/MenuIcon';


interface ChatLayOutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  fullUrlImage?: string;
}

/* 
  Componente que contiene el layout de la pagina de chat
  @param {React.ReactNode} children - Componentes hijos
  @param {string} title - Titulo de la pagina
  @param {string} description - Descripcion de la pagina
  @param {string} fullUrlImage - Url de la imagen para compartir en redes sociales
*/

export const ChatLayOut: FC<ChatLayOutProps> = ({ title,description,fullUrlImage,children }) => {
  const { theme, sidebar, openSidebar, closeSidebar } = useContext(UiContext);

  /*
    Funcion que se ejecuta al abrir el sidebar y llama a la funcion openSidebar del context UiContext
    @param {MouseEvent<HTMLButtonElement | HTMLDivElement>} e - Evento del boton
    @returns {void} - No retorna nada
  */
  const onOpenSidebar = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    openSidebar();
  };

  /* 
    Funcion que se ejecuta al cerrar el sidebar y llama a la funcion closeSidebar del context UiContext
    @param {MouseEvent<HTMLButtonElement | HTMLDivElement>} e - Evento del boton
    @returns {void} - No retorna nada
  */
  const onCloseSidebar = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    closeSidebar();
  };
  return (
    <>
      <Head>
        <title>{title || 'Chat App'}</title>
        <meta name='author' content='Guido Olguin' />
        <meta name='keywords' content='Chat, App, Next.js' />
        <meta name='robots' content='index, follow' />
        <meta name='description' content={description || 'Chat App'} />
        <meta name='og:title' content={title || 'Chat App'} />
        <meta name='og:description' content={description || 'Chat App'} />
        {fullUrlImage && <meta name='og:image' content={fullUrlImage} />}
      </Head>

      <main
        className={`w-full sm:h-screen relative ${
          theme === 'dark' ? 'bg-gptgray' : 'bg-gray-50'
        }`}
      >
        <div className='sm:hidden block absolute left-2 top-2'>
          <button aria-label='Menu' onClick={onOpenSidebar}>
            <MenuIcon />
          </button>
        </div>
        <aside
          className={`${sidebar ? 'block' : 'hidden'} sm:block absolute z-10`}
        >
          <SideBar />
        </aside>
        <div onClick={onCloseSidebar} className={`${sidebar ? 'blur-sm' : ''}`}>
          {children}
        </div>
      </main>
    </>
  );
};
