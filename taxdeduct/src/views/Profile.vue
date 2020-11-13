<template>
  <div class="about">
    <ProfileCard/>
    <ProfileCardE/>
    <!-- <ResultCard/> -->
  </div>
</template>

<script>
// import LoginCard from "@/components/LoginCard.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ProfileCardE from "@/components/ProfileCardE.vue";
// import ResultCard from "@/components/ResultCard.vue";
export default {
    name : 'Profile',
    components : {
        // LoginCard,
        ProfileCard,
        ProfileCardE,
        // ResultCard,
    }
}
</script>
