<template>
    <div id="loginbar">
            <div>
                <h2>เข้าสู่ระบบ</h2>
            </div>
            <div>
                <h2>สร้างบัญชี</h2>
            </div>
    </div>
</template>

<script>
export default {
  name: 'loginbar'
}
</script>

<style scoped>
    #loginbar{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        width:20%;
    }
</style>
