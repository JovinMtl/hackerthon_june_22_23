
import { ref } from 'vue'

export async function useLogin(username, password){

    const data = ref(null)
    const base = '//127.0.0.1:8002'
    const prefix = 'api/in/requested/'
    
    console.log("You sent username: ", username, 'and password: ', password)

    try {
        const response = await fetch(`${base}/${prefix}`,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'usename': username,
                'password': password,
            })
            
        })
        
        if (response.ok){
             data.value = await response.json()
            // redirect
        }
    } catch (error){
        console.log("somehting may not be well because :", error)
    }

    return [
        username, password, data.value
    ]
}