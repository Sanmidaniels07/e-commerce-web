import React, { useState } from 'react'
import Categories from './Categories'

const Category = () => {
  const [data, setData] = useState(Categories);
  const filterResult=(catItem)=> {
    const result = Categories.filter((curData)=>{
      return curData.category===catItem;
    });
    setData(result)
  }
  return (
    <div>
    <h2 className="text-center text-dark"> Let's Shop</h2>
    
    <div className= "container-fluid mx-2">
    <div className= "row mt-5 mx-2">
    
    <div className= "col-md-3">
    
    <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('men')}>Men</button>
    <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult('women')}>Women</button>
    <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult('children')}>Children</button>
    <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult('black')}>Black</button>
    <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult('white')}>White</button>
    <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(Categories)}>All</button>
     
    </div>
    
    <div className="col-md-9">
    <div className="row">
    
    {data.map ((values)=> {
      
      const {id, title, price, image, category} = values; 
      
    return (
      
      <>
      
      <div className='col-md-4 mb-4' key ={id}>
    <div className="card">
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p> Price: {price}</p>
    {/* <p>category: {category}</p> */}
    <p className="card-text">Great quality <br></br>100% cotton and fitting</p>
    <button className="btn btn-dark">Buy now</button>
  </div>
</div>
    </div>
    
      </>
    )
    
    })}
    
    
    
    {/* <div className='col-md-4'>
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    
    
    <div className='col-md-4'>
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    
   
    <div className='col-md-4'>
     <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div> */}
    
    </div>
    </div>
    </div>
    
    </div>
    
    
    </div>
  )
}

export default Category