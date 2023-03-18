import React, { Suspense, lazy } from 'react'

const Projects = () => {
  
  const ProjectCards = lazy(() => import("../../components/ProjectCards"));

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