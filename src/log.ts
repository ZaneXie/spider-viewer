/**
 * Created by xiezj on 2016/12/15.
 */

import debug = require('debug');
export function getLogger(name: string = "default")  {
  return debug(`spider:${name}`);
}
