import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {

  state={
    resName:'',
    resUrl:''
  }

 componentDidMount(){
  const url=`https://api.github.com/search/repositories?q=react&sort=start`
  axios.get(url).then((res)=>{//成功的处理
    // 得到数据
    const {name,html_url}=res.data.items[0]
   //更新状态  
    this.setState({
      resName:name,
      resUrl:html_url

    })

  }).catch((error)=>{//异常处理
    
    console.log(error)
  })
 }

  render() {
    const {resName,resUrl}=this.state
    if(!resName){
      return (
        <div>
          <h1>Loding...</h1>
        </div>
      )
    }else{

      return (
        <div>
          <h1>most is <a href={resUrl}>{resName}</a></h1>
        </div>
      )
    }
    
  }
}
