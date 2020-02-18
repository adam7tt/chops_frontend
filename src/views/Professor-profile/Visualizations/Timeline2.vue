<template>
<div id="timeline">  
    <svg  :height="height" :width="width">
        <g :transform="`translate(0 ${height/2})`">

            <line class="timeline__axis" x1="0" y1="0" :x2="width" y2="0" />
            
            <line class='timeline__point-line' v-for='(d, i) in points' :key="i"
                :x1='d.x' y1='0' 
                :x2='d.x + width/15 * Math.pow(-1,i)' 
                :y2='Math.pow(-1,i) * d.y' />
        </g>  
    </svg>
</div>
</template>

<script>
export default {
    data() {
        return {
            height : 500,
            width : 900,
            points : []
        }
    },

    methods: {
        createAxisPoints() {
            let citations = [3,4,5,6,8]
            this.points = []
            let nodes = citations.length
            let step = parseFloat( (this.width - 20) / (nodes-1)).toFixed(0) -1
            for (let i = 0; i < nodes; i++) {
                this.points.push( {x:20 + step*i, y:this.height/4})
            }
        },
    },
    mounted() {
        this.createAxisPoints();
    }
}
</script>


<style lang="scss" scoped>

.timeline{

    &__axis {
    stroke: blue;
    stroke-width: 2;
    }

    &__point-line {
    stroke: black;
    stroke-width: 2;
    }
}

</style>