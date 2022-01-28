import { useState, useEffect } from "react";
import { API } from "../../../constants/api";
import UniItem from "./UniItem";

function UniList() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API);
        const json = await response.json();
        console.log(json)
        setUniversities(json);
      }
      catch(error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>An error occured: {error}</div>
  }
  let uniKey = 0;
  return (
    <>
    
    {universities.map((university) => {
      uniKey += 1
      const { name, web_pages } = university
      return <UniItem key={uniKey} name={name} web_pages={web_pages}/>
    })}
    </>
  )
}

export default UniList;