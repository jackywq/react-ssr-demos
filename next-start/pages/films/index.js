
import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'next/router'
import './index.less'

class Films extends Component {
    // getInitialProps只能在服务端执行，无跨域限制, 不能在子组件里使用
    static async getInitialProps({ pathname, query, req }) {
        const res = await axios.get('https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9091390', {
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
        })

        console.log('生命周期方法: getInitialProps');
        return {
            films: res.data.data.films
        }
    }

    render() {
        const { films, router } = this.props;
        return (
            <div>
                <a onClick={() => router.push('/')}>返回首页</a>
                <ul>
                    {
                        films.map(item => {
                            return (
                                <li key={item.filmId}>
                                    <div>
                                        <div className="name">{item.name}</div>
                                        <img src={item.poster} alt=""/>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(Films)