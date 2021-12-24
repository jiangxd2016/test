/*
 * @Author: jiangxd
 * @Date: 2021-11-03 17:15:31
 * @LastEditTime: 2021-11-09 17:31:52
 * @LastEditors: jiangxd
 * @Description:
 * @FilePath: /eurus-ui/src/utils/index.ts
 */
import { defineComponent, DefineComponent } from 'vue'

declare type VueComponent = DefineComponent<{}, {}, any>

export const createDemoModule = (name: string, demos: VueComponent[]): any =>
  defineComponent({
    name: `${name}-demo`,
    setup() {
      return {
        demos,
      }
    },
  })
