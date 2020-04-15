<template>
  <div class="container">
    <div class="profile">
          <ProfInfo :info="info"/>
          <Visualization :data="data"/>
      <Citation class="profile__citation" v-if="info" :id="info.id"/>
      <p>{{ new_array }} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProfInfo from '@/views/Professor-profile/Prof-info.vue';
import Visualization from '@/views/Professor-profile/Visualizations/Visualization.vue';
import Citation from '@/views/Professor-profile/Citation.vue';

  export default {
    name: 'profile',
    data(){
      return{
        info: null,
        data: null,
        dates: null,
        /* eslint-disable */
        new_array: `The degeneration of the intervertebral disc (IVD) rests on many factors, but some of the main ones are
the absence of a blood vessel supply, excessive overloading, and cycling loadings. This deterioration
may contribute to peripheral pain and neurological dysfunctions. When degeneration is severe or in
some other cases when the annulus fibrosus (AF) ruptures, fusion surgery, disc arthroplasty, and disc
discectomy have been used as clinical solutions. However, these solutions limit the range of motion,
the  material  used  does  not  reproduce  the  natural  behavior,  and  more  importantly,  it  weakens  the
overall  mechanical  response of  the  spinal  column,  which  accelerates  degeneration.  Recent  research
indicates a new focus on the composite nature of the annulus. In this paper, a mathematical model is
used  to  predict  the  mechanical  behavior  of  the  AF  based  on  its  anatomical  structure.  Previously
published experimental data of AF are correlated with the mechanistic-based predictions and found to
be in good agreement. The mathematical model shows that maximum strain occurs at the mid-to-outer
region, which is consistent with published data from animal models. The results indicate that future
motion preserving, total disc replacement devices and tissue restoration technology can be effectively
designed using composite materials for synthetic AF.


© 2017 Published by Rational Publication. All rights reserved

Keywords: composite mechanics;  intervertebral disc; annulus fibrosus; mechanical behavior of annulus;  disc
mechanics;  disc degeneration



1 Introduction

There has been active interest in the investigation of the mechanical properties of the entire intervertebral disc
(IVD) as well as each of its constituents, where the key objective is to create a new synthetic replacement in the case of
severe  degeneration.  Currently,  there  exist  three  main  surgical  intervention  solutions  to  remedy  degenerated  discs,
which includes fusion of the motion segment, disc arthroplasty, and discectomy[1]-[4]. These treatments are usually
recommended after other options such as medication, physical therapy, neuromodulation, and intradiscalelectrothermal
therapy are exhausted [5], [6]. In fusion surgery, the movement of a motion segment is constrained using bone graft
and  it  may  involve  using  screws,  plates  or  rods  to  fix  the  vertebrae  in  place[1],[5].  Fusion  surgery  is  currently
considered as the gold standard, however, associated problems such as elongated recuperation time, adjacent segment
degeneration, and pseudarthrosis have been documented [2]. On the other hand, in disc arthroplasty, the degenerated
disc  is  completely  removed  and  replaced  by  a  synthetic  structure  that  usually  consists  of  metallic  endplates  and  a
polymer  cage,  i.e.,  metal-on-polymer  device,  or  a  completely  metal  structure,  i.e.  metal-on-metal  [1],[2],[6].  As  of
2011,  in  the  United  States,  there  were  only  two  devices  that  were  approved  by  the  Food  and  Drug  Administration,
which are InMotion/Charité III from DePuy Spine and ProDisc from Synthes [2],[3]. Although, the devices are similar
in  structure,  both  are  metal-on-polymer  devices,  they  have  significant  biomechanical  differences[3].  For  instance,
Charité  devices  allow  anterior-posterior  movement  of  the  rotational  axis,  while  it  is  fixed  in  ProDisc  replacement
technology[2].

__
*Corresponding Author : Dr. George Youssef
Email Address: gyoussef@mail.sdsu.edu
Tel: +16195946649






G. Youssef et. al.

Other  prosthetics  such as nucleus pulpous,  motion preserving,  and  dynamic  stabilization  devices  are currently  under
different stages of investigation and development [2], [3].Finally in disc discectomy, surgeons remove part of the AF
due to herniation of the disc. As a result, the annulus gets sealed with synthetic material that does not reproduce the
natural behavior and increases the risk of disc degeneration [3], [4], [7]. Thus in all, the available replacement discs and
the  materials  used  to  alleviate  the  disc  degeneration  problem  do  not  reproduce  the  mechanical  and  physiological
functionality of the natural discs, which make them clinically deficient [3]-[5], [7]-[9]. Thus, it is important to explicate
the significance of the anatomical structure of natural constituents of the intervertebral disc on the mechanical behavior
in order to create the “ideal” synthetic IVD.

Despite the extensive experimental and clinical research published on this topic thus far [1]-[9], the quest for a

biologically-inspired  synthetic  disc  is  impeded  by  the  lack  of  fundamental  understanding  of  the  significance  of  the
anatomical structure and the contribution of the IVD constituents, i.e. annulus fibrosus (AF), nucleus pulposus (NP)
and endplates, to the load-bearing ability and the overall functionality of the disc. This quest is further complicated by
the  limitations  imposed  by  available  experimental  mechanics  techniques  to  separate  the  mechanical  contribution  of
each  element.  In  this  paper,  the anatomical  structure of  annulus fibrosus  is  the  focus to  understand  the  load-bearing
abilities and contribution of the annulus from the perspective of mechanics of composite materials.`
/* eslint-enable */

      }
    },
    components:{
        ProfInfo,
        Visualization,
        Citation
    },
    props: ['id'],
    methods:{

    },
    mounted () {
        axios.get('http://127.0.0.1:5000/academics/?id=' + this.id)
          .then(response => {
            this.info = response.data
          })
          .catch(error => (this.info = error))

        axios.get('http://127.0.0.1:5000/citations/wordcloud/?id=' + this.id)
          .then(response => {
            this.data = JSON.parse(response.data.result)
          })
          .catch(error => (this.data = error))

        axios.get('http://127.0.0.1:5000/citations/?academic_id=' + this.id)
          .then(response => (
            this.dates = response.data.results
            ))
          .catch(error => (this.dates = error))
    }
  }
</script>

<style lang="scss" scoped>
.profile {
    &__top {
        display: flex;
        flex-direction: row;
        padding: 0 0.75rem;
    }

    &__citation {
        padding-top: 5%;
        display: flex;
        flex-direction: column;
    }
}
</style>
