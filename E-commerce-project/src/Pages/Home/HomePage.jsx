import axios from 'axios';
import {useState , useEffect} from 'react';
import './HomePage.css';
import { Header } from '../../components/Header.jsx';
import { ProductsGrid } from './ProductsGrid.jsx';


export function HomePage({cart , loadCart}) {

  const [products , setProducts] = useState([]);
  
    // fetch("http://localhost:3000/api/products")
    // .then((response) => {
    //   return response.json();
    // }).then((data) => {
    //   console.log(data);
    // })

    // with axios 

    useEffect(() => {
      axios.get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
      })

      


      
    }, []);// the empty array means that the useEffect will run only once when the component is mounted, and not on every re-render. This is useful for fetching data from an API when the component is first loaded.
      

  return (


    <>

      <Header cart ={cart} />

      <div className="home-page">
       <ProductsGrid loadCart = {loadCart} products={products} />
      </div>


    </>

  );
}