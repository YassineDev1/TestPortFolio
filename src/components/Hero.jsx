import { styles } from "../styles";
import { MyPicture } from "../assets";

const Hero = () => {
  return (
    <section className={`relative flex flex-col w-full h-screen mx-auto`}>
      <div
        className={`flex justify-center items-center flex-col py-20 max-w-7xl mx-auto ${styles.paddingX} `}
      >
        <div className="flex items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-blue-600" />
            <div className="w-1 sm:h-80 h-40 bg-blue-600" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-blue-600">Yassine El Mherzi</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Welcome to my portfolio website! I am a highly skilled{" "}
              <br className="sm:block hidden" />
              and experienced ReactJS developer and full stack web developer
              with a proven track record of delivering high-quality, scalable
              and user-friendly web applications.
            </p>
          </div>
        </div>
        <img className="h-96 w-auto rounded-full " src={MyPicture} alt="" />
      </div>
    </section>
  );
};

export default Hero;
