import s from './homePage.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={s.homePageBody}>
        <div className={s.homePageImg}></div>
        <div className={s.text}> Welcome to the phone-book</div>
      </div>
    </>
  );
};

export default HomePage;
