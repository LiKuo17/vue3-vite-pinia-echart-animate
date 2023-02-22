<template>

  <div :style="{background: `url(${bg})`}" class="box">
    <div class="box-left"></div>
    <div id="china" class="box-center">
      <div >export interface ChinaTotal {
    heal: number;
    nowSevere: number;
    dead: number;
    localConfirm: number;
    confirm: number;
    nowConfirm: number;
    suspect: number;
    noInfect: number;
    noInfectH5: number;
    importedCase: number;
    showLocalConfirm: number;
    showlocalinfeciton: number;
    localConfirmH5: number;
    local_acc_confirm: number;
  }
  
  export interface ChinaAdd {
    noInfectH5: number;
    localConfirmH5: number;
    confirm: number;
    dead: number;
    suspect: number;
    noInfect: number;
    localConfirm: number;
    heal: number;
    nowConfirm: number;
    nowSevere: number;
    importedCase: number;
  }
  
  export interface ShowAddSwitch {
    suspect: boolean;
    heal: boolean;
    noInfect: boolean;
    localConfirm: boolean;
    all: boolean;
    dead: boolean;
    nowConfirm: boolean;
    nowSevere: boolean;
    importedCase: boolean;
    localinfeciton: boolean;
    confirm: boolean;
  }
  
  export interface Today {
    confirm: number;
    isUpdated: boolean;
  }
  
  export interface Total {
    showHeal: boolean;
    wzz: number;
    provinceLocalConfirm: number;
    nowConfirm: number;
    confirm: number;
    dead: number;
    showRate: boolean;
    heal: number;
  }
  
  export interface Today {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
    tip: string;
    wzz_add: number;
  }
  
  export interface Total {
    confirm: number;
    dead: number;
    showRate: boolean;
    heal: number;
    showHeal: boolean;
    wzz: number;
    provinceLocalConfirm: number;
    nowConfirm: number;
  }
  
  export interface Today {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
  }
  
  export interface Total {
    nowConfirm: number;
    confirm: number;
    dead: number;
    showRate: boolean;
    heal: number;
    showHeal: boolean;
    wzz: number;
    provinceLocalConfirm: number;
  }
  
  export interface Children {
    name: string;
    today: Today;
    total: Total;
  }
  
  export interface Children {
    name: string;
    today: Today;
    total: Total;
    children: Children[];
  }
  
  export interface AreaTree {
    name: string;
    today: Today;
    total: Total;
    children: Children[];
  }
  
  export interface Diseaseh5Shelf {
    lastUpdateTime: string;
    chinaTotal: ChinaTotal;
    chinaAdd: ChinaAdd;
    isShowAdd: boolean;
    showAddSwitch: ShowAddSwitch;
    areaTree: AreaTree[];
  }
  
  export interface StatisGradeCityDetail {
    confirmAdd: number;
    confirm: number;
    grade: string;
    syear: number;
    province: string;
    city: string;
    nowConfirm: number;
    dead: number;
    heal: number;
    date: string;
    sdate: string;
  }
  
  export interface RootObject {
    diseaseh5Shelf: Diseaseh5Shelf;
    statisGradeCityDetail: StatisGradeCityDetail[];
  }
</div>
    </div>
    <div class="box-right"></div>
  </div>

</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import bg from './assets/1.jpg'
import {useCounterStore} from './stores/counter'
import { onMounted } from 'vue';
import * as echarts from 'echarts'
import './assets/china'
const store = useCounterStore()

store.getList()

onMounted(async ()=>{
  await store.getList()
  console.log(store.list);
  
  const charts = echarts.init(document.querySelector('#china') as HTMLElement)
  var data = [
        {
          name: "内蒙古",
          itemStyle: {
            areaColor: "#56b1da",
          },
          value:[110.3467, 41.4899]
        },
      ];
      charts.setOption({
        geo: {
          map: "china",
          aspectScale: 0.8,
          layoutCenter: ["50%", "50%"],
          layoutSize: "120%",
          itemStyle: {
            // normal: {
              areaColor: {
                type: "linear-gradient",
                x: 0,
                y: 1200,
                x2: 1000,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#152E6E", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#0673AD", // 50% 处的颜色
                  },
                ],
                global: true, // 缺省为 false
              },
              shadowColor: "#0f5d9d",
              shadowOffsetX: 0,
              shadowOffsetY: 15,
              opacity: 0.5,
            // },
           
          },
          emphasis: {
              areaColor: "#0f5d9d",
            },

          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                areaColor: "rgba(0, 10, 52, 1)",
                borderColor: "rgba(0, 10, 52, 1)",
                // normal: {
                  opacity: 0,
                  label: {
                    show: false,
                    color: "#009cc9",
                  },
                // },
              },
              label: {
                show: false,
                color: "#FFFFFF",
                fontSize: 12,
              },
            },
          ],
        },
        series: [
          {
            type: "map",
            selectedMode: "multiple",
            map: "china",
            aspectScale: 0.8,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "120%",
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: {
              //滚轮缩放的极限控制
              min: 1,
              max: 2,
            },
            label: {
              show: true,
              color: "#FFFFFF",
              fontSize: 12,
            },
            itemStyle: {
              // normal: {
                areaColor: "#0c3653",
                borderColor: "#1cccff",
                borderWidth: 1.8,
              // },
             
            },
            emphasis: {
                areaColor: "#56b1da",
                label: {
                  show: true,
                  color: "#fff",
                },
              },
            data: data,
          },
          {
              symbol:'pin',
              symbolSize:[45,45],
              type: 'scatter',
              coordinateSystem: 'geo',
            //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
              // symbolSize: [30,120],
              // symbolOffset:[0, '-40%'] ,
              label: {
                  // normal: {
                      show: false,
                  // }
              },
              itemStyle: {
                  // normal: {
                      color: '#D8BC37', //标志颜色
                  // }
              },
              data: data,
         
          },
        ],
      })

})

</script>
<style lang='less'>
*{
  padding: 0;
  margin: 0;
}
html,body,#app {
  height: 100% ;
  overflow: hidden;
}


.box{
  overflow: hidden;
  height: 100%;
  display: flex;
  &-left{
    width: 400px;
  }
  &-center{
    flex: 1;
  }
  &-right{
    width: 400px;
  }
}

</style>