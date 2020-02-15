import React from 'react';
import logo from './logo.svg';
import './App.css';
import SarraIMG from './img1.jpg'
import danielIMG from './img2.jpg'
import mohsenIMG from './img3.jpg'
export default class App extends React.Component{

  state={
    name:"sarra",
   photo:SarraIMG,
   desc:"qwertyhujkldfsogfdsgdgf"
  }
  render(){
  return(
      <>
    <button onClick={()=>{this.setState({name:"sarra",photo:SarraIMG,desc:"qwertyhujkldfsogfdsgdgf"})}} >Sarra</button>
    <button onClick={()=>{this.setState({name:"daniel",photo:danielIMG,desc:"rdy,gjkhmfdpogwjefophaefpiuh"})}}>Daniel</button>
    <button onClick={()=>{this.setState({name:"Mohsen",photo:mohsenIMG,desc:"jtg0hiudf[ih"})}}>Mohsen</button>
  <h1>{this.state.name}</h1>
<img src={this.state.photo}></img>
  <p>{this.state.desc}</p>
  </>
    )
  }
}
