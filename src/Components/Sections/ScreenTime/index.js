import React from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation
} from "react-router-dom";
import DoughnutChart from '../../Utils/Charts/PieChart';
import Modal from '../../Utils/Modal/Modal';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ScreenTimeIndex() {
    let query = useQuery();
    const Filter=query.get("filter")
    const data = useSelector(state => state);
    const ChartData =data?data.chartData:null
    const Label =[]
    const Value=[]
    var ChartTitle
    var TotalTime

    const dataFormat=()=>{
      if(ChartData){
         if(Filter==='class'){
          Label.push(`${'totalTime'} - ${ChartData['totalTime'].total} mins`)
          Value.push(Number(ChartData['totalTime'].total)-Number(ChartData['classTime'].total))
          Label.push(`${'classTime'} - ${ChartData['classTime'].total} mins`)
          Value.push(ChartData['classTime'].total)
          TotalTime=ChartData['totalTime'].total
          ChartTitle='Class Time'
        }else if(Filter==='study'){
          Label.push(`${'totalTime'} - ${ChartData['totalTime'].total} mins`)
          Value.push(Number(ChartData['totalTime'].total)-Number(ChartData['studyTime'].total))
          Label.push(`${'studyTime'} - ${ChartData['studyTime'].total} mins`)
          Value.push(ChartData['studyTime'].total)
          TotalTime=ChartData['totalTime'].total
          ChartTitle='Study Time'
        }
        else if(Filter==='free'){
          Label.push(`${'totalTime'} - ${ChartData['totalTime'].total} mins`)
          Value.push(Number(ChartData['totalTime'].total)-Number(ChartData['freeTime'].total))
          Label.push(`${'freeTime'} - ${ChartData['freeTime'].total} mins`)
          Value.push(ChartData['freeTime'].total)
          TotalTime=ChartData['totalTime'].total
          ChartTitle='Free Time'
        }else{
            Object.keys(ChartData).map(function(key) {
                if(key==='totalTime'){
                  TotalTime=ChartData[key].total
                }else{
                Label.push(`${key} - ${ChartData[key].total} mins`)
                Value.push(ChartData[key].total)
                }
            })
            ChartTitle='All Screen Time'
        }
      }
    }
    dataFormat()
    return ChartData?(
        <div className='p-2  screen-time 
        d-flex flex-column justify-content-center align-items-center'>
          <div className='d-flex justify-content-between wt-100 pl-3 pr-3'>
          <h4 className='txt-grey text-center'>{ChartTitle}</h4>
          {Filter==='all'?
            <Modal  Label={Label}
            Value={Value}/>
          :null}
          </div>
                <DoughnutChart 
                Label={Label}
                Value={Value}
                TitleValue={TotalTime}
                Title='Total Time'
                />
        </div>
    ):(
      null
    )
}
