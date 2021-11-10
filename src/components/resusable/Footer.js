import '../../css/footer.css'
import Logo from '../../assets/logo-dark.png'


const Footer = () => {
    return (
        <div className="Footer">
           <div className="footer-content">
                <img className="footer-logo" src={Logo} alt="logo image" />
                <div className="footer-links">
                    <p>Privacy Policy</p>
                    <span className="div space"/>
                    <p className="space">Contact</p>
                    <span className="div space"/>
                    <p className="space">Instagram</p>
                </div>
           </div>
        </div>
    )
}

export default Footer
