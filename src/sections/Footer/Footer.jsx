import style from './FooterStyle.module.css'

function Footer () {
    return (
        <section id="footer" className={style.container}>
            <p>
                &copy; 2024 Song Van Nguyen. <br />
                All rights reserved
            </p>
        </section>
    )
}

export default Footer;