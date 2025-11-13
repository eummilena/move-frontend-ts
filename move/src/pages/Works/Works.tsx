import React, { useState } from 'react'
import Video from '../Video/Video'
import styles from './Works.module.css'
import play from '../../assets/images/play-button.svg'
import { useData } from '../../context/DataContext'
import Button from '../../components/Button'



const Works = () => {

    const { showVideo, setShowVideo } = useData();

    return (
        <section className={styles.section}>
            <div className={styles.video}>
                <Button className={styles.play} aria-label='Reproduzir vídeo' onClick={() => setShowVideo(true)}>
                    <img src={play} alt="" loading='lazy' />
                </Button>
                {showVideo && <Video />}
            </div>
            <div className={styles.desc}>
                <h2>Faça sua mudança com segurança e sem dor de cabeça.</h2>Em apenas alguns cliques você pode receber imediatamente um orçamento com preço fixo personalizado de acordo com suas necessidades.
                <p>Fazemos um esforço extra para garantir que voçê possa relaxar completamente no dia da mudança.  Já movermos mais de 8.000 apenas no ano passado.</p>
                <h4>Veja {'>'}</h4>
            </div>
        </section>
    )
}

export default Works