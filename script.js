const jokebox=document.getElementById("jokebox");


const url="https://api.api-ninjas.com/v1/jokes";


const option = {
    method: 'GET',
    headers: {
        'X-Api-Key': '7SckC8gmGCrmTaGvj+xlrA==ABfQnsmeAimmDrhq'
    }
}


async function getjoke(){
    const response = await fetch(url,option)
    const data =await response.json()
    // console.log(data);
    
    const joke=data[0].joke;
    console.log(joke); 
    jokebox.innerText=joke;
}
