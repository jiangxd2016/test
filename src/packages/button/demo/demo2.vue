<!--
 * @Author: jiangxd
 * @Date: 2021-11-01 16:08:25
 * @LastEditTime: 2021-11-03 17:16:21
 * @LastEditors: jiangxd
 * @Description:
 * @FilePath: /eurus-ui/src/packages/button/demo/demo0.vue
-->
<template>
  <EButton type="primary" :loading="true">
    <Icon icon="mdi-light:home" #loading />
    123
  </EButton>
</template>
<script lang="ts">
import { Icon } from '@iconify/vue'

export default {
  name: 'ButtonDemo',
  title: 'size',
  describe: '基本用法',
  components: {
    Icon,
  },
}
</script>
<script setup lang="ts">
import { EButton } from 'eurus-ui'
</script>
