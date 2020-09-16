<template>
    <div>
        <Bar/>
        <TaxCalculateCard/>
    </div>
</template>
<script>
import Bar from "../components/Bar"
import TaxCalculateCard from "../components/TaxCalculateCard"
export default {
    name : 'TaxCalculate',
    components : {
        Bar,
        TaxCalculateCard,
    }
}
</script>
