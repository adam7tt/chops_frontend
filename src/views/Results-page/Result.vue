<template>
    <tr>
      <td><router-link :to="{ name: 'Profile', params: { id: person.id }  }"> {{ person.name }}</router-link></td>
      <td>{{ person.department }}</td>
      <td>{{ person.university }}</td>
      <td>{{ person }}</td>
    </tr>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {},
  props: ["person"]
};
</script>

<style scoped>
</style>