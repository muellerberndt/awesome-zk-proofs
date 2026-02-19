
import { useState } from 'react';
import { JourneyMap } from './components/JourneyMap';
import { NodeData } from './data/graphData';
import { Star, Sparkles, Github, Home, Shield, FlaskConical, BookOpen } from 'lucide-react';

function App() {
    const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

    return (
        <div className="min-h-screen w-screen bg-[var(--bg-primary)] overflow-hidden flex flex-col text-[var(--text-primary)]">

            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] h-16">
                <div className="mx-auto h-full max-w-7xl px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Home */}
                        <a
                            href="https://floatingpragma.io/"
                            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors text-sm"
                        >
                            <Home className="w-4 h-4" />
                            <span className="hidden sm:inline text-xs font-medium">FP</span>
                        </a>

                        <span className="text-[var(--border-color)]">|</span>

                        {/* StarkLab CTA */}
                        <a
                            href="https://floatingpragma.io/starklab/"
                            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--accent-purple)]/50 bg-[var(--accent-purple)]/10 hover:bg-[var(--accent-purple)]/20 transition-all"
                        >
                            <Sparkles className="w-4 h-4 text-[var(--accent-purple)]" />
                            <span className="text-xs font-medium text-[var(--accent-purple)] group-hover:text-white transition-colors">
                                Try STARK Lab
                            </span>
                            <span className="hidden sm:inline text-[10px] text-[var(--text-muted)]">
                                — Interactive Tutorial
                            </span>
                        </a>

                        <span className="hidden sm:inline text-[var(--border-color)]">|</span>

                        {/* OPH cross-link */}
                        <a
                            href="https://floatingpragma.io/oph/"
                            className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                        >
                            <FlaskConical className="w-3.5 h-3.5" />
                            <span className="text-xs">OPH</span>
                        </a>

                        {/* AI Security cross-link */}
                        <a
                            href="https://floatingpragma.io/awesome-ai-security/"
                            className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-green)] transition-colors"
                        >
                            <Shield className="w-3.5 h-3.5" />
                            <span className="text-xs">AI Security</span>
                        </a>

                        {/* Selected Works cross-link */}
                        <a
                            href="https://floatingpragma.io/selected-works/"
                            className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors"
                        >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span className="text-xs">Selected Works</span>
                        </a>
                    </div>

                    {/* GitHub Star */}
                    <a
                        href="https://github.com/muellerberndt/awesome-zk-proofs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent-amber)] transition-colors text-sm"
                    >
                        <Github className="w-4 h-4" />
                        <Star className="w-3.5 h-3.5 group-hover:fill-[var(--accent-amber)] transition-all" />
                        <span className="hidden sm:inline text-xs">Star</span>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full relative overflow-y-auto">
                <JourneyMap
                    onNodeSelect={setSelectedNode}
                    selectedNodeId={selectedNode?.id || null}
                />
            </main>
        </div>
    );
}

export default App;
