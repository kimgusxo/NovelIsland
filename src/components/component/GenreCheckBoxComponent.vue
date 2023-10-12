<template>
    <div>
      <h2>장르별</h2>
      <div class="grid-container">
        <div v-for="item in items" :key="item.id" class="grid-item">
          <font-awesome-icon
          :icon="['fas', 'check']"
          :class="{ checked: item.checked }"
          @click="toggleCheckbox(item)"
          />
          {{ item.label }}
        </div>
      </div>
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
    methods: {
     toggleCheckbox(item) {
       item.checked = !item.checked; // 체크 상태를 토글합니다.
     },
    },
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 4x4 그리드 생성 */
    gap: 10px; /* 그리드 아이템 간의 간격 설정 */
  }
  
  .grid-item {
    border: 1px solid #ccc; /* 그리드 아이템에 테두리 추가 */
    padding: 10px;
  }

  .grid-item .checked {
  color: red; /* 체크된 상태의 색상 (예: 녹색) */
  cursor: pointer;
}

  </style>
  