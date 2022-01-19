import React, {useState} from 'react';
import axios from 'axios';

export default class ApiService{

    static UpdateUser(user_id, body, token) {
       /* return  axios.put(`http://127.0.0.1:8000/api/signupperson/${user_id}/`, {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            data: body
        }).then(res => {
            return console.log(res.json)
        })

*/
      // const token = 'd410d52c377991c01b2455595f4d366125485171'
        return axios({
            method: 'put',
            url: `http://127.0.0.1:8000/api/signupperson/${user_id}/`,
            Authorization:`Token ${token}`,
            data: body
        })
        axios.interceptors.response.use(function (response) {
            return response.json()
        })


        /*
                fetch(`http://127.0.0.1:8000/api/signupperson/${user_id}/`, {
                    'methode': 'PUT',
                    headers: {
                            'content-type': 'application/json',
                            'Authorization': 'd410d52c377991c01b2455595f4d366125485171'
                        },
                    body: JSON.stringify({body})
                }).then(response => {
                    return response.json()
                })*/
    }

    static  InsertUser(body, token){
        //const token = 'd410d52c377991c01b2455595f4d366125485171'
        const URL = `http://127.0.0.1:8000/api/signupperson/`
        /*return  axios.post(`http://127.0.0.1:8000/api/signupperson/`, {
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            data: {firstName:'myFinn',
                    lastName:'secondFinnnn'}
        }).then( function (res){
            return console.log(res.json)
        })*/

       return axios({
           method: 'post',
           url: 'http://127.0.0.1:8000/api/signupperson/',
           Authorization:`Token ${token}`,
           data: body,
       })
        axios.interceptors.response.use(function (response) {
            return response.json()
        })
        /*axios.interceptors.response.use(function (response) {
            return response.data
        })*/
          /*return fetch(`http://127.0.0.1:8000/api/signupperson/`, {
              'method': 'POST',
              headers: {
                      'content-type': 'application/json',
                      'Authorization': `token ${token}`
                  },
              body: JSON.stringify({body})
          }).then(response => {
              return response.json(response)
          })*/
    }

    static DeleteUser(user_id, token){
        return axios({
            method: 'delete',
            url: `http://127.0.0.1:8000/api/signupperson/${user_id}/`,
            Authorization:`Token ${token}`,
            'Content-Type': 'application/json',
        })
      /*return  axios.delete(URL +  user_id +'/', {
            headers: {
                Authorization: `Token ${token}`,
                'Content-Type': 'application/json',
            }
        });*/

     /*   return  axios.delete(URL + user_id,  {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
        })*/

  /*      return fetch(`http://127.0.0.1:8000/api/signupperson/${user_id}/`, {
            'method': 'DELETE',
            headers: {
                    'content-type': 'application/json',
                    'Authorization': 'd410d52c377991c01b2455595f4d366125485171'
                }
        })*/
    }

    static User_Login(body){

        return axios({
            method: 'post',
            url: 'http://localhost:8080/api/auth/signin',
            data: body,
        })

        axios.interceptors.response.use(function (response) {
            return response.headers['x-access-token']
        })
    }

    static RegisterUser(body){
        return axios({
            method: 'post',
            Accept: "application/json",
            url: 'http://localhost:8080/api/auth/signup',
            data: body,
        })
        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }

    static  ChangePassword(user_id, body, token){
        return axios({
            method: 'put',
            url:`http://127.0.0.1:8000/api/signupperson/${user_id}/`,
            data: body,
            Authorization:`Token ${token}`,
        })
        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }
/*
    static getAllUsers(body, id, token){
        return axios({
            method: 'get',
            url:`http://127.0.0.1:8000/api/users/${id}/`,
            data: body,
            Authorization:`Token ${token}`,
        }).then(res=>console.log(res))
            .catch(err=>console.log('Response body', err.response.data))
        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }*/

    static getAllUserID(body, token){

        return axios({
            method: 'get',
            url:`http://127.0.0.1:8000/api/users/`,
            data: body,
            Authorization:`Token ${token}`,
        })
        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }

    static CreateTraininingsplan(body){
        var token = localStorage.getItem('token');
        return axios({
            method: 'post',
            url: 'http://localhost:8080/api/training/createtraining',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            ContentType: 'application/json',
            data: body
        }).then(res=>console.log(res))
           .catch(err=>console.log('Response body', err.response.data))
    }

    static GetTraininingsplan(body, token){
        return axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/createtrainingsplan/',
            Authorization:`Token ${token}`,
            data: body,
        })
        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }

    static DeleteTrainingsplan(id){
        var token = localStorage.getItem('token');
        return axios({
            method: 'delete',
            url: `http://localhost:8080/api/auth/deletetraining/` + id,
            headers: {
                'Authorization':`Bearer ${token}`
            },
            ContentType: 'application/json',
        }).then(res=>console.log(res.data))
            .catch(err=>console.log('Response body', err.response.data))
        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }

    static PostMessage(body){
        var token = localStorage.getItem('token');
        return axios({
            method: 'post',
            url: ' http://localhost:8080/api/message/postmessage',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            ContentType: 'application/json',
            data: body
        }).then(res=>console.log(res.data))
            .catch(err=>console.log('Response body', err.response.data))

        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }

    static DeleteReceivedMessage(id, token){
        return axios({
            method: 'delete',
            url: `http://127.0.0.1:8000/api/postmessage/${id}/`,
            Authorization:`Token ${token}`,
            'Content-Type': 'application/json',
        })
        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }

    static PostFeedback(body){
        var token = localStorage.getItem('token');
        return axios({
            method: 'post',
            url: 'http://localhost:8080/api/sendresponse/postfeedback',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            ContentType: 'application/json',
            data: body
        }).then(res=>console.log(res.data))
            .catch(err=>console.log('Response body', err.response.data))

        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }

    static PostGame(body){
        var token = localStorage.getItem('token');
        return axios({
            method: 'post',
            url: 'http://localhost:8080/api/games/postgame',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            ContentType: 'application/json',
            data: body
        }).then(res=>console.log(res.data))
            .catch(err=>console.log('Response body', err.response.data))

        axios.interceptors.response.use(function (response) {
            return response.json()
        })
    }

    static GetFeedbackBySuject(id){
        var token = localStorage.getItem('token');
        return axios({
            method: 'get',
            url: 'http://localhost:8080/api/message/getfeedbackbysubject/'+id,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            ContentType: 'application/json',
            data: null,
        })
        axios.interceptors.response.use(function (response) {
            console.log(response.json())
            return response.json()
        })
    }
}
