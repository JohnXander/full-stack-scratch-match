import heroImg from "../assets/Hero.jpg"

const Hero = () => {
    return (
        <div>
            <img
                class="img-fluid rounded mx-auto d-block"
                src={heroImg} alt="Hero Image" />
        </div>
    )
}

export default Hero