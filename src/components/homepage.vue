<template>
    <div class="homepage-background">
    <header>
        <h3>{{ title }}</h3>

    </header>
</div>


</template>

<script>
    export default{
        data(){
            return{
                title: 'SKJAHKDJKSAJ!'
            }
        }
    }

</script>

<style scoped>
.homepage-background {
    background: url('C:\My Files\ccs\webdev1\System\vue-app\src\pictures\NIY_03551.jpg') center center/cover;
    height: 98vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.header{
    background-color: darkgray;
    padding: 10px;
    text-align: center;
    color: #fff;
}




</style>