import { useEffect, useState } from 'react';
import { JourneyMap } from './components/JourneyMap';
import { ThemeToggle } from './components/ThemeToggle';
import { NodeData, graphData } from './data/graphData';
import { Star, Sparkles, Github, Home, Shield, FlaskConical, BookOpen } from 'lucide-react';
import { installLinkTracking, trackEvent, trackPageView } from './lib/analytics';

const crossLinks = [
    { href: 'https://floatingpragma.io/awesome-ai-security/', track: 'ai-security', label: 'AI Security', Icon: Shield, accent: 'var(--accent-rose)' },
    { href: 'https://floatingpragma.io/oph/', track: 'oph-hub', label: 'OPH Hub', Icon: FlaskConical, accent: 'var(--accent-cyan)' },
    { href: 'https://floatingpragma.io/selected-works/', track: 'selected-works', label: 'Selected Works', Icon: BookOpen, accent: 'var(--accent-amber)' },
];

const nodeFromHash = (): NodeData | null => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    return id ? graphData.find(node => node.id === id) ?? null : null;
};

function App() {
    // A topic in the URL fragment makes every topic linkable and survives a reload.
    const [selectedNode, setSelectedNode] = useState<NodeData | null>(() => nodeFromHash());

    useEffect(() => {
        trackPageView('/awesome-zk-proofs/', 'Awesome Zero-Knowledge Proofs | Floating Pragma');
        return installLinkTracking('awesome_zk_proofs');
    }, []);

    useEffect(() => {
        const onHashChange = () => setSelectedNode(nodeFromHash());
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    useEffect(() => {
        const next = selectedNode ? `#${selectedNode.id}` : '';
        if (next !== window.location.hash) {
            window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${next}`);
        }
    }, [selectedNode]);

    useEffect(() => {
        if (!selectedNode) return;

        trackEvent('topic_view', {
            topic_id: selectedNode.id,
            topic_name: selectedNode.title,
            topic_category: selectedNode.category,
        });
    }, [selectedNode]);

    return (
        <div className="flex min-h-screen w-full flex-col text-[var(--text-primary)]">

            <header className="fixed left-0 top-0 z-40 h-16 w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)]/80 backdrop-blur-xl">
                <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
                    <div className="flex min-w-0 items-center gap-3">
                        <a
                            href="https://floatingpragma.io/"
                            data-track-link="fp-home"
                            className="flex items-center gap-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--accent-primary)]"
                        >
                            <Home className="h-4 w-4" />
                            <span className="label hidden sm:inline">FP</span>
                        </a>

                        <span aria-hidden className="h-4 w-px bg-[var(--border-color)]" />

                        <a
                            href="https://floatingpragma.io/starklab/"
                            data-track-link="starklab"
                            className="group flex flex-shrink-0 items-center gap-1.5 rounded-full border border-[var(--accent-purple)] px-3 py-1.5 transition-colors"
                            style={{ background: 'var(--wash-purple)' }}
                        >
                            <Sparkles className="h-3.5 w-3.5 text-[var(--accent-purple)]" />
                            <span className="text-xs font-semibold text-[var(--accent-purple)]">
                                Try STARK Lab
                            </span>
                            <span className="label hidden text-[var(--text-muted)] md:inline">Tutorial</span>
                        </a>

                        <span aria-hidden className="hidden h-4 w-px bg-[var(--border-color)] lg:block" />

                        <nav className="hidden items-center gap-1 lg:flex">
                            {crossLinks.map(({ href, track, label, Icon, accent }) => (
                                <a
                                    key={track}
                                    href={href}
                                    data-track-link={track}
                                    className="group flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-tertiary)]"
                                    style={{ ['--hover' as string]: accent }}
                                >
                                    <Icon className="h-3.5 w-3.5 transition-colors group-hover:text-[var(--hover)]" />
                                    <span className="transition-colors group-hover:text-[var(--text-primary)]">{label}</span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-shrink-0 items-center gap-2">
                        <ThemeToggle />
                        <a
                            href="https://github.com/muellerberndt/awesome-zk-proofs"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-track-link="github-star"
                            className="group flex h-8 items-center gap-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)] px-2.5 text-[var(--text-muted)] transition-colors hover:border-[var(--accent-amber)] hover:text-[var(--accent-amber)]"
                        >
                            <Github className="h-4 w-4" />
                            <Star className="h-3.5 w-3.5 transition-all group-hover:fill-[var(--accent-amber)]" />
                            <span className="label hidden sm:inline">Star</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="relative w-full flex-1">
                <JourneyMap
                    onNodeSelect={setSelectedNode}
                    selectedNodeId={selectedNode?.id || null}
                />
            </main>
        </div>
    );
}

export default App;
