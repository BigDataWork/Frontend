<template>
    <div>
        <div class="BeltOverview">

            <belt-item title="西大五1.0m皮带" id="1">
                <a-icon type="sync" style="color:green; font-size:21px" spin />
            </belt-item>

            <belt-item title="3701巷顺槽皮带" id="2">
                <a-icon type="sync" style="color:green; font-size:21px" spin />
            </belt-item>

            <div style="margin-top: 180px;margin-left:-50px">
                <belt-item title="2501巷顺槽皮带" id="3" rvalue="-90" >
                    <a-icon type="sync" style="color:green; font-size:21px" spin />
                </belt-item>
            </div>

            <div style="margin-left:-30px">
                <belt-item title="西1.6m巷顺槽皮带" id="4" color="red">
                    <a-icon type="alert" style="color:red;font-size:20px"/>
                </belt-item>
            </div>

            <div class="meicang">
                煤仓
            </div>

            <div style="margin-top: 110px">
                <belt-item title="西巷171.6皮带" id="5" rvalue="-45">
                    <a-icon type="sync" style="color:green; font-size:21px" spin />
                </belt-item>
            </div>

            <belt-item title="西1.6m皮带" id="6">
                <a-icon type="sync" style="color:green; font-size:21px" spin />
            </belt-item>

            <div style="margin-bottom: 120px;margin-left: -50px">
                <belt-item title="主斜井皮带" id="7" rvalue="-90">
                    <a-icon type="sync" style="color:green; font-size:21px" spin />
                </belt-item>
            </div>
            <div style="margin-bottom: 420px;margin-left:-100px">
                <belt-item title="101皮带" id="8" rvalue="-45" color="#FFD700">
                    <a-icon type="question-circle" style="color:#FFD700; font-size:22px" />
                </belt-item>
            </div>

            <div style="margin-bottom: 600px;margin-left:-18px">
                <belt-item title="102皮带" id="9" rvalue="-25">
                    <a-icon type="sync" style="color:green; font-size:21px" spin />
                </belt-item>
            </div>
        </div>
    </div>
</template>

<script>
import BeltItem from "./BeltItem.vue"

export default {
    name: "BeltOverview",
    props: ['title'],
    components: {BeltItem},
    data() {
        return {

        }
    },
    
}
</script>

<style scoped>
.BeltOverview {
    display: flex;
    justify-content: flex-start;
    align-items:center;
}
.meicang {
    width: 39px;
    height: 78px;
    background-color: #629dd0;
    /* color: white; */
    border-radius: 6px;
    /* font-size: 12px; */
    line-height: 78px;
    text-align: center;
    margin-top: 120px;
    margin-left: 21px;
}

</style>