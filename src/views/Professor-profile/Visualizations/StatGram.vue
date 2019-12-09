<template>
<svg class='stat' :viewBox='`-${size/2} -${size/2} ${size} ${size}`'>
      <line class='stat__axis' v-for='point in spokePoints' :key="point" x1='0' y1='0' :x2='point.x' :y2='point.y'/>

      <polygon class='stat__grid' v-for="i in Array(5).keys()" :key="i"
        :points='spacedPolarPoints(Array.from({length: num},
                () =>(i+1) * size/2 / 5 - 10)
               ).map((e, i) => `${e.x} ${e.y}`).join(", ")' />

      <polygon class='stat__gon' :points='pointsToString(tweenedPoints)'/>

      <g class='stat__tooltip' v-for='(point, i) in tweenedPoints' :key="i">
        <circle class='stat__tooltip__collision' :cx='point.x' :cy='point.y' :r='Math.sqrt(size)'/>
        <text class='stat__tooltip__text' :x='point.x' :y='point.y-15'>{{ values[i] }}</text>
      </g>
</svg>
</template>

<script>
import gsap from 'gsap';
gsap.registerPlugin()

export default {
  props: {
    size: {
      type: Number,
      default: 500
    },
    stats: {
      type: Array,
      required: true
    },
    num: {
      type: Number,
      required: true
    },
    max: {
      type: Array,
      default: null
    }
  },

  data() {
    return {
      values: this.stats,
      tweenedPoints: Array.from({ length: this.num }, () => ({
        x: 0,
        y: 0
      }
      )),
      updateInterval: 0.3
    };
  },

  mounted() {
    var v = this
    setInterval(function(){
        v.values = v.values.map(
            _ => (Math.random() * 4.9 + 0.1).toPrecision(2)
        )
    }, 1400)
  },

  watch: {
    values: {
      handler: function() {
        let timeline = gsap.timeline()
        this.tweenedPoints.forEach(
            (target, idx) => timeline.to(target, {
                ease: "sine.inOut",
                duration: this.updateInterval,
                x: this.points[idx].x,
                y: this.points[idx].y
                }, `>=${this.updateInterval*Math.random()}`))
      },
      immediate: true
    }
  },

  methods: {
    spacedPolarPoints(lengths) {
      let pts = [];
      for (let i = 0; i < lengths.length; i++) {
        let angle = 2 * Math.PI * i / lengths.length + Math.PI / 2;
        pts.push({
          x: lengths[i] * Math.cos(angle),
          y: lengths[i] * Math.sin(angle)
        });
      }
      return pts;
    },
    pointsToString(value) {
      return value.map(e => `${e.x} ${e.y}`).join(", ");
    }
  },

  computed: {
    statsMax() {
      return this.max == null
        ? Array.from({ length: this.num }, () =>
            Math.max(...this.values)
          )
        : this.max;
    },
    points() {
      let lengths = this.values.map(
        (el, i) => el / this.statsMax[i] * this.size / 2
      );
      return this.spacedPolarPoints(lengths);
    },
    spokePoints() {
      let lengths = Array.from(
        { length: this.num },
        () => this.size / 2
      );
      return this.spacedPolarPoints(lengths);
    }
  }
}
</script>

<style lang="scss" scoped>
.stat {
  overflow: visible;
  background-color: none;
  max-width: 100%;
  /* border: 1px solid black; */

  &__axis {
    stroke: black;
    stroke-width: 2.5;
    stroke-linecap: round;
  }

  &__grid {
    fill: none;
    stroke: black;
    stroke-width: 1.75;
  }

  &__gon {
    fill: CadetBlue;
    stroke: DarkBlue;
    stroke-width: 2.5;
    stroke-join: round;
    opacity: 0.65;
  }

  &__tooltip {
    &__collision {
        opacity: 0;
    }

    &__collision ~ &__text {
      pointer-events: none;
      text-anchor: middle;
      font-size: 1.5rem;
      transition: opacity 250ms ease-in;
      // opacity: 0;
      opacity: 1;
    }

    &__collision:hover ~ &__text {
      opacity: 1;
    }
  }
}
</style>

