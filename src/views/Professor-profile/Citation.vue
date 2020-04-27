<template>
  <div class="main">
    <h4>Citations</h4>
    <table class="highlight">
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Title</th>
          <th>Summary</th>
          <th>URL</th>
          <th>Date Published</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(citation, index) in citations"
          :key="index"
          @click="toggleSelect(index)"
          v-bind:class="{'citation-selected':citation.selected}"
        >
          <td>
            <input type="checkbox" v-model="citation.selected" />
          </td>
          <td>{{ index + 1 }}</td>
          <td>{{ citation.title }}</td>
          <td v-if="index in summaries && id==360">
            <button class="button" value="Summary" @click="showSummary(index, citation.title)">Summary</button>
          </td>
          <td v-else>
            <button style="display:none;"></button>
          </td>
          <td>
            <a :href="citation.url" target="_blank">
              <i class="material-icons">open_in_new</i>
              <!--{{citation.url.slice(0,-10)}}-->
            </a>
          </td>
          <td>{{ citation.date_published.slice(0,10) }}</td>
        </tr>
      </tbody>
    </table>
    <modals-container />
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.js"></script>
<script>
import axios from "axios";
import Modal from "@/views/Professor-profile/Modal.vue";

export default {
  data() {
    return {
      citations: [],
      summaries: {
        5: `Unfortunately, at the present time, the only data available to test genetic divergence and illuminate the species’ deeper evolutionary history are mitochondrial sequence data; however those mitochondrial data show clear and interesting patterns that greatly inform our understanding of speciation. Our first study was with the mitochondrial Cytochrome c Oxidase I (COI) and cytochrome b (CYT-B) genes. It showed that G. texensis had much higher levels of genetic variation than did G. rubens, that the  gene  trees  showed  species  level  separation,  but  were  not  reciprocally  monophyletic,  and  that G.  rubens  appeared  closely  related  to  only  one  subset  of  the  G.  texensis  variation  [75].`,
        8: `Pulse  rates  averaging  about  80  p/s  at  25?C (Souroukis  et  al.  1992,  Walker  1998,  2000  Martinet  al. 2000).  The  pulse  rates  of the  two  species  become more  similar  at  lower  temperatures,  but  provided is  above  approximately that  the  temperature 200C,  males  can  unambiguously  be  identified  to species  by song  (Walker  1998; Gray & Cade 2000). No  morphological  means  of distinguishing  either males  or  females  has  previously  been  reported (see  Nickle  & Walker  (1975)  for  other  species  of the  southern  United  States).  Here  we  report  that most  females  of the  two  species  can  be  separated on  the  basis  of  body-size`,
        9: `In  sum,  although  in  most cases gy,zj and provide similar information about which  traits  are  more  divergent, provides  the advantage that ecological and sexual trait differentiation are directly comparable. An interesting exception is the wolf spider case, which suggests that the ecological trait is slightly more divergent compared to the sexual trait. For those taxa in which sexual signals are present in both  males  and  females,  we  derived  dimorphism  to  compute  the  differences  in  ecomates  using logical  and  sexual  traits  between  males  and  females. Similar  to  the  case  in  Table  3,  Table  4  is  not  a  formal analysis  of  whether  sexual  traits  are  more  dimorphic than  ecological  traits,  though  among  the  five  taxa  examined,  support `,
        12: `Male Song Recording and Analysis. We recorded approximately 30 seconds of calling song per male on a Sony (Tokyo) WM-D3 Professional Walkman by using an Archer electret microphone (no. 270090 PC) within a 14-cm diameter parabolic reflector. The recording temperature was noted to the nearest 1°C. Songs were then digitized at 22.05 kHz by using CANARY 1.2.4 (Cornell Laboratory of Ornithology, Ithaca, NY). We measured 50 pulse periods (the time from the start of one pulse to the start of the next pulse) for each male. Measurements were made by using the ‘‘measurement panel’’ and ‘‘data log’’ capabilities of the software. The measurement error was effectively one cursor width, so we scaled the on-screen song display to 3.94 msycm to give a measurement error approximately equivalent to measuring pulse rates to the nearest 1 pys (at 22.05 kHz sampling`,
        28: `Whereas comparative studies of speciation by sexual selection have focused on two features of sexual selection: (1) The strength of selection can be important, such as the breadth of the selection has a peak and (2) The strength of selection is related to the amount of divergence in the display trait values that are favoured by selection (Fig. 1). The key to diversiﬁcation, then, is the divergent nature of selection, rather than its strength per se. It may seem obvious that the action of selection should be characterised not only by its strength but also by how divergent it is. However, this point marks a contrast in how the action of natural and sexual selection have been compared in evolutionary research. Comparative studies of speciation by ecological selection have focused on environment differences that help capture how divergent the ecological context of selection is (Boughman 2002; Schluter 2001, 2009; Rundle & Nosil 2005; Nosil 2012), whereas comparative studies of speciation by sexual selection have sought proxies for the strength of sexual selection`,
        36: `Songs were broadcast through speakers placed under traps speciﬁcally designed for Ormia (Walker 1989). Traps were arranged in a square with 10-m sides. A replicate consisted of 4 nights of playback, not necessarily consecutive, with each song played once from each of the four speaker positions; initial speaker position was determined haphazardly. All attracted ﬂies were collected and immediately preserved in ethanol, thus each ﬂy could be counted once only. We conducted one 4-night replicate in Gainesville, Florida in August 2002 where G. rubens is the natural host, probably exclusively (Walker 1986; Walker & Wineriter 1991), three 4-night replicates in Texas during September 2002 (two in San Antonio, one in Austin) where G. texensis is the only recorded host (Cade 1975; Gray & Cade 1999), two 4-night replicates in the Santa Monica Mountains, Los Angeles County, California during September and October of 2002e2004 where G. lineaticeps is the predominant host, but other occasionally parasitic are recorded.`,
        37: `To  determine  whether  the  genealogical  structure  of  two genetic clusters within G. texensis (i.e. G. texensis I and G.  texensis  II)  is  indicative  of  ancestral  substructure,  as opposed to a single species lineage, coalescent simulations were used to evaluate the probability of observing a ratio of dwII/dwI being equal to the observed empirical ratio of the average  pairwise  distances  within  genetic  clusters  I  and  II  (see Fig. 3). Note that the deviation of the expected distribution from a general  expectation  of  1  is  because  the  test  involved  simulated genealogies where the distribution of haplotype numbers between the two genetic clusters also matched the empirical data. The  analyses  were  constrained  to  simulated genealogies  with  similar  proportions  of  haplotypes  as observed  in  the  empirical  data  (i.e.  24  haplotypes  in  the smaller  cluster),  where  the  two  genetic  clusters  were identified  using  a  root  that  corresponded  to  the  deepest coalescent time between lineages, and the larger of the two groups  was  designated  as  cluster  I `,
        38: `Interestingly, P. ‘Huachuca summer,’ the smallest-bodied species (Figure 5), tended to have the steepest allometric slopes for armament traits. Females  were parsimonious about  her  fate  at  this  time  in  this  study  system,  because  there  is  no  published comprehensive taxonomic treatment of the group, let alone a well-resolved phylogeny. Nonetheless, we think some inferences can be made, and for taxonomic expertise, we relied heavily on correspondence with the late Dr. T. J. Cohn, who had worked on the group for many decades, but unfortunately died in 2012 without publishing his extensive materials. Because of this situation, we describe below in some detail the taxa used, which include three undescribed species, one of which was unknown even to Dr. Cohn.`
      }
    };
  },
  components:{
    Modal
  },
  mounted() {
    axios
      .get("http://127.0.0.1:5000/citations/?academic_id=" + this.id)
      .then(response => {
        this.citations = response.data.results.map(obj => {
          obj.selected = false;
          return obj;
        });
      })
      .catch(error => (this.citations = error));
  },
  props: ["id", "activeCitations"],
  methods: {
    toggleSelect(index) {
      this.citations[index].selected = !this.citations[index].selected;

      this.activeCitations = this.citations
        .map(citation => {
          if (citation.selected) return citation.id;
        })
        .filter(citation => {
          return citation != undefined;
        });

      this.$emit("input", this.activeCitations);
      //console.log("toggle", index);
      //TODO update activeCitations
    },

    showSummary(index, title) {
      this.$modal.show(Modal, 
      {
        title: title,
        text: this.getSummary(index)
      },{
        draggable: true, 
        scrollable: true, 
        height: "80%"
      });
    },

    getSummary(index) {
      if (this.summaries[index]) {
        return this.summaries[index];
      } else {
        return "No summary ready yet.";
      }
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}

.citation-selected {
  background-color: #fff2ac;
  background-image: linear-gradient(to right, #ffe359 0%, #fff2ac 100%);
}

.button {
  width: 100px;
  height: 30px;
}
</style>