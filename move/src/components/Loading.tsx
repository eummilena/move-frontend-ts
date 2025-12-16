type LoadingProps = {
    overlay?: boolean
}

const Loading = ({ overlay = false }: LoadingProps) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: overlay ? '100%' : '100vh',
            width: '100%'
        }}>
            <div style={{
                border: "5px solid var(--laranja)",
                width: "2em",
                height: "2em",
                borderRadius: "50%",
                borderRightColor: "var(--cinza)",
                animation: "spin 1s infinite"
            }}>
                <style>{`@keyframes spin { to{ transform: rotate(360deg); } }`}</style>
            </div>
        </div>
    )

}

export default Loading