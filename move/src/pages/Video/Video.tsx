import { useRef } from 'react'
import VideoMove from '/video/move-video.mp4?url'
import Button from '../../components/Button'
import { useData } from '../../context/DataContext'
import styles from './Video.module.css'



const Video = () => {
    const { setShowVideo } = useData();

    const video = useRef<HTMLVideoElement>(null);

    function handleKeyDown(e: React.KeyboardEvent) {
        console.log(e);

        if (e.key === 'Escape') setShowVideo(false);
    }


    return (
        <div className={styles.div}
            role="modal"
            aria-modal="true"
            aria-labelledby="Homens trabalhando"
            onKeyDown={handleKeyDown}
        >
            <Button
                onClick={() => setShowVideo(false)}
                className="close" aria-label="Fechar vídeo">
                Fechar
            </Button>
            <figure>
                <video controls
                    className={styles.video}
                    src={VideoMove}
                    ref={video}
                    aria-label="Vídeo mostrando o processo de mudança."
                >
                    <track
                        kind='captions'
                        src='/video/move-video-pt.vtt'
                        srcLang='pt-BR'
                        label='Português (Brasil)'
                        default
                    />
                    Seu navegador não suporta o elemento de vídeo.
                    <a href="/transcripts/move-video-transcript.txt">Leia a transcrição</a>.

                </video>
                <figcaption className='sr-only'>
                    Dois homens colocando caixas na parte de trás de uma van. — duração 10 segundos.
                </figcaption>
            </figure>
        </div>
    )
}

export default Video