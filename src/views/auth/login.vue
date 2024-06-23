<template>
    <div class="LogContainer">
        ICi authentification
        <div class="authentif">
            <div class="username">
                <label for="input">Username</label> <br>
                <input v-model="username" type="text" style="padding: 15px 30px; 
                    border-radius: 15px;border-style: hidden;
                    background-color: rgb(28, 35, 49);">
            </div>
            <div class="username">
                <label for="input">Password</label> <br>
                <input v-model="password" type="password" style="padding: 15px 30px; 
                    border-radius: 15px; border-spacing: 5px; 
                    border-style: hidden; background-color: rgb(28, 35, 49);">
            </div>
            <div class="confirmationContainer">
            </div>
            <div @click="connect" class="enter">
                <div class="btn">se connecter</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {  ref } from 'vue'

const username = ref(null)
const password = ref(null)

const connect = async ()=>{
    const base = '//192.168.1.1:8000/api'
    const prefix = 'login/'
    
    console.log("You sent username: ", username.value, 'and password: ', password.value)

    try {
        const response = await fetch(`${base}/${prefix}`,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'usename': username.value,
                'password': password.value,
            })
            
        })
        
        if (response.ok){
            let data = await response.json()
            // redirect
        }
    } catch (error){
        console.log("somehting may not be well because :", error)
    }

}

</script>

<style scoped lang="scss">
@media screen and (max-width: 400px) {
    .LogContainer{
        background-color: white;
    }
}
@media screen and (min-width: 800px) {
    .LogContainer{
        display: flex;
        width: 100%;
        height: 100%;
        // background-color: rgba(0, 255, 0, 0.692);
        background-color: rgba(47, 128, 153, 0.897);
        // background-color: rgba(128, 128, 128, 0.397);
        position: relative;
        justify-content: center;
        align-items: center;

        .authentif{
            width: 30%;
            height: 90%;
            background-color: black;
            position: absolute;
            border-radius: 15px;
            box-shadow: 0 0 45px black;
            text-align: center;
            align-content: center;

            .username{
                margin: 10px 50px;
            }
            .confirmationContainer{
                display: flex;
                width: 100%;
                height: 40px;
                background: white;
                color: black;
                justify-content: center;
                align-items: center;

                &:hover{
                    font-weight: 800;
                }
                .one{
                    width: 50%;
                    height: 100%;
                    align-content: center;

                    &:hover{
                        // background: rgba(0, 255, 0, 0.692);
                        font-weight: 800;
                    }
                }
            }
            .enter{
                display: flex;
                width: 100%;
                height: 40px;
                margin-top: 30px;
                justify-content: center;

                .btn{
                    display: flex;
                    width: 50%;
                    height: 100%;
                    border-radius: 15px;
                    justify-content: center;
                    align-items: center;
                    // border: 1px solid white;
                    box-shadow: 0 0 5px white;
                    align-content: center;
                    background: linear-gradient(to right,black,rgb(99, 97, 97), white, gray);
                    background-clip: text;
                    -webkit-text-fill-color: transparent;

                    &:active{
                        background: rgba(255, 255, 255, 0.13);
                        
                    }
                    &:hover{
                        font-weight: 700;
                        transform: rotateX(15deg);
                    }

                }
            }
        }
    }
}
</style>