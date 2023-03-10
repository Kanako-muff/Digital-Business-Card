import faceImg from "../../images/face-img.png"
import emailIcon from "../../images/icon_email.png"
import linkedInIcon from "../../images/icon_linkedIn.png"
import twitterIcon from "../../images/icon_twitter.png"
import facebookIcon from "../../images/icon_facebook.png"
import instagramIcon from "../../images/icon_instagram.png"
import githubIcon from "../../images/icon_github.png"
import "./Card.css"

function Card() {
    return(
        <section className="card">
            <img className="card--img" src={faceImg} alt="" />
            <div className="card--content">
                <h1 className="card--content--name">Jane Doe</h1>
                <p className="card--content--title">Frontend Developer</p>
                <p className="card--content--website">janedoe.website</p>
                <div className="card--content--buttons">
                    <button className="card--content--buttons--item email" type="button">
                        <img src={emailIcon} width="16px" />
                        Email
                    </button>
                    <button className="card--content--buttons--item linkedin" type="button">
                        <img src={linkedInIcon} width="16px" />
                        LinkedIn
                    </button>
                </div>
                <div className="card--content--sentence">
                    <h2 className="card--content--h2">About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2 className="card--content--h2">Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <div className="card--link">
                <img src={twitterIcon} width="25px" />
                <img src={facebookIcon} width="25px" />
                <img src={instagramIcon} width="25px" />
                <img src={githubIcon} width="25px" />
            </div>
        </section>
    )
}

export default Card;