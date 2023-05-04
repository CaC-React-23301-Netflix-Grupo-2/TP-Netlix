import Header from '@/components/Header'
import BillboardBox from '@/components/BillboardBox'
import Footer from '@/components/Footer'
import styles from '../styles/Test.module.css'

const Test = () => {
    return (
        <div className={`${styles.test}`}>
            <Header />
            <BillboardBox />
      

            <Footer />
        </div>
    )
}

export default Test