import logo from './logo.svg';
import './App.css';

function App() {
  let name ={
    firstName: 'a.s.m',
    middleName: 'kudatul',
    lastName: 'kader'
  }
  let names =[
    'a.s.m',
    'kudatul',
    'kader'
  ]
  let history=[
    {firstName: 'a.s.m',middleName: 'kudatul',lastName: 'jamil'},
    {firstName: 'kudratul',middleName: 'fattah',lastName: 'ajmol'},
    {firstName: 'najmul',middleName: 'hasan',lastName: 'ahid'},
    {firstName: 'hasan',middleName: 'morshed',lastName: 'fahim'},
]
  let style={
    backgroundColor: 'red',
    fontSize: '20px',
    color:'green',
    textTransform:'uppercase'
  }
  let nayok =['razzzak','bappi','elias kanchon','alomgir']
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style} > my name is:{names[0]} {names[1]} {names[2]}</h1>
        <h1>{name.firstName} {name.middleName} {name.lastName}</h1>

        <New name={nayok[0]} address={names[0]}></New>
        <New name={nayok[1]} address={names[1]}></New>
        <New address="298,south goran" ></New>
        <FulName history={history[0]}></FulName>
        <FulName history={history[2]}></FulName>
        <BrotherName history={history[3]}></BrotherName>


        
        
        
      </header>
    </div>
  );
}
function New(props) {
  let style={
    fontSize: '20px',
    color:'green',
    textTransform:'uppercase',
    border:'1px solid red',
    margin:'10px'
  }
  return  <div style={style}>
            <h4>name ::: {props.name}</h4>
            <h4>address ::: {props.address}</h4>
          </div>
}
function FulName(props) {
  let style={
    fontSize: '20px',
    color:'green',
    textTransform:'uppercase',
    border:'1px solid red',
    margin:'10px'
  }
  return  <div style={style}>
            <p>nick name : {props.history.lastName}</p>
            <h3>full name : {props.history.firstName} {props.history.middleName}</h3>
          </div>
}
function BrotherName(props) {
  let style={
    fontSize: '20px',
    color:'green',
    textTransform:'uppercase',
    border:'1px solid red',
    margin:'10px'
  }
  let {firstName,lastName,middleName} =props.history
  return  <div style={style}>
            <p>nick name :{lastName} </p>
            <h3>full name :{firstName} {middleName} </h3>
          </div>
}

export default App;
