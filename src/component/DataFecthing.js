import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios'


 const initialState = {
      loading: true,
      article:{},
      error:''
  }
const reducer = (state, action) => {
      switch(action.type) {
          case "SUCCESS":
                return {
                    loading:false,
                    article: action.payload,
                    error:''
                }

          case "ERROR":
              return {
                  loading: false,
                  article: {},
                  error:'Error in data Fecthing'
              }
      }

}

function DataFecthing() {

    const [id, setId] = useState(1)
     useEffect(() => {
        axios.get( `https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                dispatch({type:"SUCCESS", payload:res.data})
            })
            .catch(err => {
                dispatch({type: "ERROR"})
            })
     }, [id])

    const [state, dispatch] =  useReducer(reducer, initialState)

    return (
        <div>
            <input type="text" value = {id} onChange={e => setId(e.target.value)}/>
            {state.loading ? "Loading" : state.article.body}
            {state.error ? state.error:null}

        </div>
    );
}

export default DataFecthing;
