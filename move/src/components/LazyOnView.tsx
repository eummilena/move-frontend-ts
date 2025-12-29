import { lazy, Suspense, useEffect, useRef, useState } from 'react'

type ImportFunc = () => Promise<{ default: React.ComponentType<any> }>

export default function LazyOnView({ importFunc, fallback = null }: { importFunc: ImportFunc; fallback?: React.ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [Component, setComponent] = useState<React.LazyExoticComponent<React.ComponentType<any>> | null>(null)

    useEffect(() => {
        if (!ref.current) return
        if (Component) return // already loaded
        if (typeof window === 'undefined') {
            // server: load immediately
            setComponent(lazy(importFunc))
            return
        }
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setComponent(lazy(importFunc))
                        obs.disconnect()
                    }
                })
            },
            { rootMargin: '200px' },
        )
        obs.observe(ref.current)
        return () => obs.disconnect()
    }, [importFunc, Component])

    return (
        <div ref={ref}>
            {Component ? (
                <Suspense fallback={fallback}>{/* @ts-ignore */}
                    <Component />
                </Suspense>
            ) : (
                <div aria-hidden>{fallback}</div>
            )}
        </div>
    )
}
