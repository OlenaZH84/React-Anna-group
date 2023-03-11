import React, {useState, useEffect} from 'react'
import Button from './Button';
import DogPhoto from './DogPhoto';


export default function DogGallery() {
    const [dogPhotos,setdogPhotos]= useState([]);
    const getDogPhoto =()=> {
        console.log("Func is works!");
            fetch('https://dog.ceo/api/breeds/image/random')
            .then((response)=>response.json())
            .then((data)=>setdogPhotos([data]));
                   
        //  }
        // useEffect(()=>{
        //   getDogPhoto();
        // }, [])
    // useEffect(()=>{
    //     fetch('https://dog.ceo/api/breeds/image/random')
    //     .then((response)=>response.json())
    //     // .then((data)=>console.log(data))
    //      .then((data)=>setdogPhotos([data]));

    // },[]);
        }
    console.log(dogPhotos);
    // const doggggg=getDogPhoto();
  return (
    
    <div>
       
        <Button funcfromDogGallery={getDogPhoto}/>


    {dogPhotos.length===0 ?(<p>Get your first dog by clicking the button!</p>):
    (dogPhotos.map((item,index)=>{

        return (  <DogPhoto key={index} url={item.message}/>)
        //  return (<p>{item.message}</p>)
        //   console.log('url='+item.message);
        }))
        }
       
    </div>
  )
}
