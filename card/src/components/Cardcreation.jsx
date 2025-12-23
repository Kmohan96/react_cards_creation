import './Cardcreation.css';
import data from '../json/bikes.json';

export default function Cardcreation() {
  return (
    <>
     <div className='ultra'>
      {data.map((prod) => (
        
        <div className="main" key={prod.id}>
          <img src={`${import.meta.env.BASE_URL}${prod.image}`} alt="card" />
          <div>
            <p>{prod.description}</p>
          </div>

          <div className="price">
            <p>₹</p>
            <h1>{prod.price}</h1>
          </div>

          <div>
            <button>Add to Cart</button>
          </div>
        </div>
        
      ))}
      </div>
    </>
  );
}
