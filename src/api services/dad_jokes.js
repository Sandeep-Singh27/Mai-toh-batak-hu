import axios from "axios"

function dad_joke(){

    // fetch api
    return axios.get("https://api.api-ninjas.com/v1/dadjokes",{ headers:{'X-Api-Key': 'zTRCza2w2tJuu8JVKKiapA==LGM5K8v6WHY07Y48'}})
    .then((response)=>{
        console.log(response.data[0].joke)
         return response.data[0].joke
    })
    .catch((err)=>{
        console.log(err.message)
        return err.message
    })

}

export default dad_joke;