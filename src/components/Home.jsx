import React,{useContext} from "react";
import { useStore } from "../apis/Store";

const Home = () =>  {
    let {setCity, handleSubmit} = useContext(useStore);
  return (
    <article>  
      <div>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="city name...."
        onChange={e => setCity(e.target.value)}
        />
        <button>Submit</button>
      </form> 
      <section>Created By Amar_Nirbhay  #context_api</section>
    </div>
    </article>
  ); 
};

export default Home;
