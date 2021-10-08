import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// 子頁面區域元件
import UserOrder from './UserOrder'
import UserProfile from './UserProfile'

function UserAdminIndex(props) {
  console.log(props)

  // 網址參數對應頁面區塊元件
  // 屬性 = 網址上的task參數 props.match.params.task
  const tasks = {
    order: UserOrder,
    profile: UserProfile,
  }

  // 自訂元件需要大寫
  // 動態元件jsx標記的語法
  // 預設出現的文字元件
  // () => <>會員管理區域</>
  const Component = props.match.params.task
    ? tasks[props.match.params.task]
    : () => <>會員管理區域</>

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <ul>
              <li>
                <Link to="/admin/user/order">訂單管理</Link>
              </li>
              <li>
                <Link to="/admin/user/profile">個人資料管理</Link>
              </li>
              <li>
                <Link to="/admin/user/profile">大頭照管理</Link>
              </li>
              <li>
                <Link to="/admin/user/profile">密碼管理</Link>
              </li>
              <li>
                <Link to="/admin/user/profile">我的最愛管理</Link>
              </li>
            </ul>
          </div>
          <div class="col-sm-9">
            <h1>會員管理區</h1>
            <Component />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(UserAdminIndex)
