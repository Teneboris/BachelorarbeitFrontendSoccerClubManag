import React,{useEffect, useState} from 'react';
import axios from "axios";

function FechtData() {

    const[articles, setarticles] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response.data)
                setarticles(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
           {/* {articles.map(article => {
                return <h2 key={article.id}>{article.title}</h2>
            })}*/}
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <h2>{articles.title}</h2>
        </div>
    );
}

export default FechtData;
