<template>
    <div id="menubar">
            <div style="width=20%">
                <h1>Product</h1>
            </div>
            <div style="width=10%">
                <h2>หน้าแรก</h2>
            </div>
            <div style="width=10%">
                <h2>คำนวณภาษี</h2>
            </div>
            <div style="width=10%">
                <h2>แนะนำการลงทุน</h2>
            </div>
    </div>
</template>

<script>
export default {
  name: 'menubar'
}
</script>

<style scoped>
    #menubar{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        width: 60%;
    }
</style>
