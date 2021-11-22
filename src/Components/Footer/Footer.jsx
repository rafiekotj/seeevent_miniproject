import './Footer.css'
// import { Typography, Icon, Stack } from '@mui/material';
// import FacebookRounded from '@mui/icons-material/FacebookRounded';
import logoFooter from '../../Assets/SeeEventLogo(4).svg'
import facebook from '../../Assets/Facebook.svg'
import instagram from '../../Assets/Instagram.svg'
import twitter from '../../Assets/Twitter.svg'
import youtube from '../../Assets/Youtube.svg'

function Footer() {

    return (
        <div className="footer">
            <div className="container">
                <div className="left">
                    <div className="logo">
                        <img className="icon" src={logoFooter} alt="Logo" />
                        <p>SeeEvent</p>
                    </div>

                    <div className="desc">
                        <p>
                            SeeEvent is a platform where you can create or find an amazing events around the world.
                        </p>
                    </div>

                    <div className="follow">
                        <p>Follow Us on</p>
                        <div className="socmed">
                            <img src={facebook} alt="logo facebook"/>
                            <img src={instagram} alt="logo facebook"/>
                            <img src={twitter} alt="logo facebook"/>
                            <img src={youtube} alt="logo facebook"/>
                        </div>

                        <div className="copyright">
                            <p>© 2021 SeeEvent All rights reserved.</p>
                        </div>
                    </div>
                </div>
                <div className="mid">
                    <h5>Links</h5>
                    <p>Home</p>
                    <p>Explore</p>
                    <p>My Events</p>
                    <p>Bookmarks</p>
                </div>
                <div className="mid_2">
                    <h5>Top Categories</h5>
                    <p>Design</p>
                    <p>Photography</p>
                    <p>Development</p>
                    <p>Marketing</p>
                </div>
                <div className="right">
                    <h5>Contact Us</h5>
                    <p>Indonesia Jl. Planet Namek No. 123, Surabaya Telp : 083849420146 Email : Johndoe@seeevent.com</p>
                    <div className='bottom'>
                        <h6>Privacy Policy</h6>
                        <h6>Terms of Service</h6>
                        <h6>Helps</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;