import { Button } from 'antd'
import styles from './index.module.less';

export default function Home() {
    return (
        <div className={styles.home}>
            <h2>Hello Next.js</h2>
            <Button>按钮</Button>
        </div>
    )
  }