import react, { useEffect, useState } from "react";

export default function Admin() {


 
 

  return (


   < form 
    id='uploadForm' 
    action='http://localhost:5000/nails' 
    method='post' 
    encType="multipart/form-data">
      <input type="file" name="sampleFile" />
      <input type='submit' value='Upload!' />
  </form>     


   
  );
}
