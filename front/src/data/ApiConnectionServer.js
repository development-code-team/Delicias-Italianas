

export class ApiConnectionServer{

    // Comunicación con el backend
    postData(bodyData, endpoint){

        // Se convierte a formato Json
        var requestData = JSON.stringify(bodyData)

        // El endpoint cambia, depende de cada 1
        var peticion = fetch("http://localhost:4000/api/" + endpoint,
        {
            method: 'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: requestData

        })
        return peticion; 
    }

}