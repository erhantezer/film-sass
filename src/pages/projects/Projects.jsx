import React, { Suspense, lazy } from 'react'
import "./Projects.scss";

const Projects = () => {
  
  const ProjectCards = lazy(() => import("../../components/ProjectCards"));
  //! lazy loading
  //! ProjectCards component'ını dinamik olarak yüklemiş olduk. Şimdi de bu component'ı render etme kısmına geçelim.

  //! Dinamik olarak yüklediğimiz component'ı render edip ve bu component yüklenene kadar geçen zamanda 
  //! yedek bir içerik gösterebilmemize yarayan React'ın özel component'ı Suspense'dir. 
  //! Suspense component'ı fallback adında tek bir props alır. Ve bu fallback props'u dinamik component'ımız 
  //! yüklenene kadar veya component yüklenmesinde herhangi bir sorun olduğu zaman render edilecek içeriği 
  //! belirttiğimiz yerdir.
  // <Suspense fallback={<div>Loadings.....</div>}>
  //   <ProjectCards />
  // </Suspense>
  //! return içine bunuda yazabiliriz

  return (
    <>
      <div className='project-bgImg-container'>
        <div className='projects__bio-image'>
          <h1>My Projects</h1>
        </div>
      </div>
      <main className='projects'>

        <div className='projects__items'>
          <Suspense fallback={<div>Loading....</div>}> 
            <ProjectCards/>
          </Suspense>
        </div>
        
      </main>
    </>
  )
}

export default Projects