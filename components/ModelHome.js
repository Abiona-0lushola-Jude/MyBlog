"use client"

import { useState } from 'react'
import Models from './Models'
import Data  from "@util/DataFile"

 
 const ModelHome = () => {

  const [dataset, SetDataset] = useState(Data)
  const [error, setError] = useState(true)
  const [loading, Setloading] = useState(true)

   return (

     <div className='modelHome'>
       {dataset?.map((data=>{
        return(
          <Models key={data.id} newData={data} />
        )
       }))}
     </div>
     
   )
 }
 
 export default ModelHome
 