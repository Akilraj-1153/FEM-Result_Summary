
import './App.css';
import './components/ResultSummary.css';
import rec from './icon-reaction.svg';
import mem from './icon-memory.svg';
import ver from './icon-verbal.svg';
import vis from './icon-visual.svg';

function App() {
  return (
    <div className='outercon'>
    <div className='leftcon'>
        <div className='LIcon'>
            <p style={{color:"lightGray",fontWeight:"bold"}}>Your Result</p>
            <div className='score-card'style={{color:"white"}}>
                <h1 style={{fontSize:"60px",paddingTop:"30px"}}>76</h1>
                <p style={{marginTop:"-40px",fontWeight:"none",fontSize:"14px",color:"lightgrey"}}>0f 100</p>
            </div>
            <p style={{fontSize:"30px",color:"white",fontWeight:"bold"}}>Great</p>
            <p style={{fontSize:"13px",width:"75%",margin:"0 auto",marginTop:"-15px",color:"lightgray",fontWeight:"none"}}>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    </div>
    <div className='rightcon'>
        <div className='RIcon'>
            <p style={{marginLeft:"20px"}}>Summary</p>
            <div>
                <div className='score-summary' id="red" >
                  <img src={rec} alt="rec"></img>
                    <p className='tag'>Reaction</p>
                    <p className='marks' style={{textAlign:"right"}}><span style={{color:"black"}}>80</span> / 100</p>
                </div>
                <div className='score-summary' id="yellow" >
                  <img src={mem} alt="mem"></img>
                    <p className='tag'>Memory</p>
                    <p className='marks' style={{textAlign:"right"}}><span style={{color:"black"}}>92</span> / 100</p>
                </div>
                <div className='score-summary' id="green" >
                  <img src={ver} alt="ver"></img>
                    <p className='tag'>Verbal</p>
                    <p className='marks' style={{textAlign:"right"}}><span style={{color:"black"}}>61</span> / 100</p>
                </div>
                <div className='score-summary' id="blue" >
                  <img src={vis} alt='vis'></img>
                    <p className='tag'>Visual</p>
                    <p className='marks' style={{textAlign:"right"}}><span style={{color:"black"}}>72</span> / 100</p>
                </div>
            </div>
            <button type='submit'>Continue</button>
        </div>
    </div>
  </div>
  );
}

export default App;
