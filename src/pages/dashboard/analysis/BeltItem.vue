<template>
    <div class="item" :style="`transform:rotate(${rvalue}deg)`">
        <div class="text" :style="`color: ${color}`" >
            <slot></slot>{{title}}
        </div>
        <img style="width:100%" src="../../../assets/img/arrow.png" />
        <div class="belt">
            <div class="yellow-wrap">
                <div class="left-circle"></div>
                <div class="right-circle"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "BeltItem",
    props: {
        'title': String,
        'src': String,
        'rvalue': String,
        'color': {
            type: String,
            default: "black"
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.item {
    margin-left: 5px;
}

.item{
    width: 150px;
}

.text {
    font-size: 13px;
    line-height: 10px;
    width: 100%;
    text-align: center;
}

.arrow {
    width: 100%;
}

.belt {
    display: flex;
    width: 100%;
    height: 15px;
    border-radius: 7.5px;
    background: #629dd0;
    justify-content: center;
    align-items: center;
    z-index: -1;
}

.yellow-wrap{
    display: flex;
    width: 90%;
    height: 50%;
    border-radius: 6px;
    border: 1px solid #ffe59a;
    background-color: #629dd0;
    /* background-color: #629dd0; */
    justify-content:space-between;
    align-items: center;
}

.yellow-wrap div{
    height: 7.5px;
    width: 7.5px;
    border-radius: 3.75px;
    background-color: #ffe59a;
}

</style>