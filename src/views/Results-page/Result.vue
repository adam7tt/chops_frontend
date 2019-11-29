<template>
  <!-- <div> -->
    <tr>
        <!-- <div></div> -->
      <td>{{   person.name }}</td>
      <td>{{ person.department }}</td>
      <td>{{ person.university }}</td>
    </tr>
  <!-- </div> -->
</template>

<script>
export default {
  methods: {},
  props: ["person"]
};
</script>

<style scoped>
/* td {
  border: 2px solid black;
} */
</style>