import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
            Lorem ipsum dolor sit amet. Id molestiae quibusdam vel accusamus quaerat et aspernatur molestiae
             et veritatis ratione id aliquam laborum cum voluptas facilis hic dolor atque.
                
            </p>
            <Image
            src="/images/charizard.png"
            width={300}
            height={300}
            alt="Charizard"
            />
        </div>
    )
}