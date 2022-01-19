import React, {useState, useEffect} from 'react';

function CounterHook() {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("this text")
    const [infos, setInfos] = useState({name:'', email:''})
    const [articles, setArticles] = useState(['Article 1', 'Article 2', 'Article 3', 'Article 4'])

    const addArticle = () =>{
        setArticles([...articles, 'Article 5'])
    }

  /*  useEffect(() => {
        console.log("useeffect is call")
        document.title
    },[count,text])*/

    useEffect(() => {
      document.title = `you have click ${count} time`
    })

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1 )} className = "btn btn-primary">ClicCounter</button>
            <h2>{text}</h2>
            <button onClick={() => setText("this is a changes Text")} className = "btn btn-danger">Change</button>
            <br/>
            <br/>
            <input type="text" className= 'form-control' value={infos.name}
                   onChange={e => setInfos({...infos, name: e.target.value})}/> <br/>
            <input type="text"  className= 'form-control' value={infos.email}
                   onChange={e => setInfos({...infos, email: e.target.value})}/>
                <h2>Name is: {infos.name}</h2>
                <h2>Email is: {infos.email}</h2>

            <br/>
            <br/>

            {articles.map(article => {
                return <h2 key={article}>{article}</h2>
            })}
            <button className='btn btn-primary' onClick={() => addArticle()}>AddArticle</button>
            <button onClick={()=> setCount(count + 1)} className="btn btn-primary" >Change Title</button>
        </div>
    );
}

export default CounterHook;
