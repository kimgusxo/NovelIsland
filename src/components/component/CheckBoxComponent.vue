<template>
    <div>
      <h2>체크박스 목록</h2>
        <div v-for="item in items" :key="item.id">
          <input type="checkbox" v-model="item.checked">
          {{ item.label }}
    </div>
      <p>선택된 항목: {{ selectedItems }}</p>
    </div>
</template>
      
<script>
export default {
    data() {
     return {
        items: [
        { id: 1, label: '항목 1', checked: false },
        { id: 2, label: '항목 2', checked: false },
        { id: 3, label: '항목 3', checked: false },
        // 필요한 만큼 항목을 추가할 수 있습니다.
        ],       
     };
    },
    computed: {
     selectedItems() {
      return this.items.filter(item => item.checked).map(item => item.label);
     },
    },
};
</script>
      
<style>
  
</style>