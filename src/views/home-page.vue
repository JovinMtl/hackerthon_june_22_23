<template>
    <div class="homeContainer">
        <div class="titl">
            <div class="addMach">+</div>
            <div class="cateOne">
                <h2 style="font-family: Ubuntu;">Data Center: INGANZAMARUMPU</h2> 
            </div>
            <div class="cateTwo">
                <img src="/cloud-upload-outline.svg" alt=""
                    style="position: relative;height: 25px; width: 25px;
                    top: 8px;margin: 0px 25px;">
                <img src="/play-circle-outline.svg" alt=""
                    style="position: relative;height: 25px; width: 25px;
                    top: 8px;">
                <img src="/pause-circle-outline.svg" alt=""
                style="position: relative;height: 25px; width: 25px;
                top: 8px;margin: 0px 25px;">
                <img src="/power-outline.svg" alt=""
                style="position: relative;height: 25px; width: 25px;
                top: 8px;">
            </div>
        </div>
        <div class="serContainer">
            <div class="servers">
                <div class="oneServer">vm one
                </div>
            </div>
            <div class="serverDetail">
                <div class="detailText">
                    Détails du VM
                </div>
                <div class="supprVm">
                    Supprimer ce VM
                </div>
            </div>
        </div>
        <div class="bottomContainer">
            <div class="quest">
                Nouveau VM
            </div>
            <div class="nameVM">
                <input type="text" placeholder="Nom du VM"
                    style="padding: 10px; font-size: 20px; margin-right: 20px;">
                <input type="button" value="Créer"
                    style="padding: 10px; font-size: 20px; margin-right: 20px;">
            </div>
        </div>
        <div class="footer">
            NDUWIMANA, NKURUNZIZA, HAVYARIMANA, NININAHAZWE, NSANZUMUKIZA
        </div>
        
    </div>
</template>

<script >
</script>

<style scoped>
.homeContainer{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(255, 248, 248);
}
.titl{
    display: flex;
    width: 100%;
    height: 10%;
    background-color: green;
}
.addMach{
    width: 5vw;
    height: 100%;
    background-color: red;
    align-content: center;
    font-size: 50px;

}
.cateOne{
    width: 75%;
    height: 100%;
    background-color: grey;
}
.cateTwo{
    width: 20%;
    height: 100%;
    background-color: grey;
    align-content: center;
}
.serContainer{
    display: flex;
    width: 100%;
    height: 70%;
    background-color: rgb(44, 163, 44);
}
.servers{
    width: 80%;
    height: 66.3vh;
    background-color: rgba(47, 128, 153, 0.897);
    padding: 10px;
}
.oneServer{
    width: 200px;
    height: 80px;
    background-color: white;
    align-content: center;
}
.serverDetail{
    width: 20%;
    height: 70vh;
    background-color: rgb(49, 49, 49);
    color: white;
    align-content: center;
}
.bottomContainer{
    display: flex;
    width: 100%;
    height: 15%;
}
.quest{
    width: 30%;
    height: 100%;
    /* background-color: red; */
    align-content: center;
    text-align: right;
}
.nameVM{
    width: 70%;
    height: 100%;
    align-content: center;
    text-align: left;
    padding-left: 20px;
}
.footer{
    background-color: rgb(88, 87, 87);
    width: 100%;
    height: 5%;
    align-content: center;
    color: black;
    font-family:Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: .8rem;
}
</style>