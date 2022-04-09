
import './App.css';
import img from './assets/diegoc.png';
function App() {
  return (
    <>
      <div className='main-container'>
        <div className='left-container'>
          <p className='no-margin' >My name is</p>
          <h1 className='no-margin'>DIEGO CARRILLO</h1>
          <p className='no-margin' >SOFTWARE DEVELOPER</p>
        </div>
        <div className='side-container'>
          <div className='img-wrapper'>
            <img className='image' src={img} alt='me'></img>
          </div>
        </div>
      </div>
      <main className='body-container'>
        <section>
          'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? '
        </section>
        <section>
          'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? '
        </section>
        <section>
        'All cats are loved cuz they are cute and pretty if you know, you know, ya get me? '
        </section>
      </main>
    </>

  );
}

export default App;
