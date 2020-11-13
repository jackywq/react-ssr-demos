import React, { Component } from "react";
import axios from "axios";
import { Button } from "antd";
import Router, { withRouter } from "next/router";
import { getFilmsList } from "servers/films";
import "./index.less";
export interface IProps {
  films: any[];
  router: any;
}

export interface IState {
  films: any[];
}

// getInitialProps方式
class Films extends Component<IProps> {
  // 无跨域限制, 不能在子组件里使用
  static async getInitialProps() {
    const res = await axios.get(
      "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9091390",
      {
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      }
    );
    return {
      films: res.data.data.films,
    };
  }

  render() {
    const { films = [], router } = this.props;

    return (
      <div className="films">
        <Button type="primary" onClick={() => router.push("/")}>
          返回首页
        </Button>
        <ul>
          {films.map((item) => {
            return (
              <li key={item.filmId}>
                <div>
                  <div className="name">{item.name}</div>
                  <img src={item.poster} alt="" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// componentDidMount方式
// class Films extends Component<IProps, IState> {
//   state = {
//     films: [],
//   };

//   async componentDidMount() {
//     const films = await getFilmsList();
//     this.setState({
//       films,
//     });
//   }

//   render() {
//     const { router } = this.props;
//     const { films } = this.state;

//     return (
//       <div className="films">
//         <a onClick={() => router.push("/")}>返回首页</a>
//         <ul>
//           {films.map((item) => {
//             return (
//               <li key={item.filmId}>
//                 <div>
//                   <div className="name">{item.name}</div>
//                   <img src={item.poster} alt="" />
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

export default withRouter(Films);
