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

const addlist = async (token,title) => {
    await axios({
        method : "POST",
        url : "http://localhost:8080/api/Lists/add",
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        },
        data : {"Title" : title }
    })
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

const deletelist = async (token,listname) => {
    const response =  await axios({
        method : "DELETE",
        url : `http://localhost:8080/api/Lists/delete`,
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        },
        data : {"Title" : listname }

    } )
    return response.data
}

const additem = async (token,listid,itm) => {
    const response =  await axios({
        method : "GET",
        url : `http://localhost:8080/api/${listid}/add`,
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        },
        data : {"Title" : itm.Title,
        "Description" : itm.Description}

    })
    return response.data
}


const updateItem = async (token,itm) => {
    const response =  await axios({
        method : "PATCH",
        url : `http://localhost:8080/api/${itm.ListID}/upd/${itm._id}`,
        'Access-Control-Allow-Headers': '*',
        headers : {
            'auth-token' : token
        },
        data : itm
    })
    return response.data
}



export { getlists,addlist,getitems , deletelist , additem, updateItem} 