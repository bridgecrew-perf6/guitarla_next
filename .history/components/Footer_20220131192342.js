import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="contenedor">
          <nav className="">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>

          <p>Todos los derechos reservados</p>
          
          <ul>
            <li className={styles.list}>
              <i className={styles.iconoInsta}></i>
              <i className={styles.iconoFace}></i>
            </li>
          </ul>
          
      </div>
    </footer>
  )
}

export default Footer;
