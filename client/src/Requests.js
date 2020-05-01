import axios from 'axios'

const getlists = async(token) =>  {
    let response = {}
    await axios({
        method : "GET",
        url : "http://localhost:8080/api/Lists/",
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        }
    }).then(res => response = res.data) 
    return response
}

const addlist = async (title,token) => {
    await axios({
        method : "POST",
        url : "http://localhost:8080/api/Lists/add",
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        }
    },{Title : title})
}

const getitems = async (token,listid) => {
    const response =  await axios({
        method : "GET",
        url : `http://localhost:8080/api/${listid}/items`,
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        }

    })
    return response.data
}

export { getlists,addlist,getitems} 