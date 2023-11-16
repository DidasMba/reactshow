import logo from './logo.svg';
import './App.css';



export default function Profile() {
  return (

    <div>

  <img 
   src="https://i.imgur.com/MK3eW3Am.jpg"
   alt='trey' />
    </div>
   
  );
}

export default function Gallery(){
  return (
     <section>
      <h1> AMazing scientifics</h1>
      <Profile/>
      <Profile/>
      
     </section>
  );
}
