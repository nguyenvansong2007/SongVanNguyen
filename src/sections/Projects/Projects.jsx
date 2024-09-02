import styles from './ProjectStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import viberr from '../../assets/viberr.png'
import freshburger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'

function Projects () {
  return (
    <section id="project" className={styles.container}>
        <h1 className="sectionTitle">Project</h1>
        <div className={styles.projectsConatiner}>
          <ProjectCard 
            src={viberr}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Viberr"
            p='Streaming'
            />

          <ProjectCard 
            src={freshburger}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Fresh Burger"
            p='Humburger Restaurant'
            />
            
          <ProjectCard 
            src={hipsster}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Hipsster"
            p='Glasses Shop'
            />
            
          <ProjectCard 
            src={fitlift}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="Fitness"
            p='Fitness App'
            />
        </div>
    </section>
  )
}

export default Projects