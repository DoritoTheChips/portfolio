import SnippetData from '@/data/SnippetData.ts'

export default [
    new SnippetData('snippet-battle-hymn', 'Battle Hymn of the Chubby', 'music', 'img/projects/project-1-icon.png',
    'A three-chord anthem I recorded between two push-up sessions.',
    `
    <div class="paragraph">
        I wrote this one after my third cup of coffee. It is loud, it is proud, and it is exactly two minutes long
        because that is how long I can sit still. Cover art shamelessly borrowed from
        <em>Optimistic Chubby</em> because it fit the vibe.
    </div>

    <div class="paragraph center">
        <audio controls preload="none">
            <source src="https://upload.wikimedia.org/wikipedia/en/4/45/ACDC_-_Back_In_Black-sample.ogg" type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
    </div>

    <div class="paragraph">
        Instruments used :
        <ul>
        <li>One guitar (electric, angry)</li>
        <li>One drum machine (confused)</li>
        <li>My own voice (regretful)</li>
        </ul>
    </div>
    `, ['project-1']),
    new SnippetData('snippet-tiny-explosion', 'tinyExplosion.ts', 'code', 'img/projects/project-2-icon.png',
    'A pocket-sized TypeScript helper for blowing up numbers into confetti.',
    `
    <div class="paragraph">
        Nothing groundbreaking here, just a helper I keep copy-pasting into every game jam project.
        It takes a positive number and returns a satisfying, non-empty array of particle descriptors.
    </div>

    <div class="paragraph">
<pre><code>export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
}

export function tinyExplosion(count: number, origin = { x: 0, y: 0 }): Particle[] {
    const particles: Particle[] = [];
    for (let i = 0; i &lt; count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        particles.push({
            x: origin.x,
            y: origin.y,
            vx: Math.cos(angle) * (1 + Math.random()),
            vy: Math.sin(angle) * (1 + Math.random()),
            life: 30 + Math.floor(Math.random() * 30),
        });
    }
    return particles;
}
</code></pre>
    </div>

    <div class="paragraph">
        <div class="notice">
            Public domain. Steal it, rename it, take credit for it, I do not mind.
        </div>
    </div>
    `, ['project-2', 'project-3']),
    new SnippetData('snippet-thirty-second-devlog', '30 Second Devlog', 'video', 'img/projects/project-3-icon.png',
    'A very short video where I explain a very short feature very slowly.',
    `
    <div class="paragraph">
        The whole devlog series is basically me pointing at the screen and going "look, it moves".
        This one is about a walking animation that took me a weekend and thirty seconds to describe.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        More episodes are eventually coming, as soon as I get bored of the current game jam.
    </div>
    `, ['project-8']),
];
