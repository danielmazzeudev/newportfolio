'use client';

import { useEffect, useRef } from 'react';
import './Main.css';

export default function Main() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Segurança contra o erro 'possibly null'

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        // Mix de caracteres para volume: Katakana, Letras, Números e Símbolos
        const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#$+-*=%';
        const alphabet = chars.split('');

        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const rainDrops = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.04)'; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet[Math.floor(Math.random() * alphabet.length)];
                
                const isBright = Math.random() > 0.98;
                ctx.fillStyle = isBright ? '#ffffff' : '#00ffcc';
                
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        const interval = setInterval(draw, 35);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <main className="main">
            {/* Elemento de fundo: Matrix */}
            <canvas ref={canvasRef} id="dataCanvas"></canvas>

            <section className="section">
                <h1 className="name">Daniel Mazzeu</h1>
                <p className="presentation">
                    Desenvolvedor Full Stack proativo, focado em resolver desafios complexos através de tecnologia e inovação. 
                    Minha missão é evoluir constantemente para entregar experiências digitais excepcionais, 
                    unindo performance no back-end e elegância no front-end.
                </p>
            </section>

            <section className="section">
                <div className="grid">
                    <div className="card">
                        <h2 className="card-title">Front-end</h2>
                        <p className="card-text">Design, elegância, mas além de tudo responsividade e funcionalidade, precisa ser agradável e informativo.</p>
                        <div className="card-tags">
                            <span className="card-tag">Html5</span>
                            <span className="card-tag">Css3</span>
                            <span className="card-tag">Javascript</span>
                            <span className="card-tag">React.Js</span>
                            <span className="card-tag">Next.Js</span>
                            <span className="card-tag">React Native</span>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="card-title">Back-end</h2>
                        <p className="card-text">Pensamento sempre na manutenção e implementação de futuras novas funcionalidades, o código precisa ser clean.</p>
                        <div className="card-tags">
                            <span className="card-tag">Node.Js</span>
                            <span className="card-tag">Python</span>
                            <span className="card-tag">PHP</span>
                            <span className="card-tag">MySQL</span>
                            <span className="card-tag">PostgreSQL</span>
                            <span className="card-tag">SQL Server</span>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="card-title">Utilidades</h2>
                        <p className="card-text">Conhecimentos auxiliares que diferenciam um profissional dos demais no mercado atual.</p>
                        <div className="card-tags">
                            <span className="card-tag">TypeScript</span>
                            <span className="card-tag">Git / GitHub</span>
                            <span className="card-tag">Firebase</span>
                            <span className="card-tag">Vercel</span>
                            <span className="card-tag">Supabase</span>
                            <span className="card-tag">Tailwind Css</span>
                            <span className="card-tag">SEO</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}