/**
 * Created by xiezongjun on 2016-12-16.
 */


interface IPageManager {
  data: {}[];
  refresh(page?: number);
  currentTarget: {};
}


enum ManagerEvents{
  CurrentTargetChange
}

interface SpiderItem {
  id: any;
  status: any;
  percent: number;
  [name: string]: any;
}

class SpiderManager implements ISpiderManager {
  getTargetsCount(): number {
    return 0;
  }

  getCurrentTargets(): SpiderItem[] {
    return [];
  }

  stop() {
  }

  setSpider(spider: ISpider) {
  }

  setThreads(num: number) {
  }

  parse(id: any, type: string = 'all') {
  }

  autoParse() {
  }

  getTargets(page?: number, limit?: number): SpiderItem[] {
    let ret: SpiderItem[] = [];
    for (let i = 0; i < 100; i++) {
      ret.push({
        id: i,
        status: 'done',
        percent: 100 - i,
        item: {
          url: "http://github.com",
          price: 100,
          size: 100,
        },

      });
    }
    return ret;
  }

  on(event: ManagerEvents, cb: (args)=>any) {

  }

  prepare() {
  }
}

interface ISpider {

}
interface ISpiderManager {
  setSpider(spider: ISpider);
  /**
   * 准备工作
   */
  prepare();

  /**
   * 获取目标。默认返回全部数据，可分页获取
   * @param limit
   * @param page
   */
  getTargets(page?: number, limit?: number): SpiderItem[];

  /**
   * 获取目标总数
   */
  getTargetsCount(): number;
  /**
   * 获取正在分析的目标
   */
  getCurrentTargets(): SpiderItem[];

  /**
   * 订阅事件
   * @param event
   * @param cb
   */
  on(event: ManagerEvents, cb: (...args)=>any);

  /**
   * 分析指定id
   * @param id
   */
  parse(id: any);

  /**
   * 分析指定id的特定类型数据
   * @param id
   * @param type
   */
  parse(id: any, type: string);
  /**
   * 自动根据列表分析目标
   */
  autoParse();

  /**
   * 停止分析
   */
  stop();

  /**
   * 设置autoParse的并发数
   * @param num
   */
  setThreads(num: number);
}


let spiderManager = new SpiderManager();
export class PageManager implements IPageManager {
  currentTarget: {} = {};
  data: {}[] = [];
  totalPage:number = 0;
  limit: number = 10;

  constructor() {
    spiderManager.on(ManagerEvents.CurrentTargetChange, (...args) => {
      //todo:
      this.currentTarget = {};
    })
  }

  // todo:change to async
  refresh(page?: number) {
    let fill = (data, start, size) => {
      for (let i = 0; i < size; i++) {
        this.data[i] = data[i];
      }
    }

    if (page) {
      let data = spiderManager.getTargets(page, this.limit)
      fill(data, page * this.limit, this.limit);
    } else {
      console.log('xxx');
      let data = spiderManager.getTargets();
      console.log(data.length);
      this.data.length = 0;
      fill(data, 0, data.length);
      console.log(this.data.length);
    }
  }
}
