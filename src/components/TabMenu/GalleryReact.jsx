import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Menu from './Menu'; // Update the import path
import Paper from '@mui/material/Paper';


const GalleryReact = () => {
  const [items, setItems] = useState(Menu); // Initialize with actual data

  const filterItem = (categItem) => {
    if (categItem === 'All') {
      setItems(Menu); // Show all items
    } else {
      const updatedItems = Menu.filter((curElem) => {
        return curElem.category === categItem;
      });
      setItems(updatedItems);
    }
  }

  return (
    <>

      

      <h1 className="mt-3 text-center text-2xl font-bold">
        Northern Peak Adventure : Things to Do in Gilgit-Baltistan
      </h1>
      <hr />
      <h1 className="mt-2 mb-2 text-center text-2xl font-bold">Popular Cities in Gilgit-Baltistan</h1>

      <div className="menu-tabs container no-underline">
        <div className="menu-tabs d-flex justify-content-around">
          <button className="btn btn-warning" onClick={() => filterItem('Gilgit')}>Gilgit</button>
          <button className="btn btn-warning" onClick={() => filterItem('Skardu')}>Skardu</button>
          <button className="btn btn-warning" onClick={() => filterItem('Hunza')}>Hunza</button>
          <button className="btn btn-warning" onClick={() => filterItem('Domel')}>Domel</button>
          <button className="btn btn-warning" onClick={() => filterItem('All')}>All</button>
        </div>
      </div>

      <div className="menu-items container-fluid mt-5 ml-2 mr-2">
        <div className="row ">
          <div className="col-11 mx-auto ">
            <div className="row my-2 ml-2">
              {items.map((elem) => {
                const { id, name, image, description, price } = elem;

                return (
                  <div className="item1 col-12 col-md-3 p-2  col-lg-6 col-xl-4 my-2 mt-1 border-2 border-black w-15 mb-4" key={id}>
                    <div className="row Item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-dev ">
                        <img src={image} alt={name} className='img-fluid' />
                      </div>
                      <Paper />
                      <div className='col-12 col-md-12 col-lg-8'>
                        <div className='main-title pt-4 p-3'>
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className='menu-price-book'>
                          <div className='price-book-divide d-flex justify-content-between'>
                            <h2>Price : {price}</h2>
                            <a href="#">
                              <button className='btn btn-primary bg-black'>Visit</button>
                            </a>
                          </div>
                          <p>ncjkdnvijbfdjvbhdb njxvvinfdjb</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default GalleryReact;
