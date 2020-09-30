<template>
    <div>
        <Bar/>
        <TaxDeductCard/>
    </div>
</template>
<script>
import Bar from "../components/Bar"
import TaxDeductCard from "../components/TaxDeductCard"
export default {
    name : 'TaxDeduct',
    components : {
        Bar,
        TaxDeductCard,
    }
}
</script>