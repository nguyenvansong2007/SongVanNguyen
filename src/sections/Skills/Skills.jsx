import styles from './SkillStyle.module.css'
import SkillList from '../../common/SkillList'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import {useTheme} from '../../common/ThemeContext'


function Skills() {
    const {theme} = useTheme()
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML'></SkillList>
            <SkillList src={checkMarkIcon} skill='CSS'></SkillList>
            <SkillList src={checkMarkIcon} skill='JavaScript'></SkillList>
            <SkillList src={checkMarkIcon} skill='TypeScript'></SkillList>
            <SkillList src={checkMarkIcon} skill='Node'></SkillList>
        </div>

        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='React'></SkillList>
            <SkillList src={checkMarkIcon} skill='Angular'></SkillList>
            <SkillList src={checkMarkIcon} skill='Vue'></SkillList>
            <SkillList src={checkMarkIcon} skill='Tailwind CSS'></SkillList>
        </div>

        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Redux'></SkillList>
            <SkillList src={checkMarkIcon} skill='Webpack'></SkillList>
            <SkillList src={checkMarkIcon} skill='Git'></SkillList>
            <SkillList src={checkMarkIcon} skill='Jest'></SkillList>
            <SkillList src={checkMarkIcon} skill='Bootstrap'></SkillList>
        </div>
    </section>
  )
}

export default Skills