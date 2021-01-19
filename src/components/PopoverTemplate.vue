<template>
  <div>
    <b-icon id="popover-1" icon="exclamation-circle"/>
    <b-popover target="popover-1" triggers="hover" placement= "rightbottom">
        <slot>คำอธิบาย</slot>
    </b-popover>
  </div>
</template>

<script>
export default {
    name: "PopoverTemplate",
    data() {
        return{
        
        }
    }
}
</script>

<style>

</style>