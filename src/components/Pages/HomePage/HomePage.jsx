import s from './homePage.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={s.homePageBody}>
        <div className={s.homePageImg}></div>
        <div> Welcome to the phone-book!</div>
      </div>
    </>
  );
};

export default HomePage;
