/**
 * Created by xiezj on 2016/12/17.
 */

import * as Vue from 'vue';
import Component from "vue-class-component/lib/index";
import {VueClass} from "vue-class-component/lib/declarations";

export function VueComponent<U extends Vue>(obj, option: Vue.ComponentOptions<U>): <V extends VueClass>(target: V) => V {
  if (obj._scopeId) {
    let k = <any> option;
    k._scopeId = obj._scopeId;
  }
  option.render = obj.render;
  option.staticRenderFns = obj.staticRenderFns;
  return Component(option);
}
