<!--
 * @Author: jiangxd
 * @Date: 2021-11-01 16:08:25
 * @LastEditTime: 2021-11-03 17:16:21
 * @LastEditors: jiangxd
 * @Description:
 * @FilePath: /eurus-ui/src/packages/button/demo/demo0.vue
-->
<template>
  <EButton>default</EButton>
  <EButton type="primary">primary</EButton>
  <EButton type="info">info</EButton>
  <EButton type="warning">warning</EButton>
  <EButton type="error">error</EButton>
  <EButton type="purple">purple</EButton>
</template>
<script lang="ts">
export default {
  name: 'ButtonDemo',
  title: '基本1',
  describe: '基本用法',
}
</script>
<script setup lang="ts">
import { EButton } from 'eurus-ui'
</script>
