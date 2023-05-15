import Header from '@/components/Header'
import BillboardBox from '@/components/BillboardBox'
import Footer from '@/components/Footer'
import styles from '../styles/Test.module.css'
import AccordionComp from '../components/AccordionComp'
import FormEmail from '../components/FormEmail';

const Test = () => {
    return (
        <>
        <div className={`${styles.test}`}>
            <Header />
            <BillboardBox />
                        
        </div>
        <div className={`${styles.test2}`} >
         <AccordionComp />
         <FormEmail />
        <Footer />
        </div>
        </>

    )
}

export default Test