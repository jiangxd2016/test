/*
 * @Author: jiangxd
 * @Date: 2021-10-28 17:15:57
 * @LastEditTime: 2021-10-29 16:59:32
 * @LastEditors: jiangxd
 * @Description:
 * @FilePath: /eurus-ui/src/packages/button/__test__/index.spec.ts
 */
import { mount } from '@vue/test-utils'
import Button from '../index'

describe('Button.vue', () => {
  test('render', () => {
    const wrapper = mount(Button, {
      props: {},
    })
    expect(wrapper.classes()).toContain('button')
  })
})
