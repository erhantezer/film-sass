import React, { Suspense, lazy } from 'react'
import Loading from '../../components/Loading';

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
      <main>
        <div>
          <Suspense fallback={<Loading />}> 
            <ProjectCards/>
          </Suspense>
        </div>
      </main>
    </>
  )
}

export default Projects