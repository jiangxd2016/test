<!--
 * @Author: jiangxd
 * @Date: 2021-11-01 16:08:25
 * @LastEditTime: 2021-11-03 17:16:21
 * @LastEditors: jiangxd
 * @Description:
 * @FilePath: /eurus-ui/src/packages/button/demo/demo0.vue
-->
<template>
  <EButton type="primary" size="sm">primary</EButton>
  <EButton type="primary" size="md">primary</EButton>
  <EButton type="primary" size="lg">primary</EButton>
  <EButton type="primary" size="xl">primary</EButton>
</template>
<script lang="ts">
export default {
  name: 'ButtonDemo',
  title: 'size',
  describe: '基本用法',
}
</script>
<script setup lang="ts">
import { EButton } from 'eurus-ui'
</script>
