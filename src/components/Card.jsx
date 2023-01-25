
import assets from '../assets/image-qr-code.png'
import './styles.css'

export function Card() {
  return (
    <section className="card">
      <div className="container">
        <picture>
          <img src={assets} alt="qr code" />
        </picture>
        <div className="text-info">
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </section>
  )
}