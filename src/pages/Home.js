import HomeStyle from './Home.module.scss';
import avatar from '../avatar.svg';
function Home() {
  return (
    <div className={HomeStyle.Home}>
      <div className={HomeStyle.container}>
        <img src={avatar} className={HomeStyle.avatar} alt='avatar' />
        <p>
          Hi,
          <br />
          I am [name],
          <br />
          A [job name] in [company]
        </p>
      </div>
    </div>
  );
}

export default Home;