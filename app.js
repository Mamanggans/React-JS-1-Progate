// react 1 persiapan 

class App extends React.Component {
    render(){
        return(
            <h1>Hello React</h1>
        )
    }
}
// react 2 perkenalan jsx 
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>Hello World</h1>
          <p>Ayo belajar React bersama-sama!</p>
        
      </div>
    );
  }
}

export default App;
// react 3 jsx gambar 
import React from 'react';

class App extends React.Component {
  render() { // ini sama kek return 
    return (
      <div>
        <h1>Hello World</h1>
        <p>Ayo belajar React bersama-sama!</p>
        <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png'/>
        
        
      </div>
    );
  }
}

export default App;
// react 4 jsx komponen 
import React from 'react'; // import react 

class App extends React.Component { // class akan menerima warisan react komponen
    render(){
      return (
      <h1>Hello React</h1>
    );
    }// ini jsx yang kw an nya html 
    
}
export default App; // export class 


// react 5 jsx dan js 
import React from 'react';

class App extends React.Component {
  render() {
    // Nyatakan constant name 
    const name = "Ninja Ken";
    
    // Nyatakan constant imgUrl 
    const imgUrl = "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/kentheninja.png";
    
    return (
      <div>
        {/* Gunakan constant name untuk menampilkan "Ninja Ken" */}
        <h1>{name}</h1>
        
        {/* Gunakan constant imgUrl untuk menampilkan gambar */}
        <img src={imgUrl}/>
        
      </div>
    );
  }
}

export default App;

// react 6 membuat tombol 
import React from 'react';

class App extends React.Component {
  render() {
    return (
    	<div>
    	  <h1>Halo, Ninja Ken!</h1>
            <button>Guru Domba</button>
            <button>Ninja Ken</button>  
    	</div>
    );
  }
}

export default App;

import React from 'react';


// react 7 event on click dengan console log 

class App extends React.Component {
  render() {
    return (
    	<div>
    	  <h1>Halo, Ninja Ken!</h1>
        {/* Tambahkan event onClick didalam tag button, yang berfungsi untuk mencetak nama di console */}
        <button onClick = {() => {console.log('Guru Domba')}}>Guru Domba</button>
        
        {/* Tambahkan event onClick didalam tag button, yang berfungsi untuk mencetak nama di console */}
        <button onClick = {() => {console.log('Ninja Ken')}}>Ninja Ken</button>
        
      </div>
    );
  }
}

export default App;

// react 8 bobject + state 

import React from 'react';

class App extends React.Component {
  // Nyatakan constructor dibawah
  constructor(props) {
    super(props);
    // Penerapan state
    this.state = {name: 'Ninja Ken'}
  }
  
  render() {
    return (
    	<div>
    	  <h1>Halo, Ninja Ken!</h1>
        <button onClick={() => {console.log('Guru Domba')}}>Guru Domba</button>
        <button onClick={() => {console.log('Ninja Ken')}}>Ninja Ken</button>
      </div>
    );
  }
}

export default App;

// react 9 menentukan state 

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  render() {
    return (
    	<div>
        {/* Tulis ulang bagian nama dari "Halo, Ninja Ken!" dengan menggunakan state */}
    	  <h1>Halo,{this.state.name}!</h1>
    	  
        <button onClick={() => {console.log('Guru Domba')}}>Guru Domba</button>
        <button onClick={() => {console.log('Ninja')}}>Ninja Ken</button>
      </div>
    );
  }
}

export default App;

// react 10 memperbarui state 

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  render() {
    return (
    	<div>
    	  <h1>Halo, {this.state.name}!</h1>
    	  {/* Ubah state untuk event onClick */}
        <button onClick={() => {this.handleClick({name: 'Guru Domba'})}}>Guru Domba</button>
        
        {/* Ubah state untuk event onClick */}
        <button onClick={() => {this.handleClick({name: 'Ninja Ken'})}}>Ninja Ken</button>
        
      </div>
    );
  }
}

export default App;

// react 11 handleClick

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Ninja Ken'};
  }
  
  // Nyatakan method handleClick 
  handleClick(name){
      this.setState({name: name});
  }
  
  render() {
    return (
    	<div>
    	  <h1>Hello, {this.state.name}!</h1>
    	  {/* Gantikan event onClick supaya dapat memanggil method handleClick */}
        <button onClick={() => {this.handleClick('Guru Domba')}}>Guru Domba</button>
        
    	  {/* Gantikan event onClick supaya dapat memanggil method handleClick */}
        <button onClick={() => {this.handleClick('Ninja Ken')}}>Ninja Ken</button>
        
      </div>
    );
  }
}

export default App;

// react 12 fitur counter 

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Tentukan state
    this.state = {count: 0};
    
  }
  
  render() {
    return (
      <div>
        <h1>
          {/* Tampilkan nilai state */}
          {this.state.count}
          
        </h1>
        {/* Tambahkan tag <button> */}
        <button>+</button>
        
      </div>
    );
  }
}

export default App;

// 13 aplikasi counter 

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  // Buat method handleClick
  handleClick (){
      this.setState({count: this.state.count + 1});
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        {/* tambahkan event onClick di tag <button> */}
        <button onClick={() => {this.handleClick()}}>+</button>
        
      </div>
    );
  }
}

export default App;
