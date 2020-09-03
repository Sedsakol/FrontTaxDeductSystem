<template>
    <div>
        <Bar/>
        <LoginCard/>
    </div>
</template>
<script>
import Bar from "../components/Bar"
import LoginCard from "../components/LoginCard"
export default {
    name : 'Login',
    components : {
        Bar,
        LoginCard,
    }
}
</script>
