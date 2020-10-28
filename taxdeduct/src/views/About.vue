<template>
  <div class="about">
    <ProfileCard/>
    <!-- <ResultCard/> -->
  </div>
</template>

<script>
// import LoginCard from "@/components/LoginCard.vue";
import ProfileCard from "@/components/ProfileCard.vue";
// import ResultCard from "@/components/ResultCard.vue";
export default {
    name : 'About',
    components : {
        // LoginCard,
        ProfileCard,
        // ResultCard,
    }
}
</script>
