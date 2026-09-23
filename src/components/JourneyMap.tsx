import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { graphData, NodeData, Resource } from '../data/graphData';
import { ChevronRight, ExternalLink, KeySquare, Search, X } from 'lucide-react';

interface JourneyMapProps {
    onNodeSelect: (node: NodeData) => void;
    selectedNodeId: string | null;
}

// Sequential foundation, three parallel proof-system tracks, then applications.
const journeyStructure = {
    foundation: {
        title: 'Foundation',
        nodes: ['intro', 'math_foundations', 'proof_mechanics']
    },
    lanes: {
        snark: {
            title: 'SNARK',
            nodes: ['snark_r1cs', 'snark_systems', 'snark_tooling', 'trusted_setup']
        },
        stark: {
            title: 'STARK',
            nodes: ['stark_trace', 'stark_systems', 'stark_tooling']
        },
        bulletproofs: {
            title: 'Bulletproofs',
            nodes: ['bulletproofs']
        }
    },
    advanced: {
        title: 'Applications',
        nodes: ['advanced', 'applications', 'security_exploitation', 'media_community']
    }
};

type TrackKey = 'snark' | 'stark' | 'bulletproofs';
type AccentColor = 'green' | 'purple' | 'cyan' | 'amber' | 'orange';

const trackAccent: Record<TrackKey, AccentColor> = {
    snark: 'green',
    stark: 'purple',
    bulletproofs: 'orange',
};

const accentVar: Record<AccentColor, string> = {
    green: 'var(--accent-green)',
    purple: 'var(--accent-purple)',
    cyan: 'var(--accent-cyan)',
    amber: 'var(--accent-amber)',
    orange: 'var(--accent-orange)',
};

const washVar: Record<AccentColor, string> = {
    green: 'var(--wash-green)',
    purple: 'var(--wash-purple)',
    cyan: 'var(--wash-cyan)',
    amber: 'var(--wash-amber)',
    orange: 'var(--wash-orange)',
};

const glowClass: Record<AccentColor, string> = {
    green: 'glow-green',
    purple: 'glow-purple',
    cyan: 'glow-cyan',
    amber: 'glow-orange',
    orange: 'glow-orange',
};

// Each resource type gets its own accent so a long list stays scannable.
const typeAccent: Record<string, string> = {
    Tool: 'var(--accent-cyan)',
    Paper: 'var(--accent-purple)',
    Article: 'var(--accent-amber)',
    Book: 'var(--accent-rose)',
    Course: 'var(--accent-green)',
    Video: 'var(--accent-orange)',
    Podcast: 'var(--accent-orange)',
    Newsletter: 'var(--accent-amber)',
    Community: 'var(--accent-cyan)',
    Program: 'var(--accent-green)',
    Organization: 'var(--accent-rose)',
};

const accentFor = (type: string) => typeAccent[type] ?? 'var(--text-muted)';

const hostOf = (url: string) => {
    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch {
        return '';
    }
};

export const JourneyMap: React.FC<JourneyMapProps> = ({ onNodeSelect, selectedNodeId }) => {
    const nodeMap = useMemo(() => new Map(graphData.map(node => [node.id, node])), []);
    const [activeTrack, setActiveTrack] = useState<TrackKey>('snark');
    const [query, setQuery] = useState('');

    const totals = useMemo(() => {
        const urls = new Set<string>();
        graphData.forEach(node => node.resources.forEach(r => urls.add(r.url)));
        return { resources: urls.size, topics: graphData.length };
    }, []);

    const getNode = (id: string) => nodeMap.get(id);

    const selectedNode = selectedNodeId ? getNode(selectedNodeId) : null;

    // A link straight to a topic inside a track should also open that track,
    // otherwise the tabs disagree with the panel on the right.
    useEffect(() => {
        if (!selectedNodeId) return;
        const owner = (Object.keys(journeyStructure.lanes) as TrackKey[])
            .find(key => journeyStructure.lanes[key].nodes.includes(selectedNodeId));
        if (owner) setActiveTrack(owner);
    }, [selectedNodeId]);

    const sortedResources = useMemo(
        () => (selectedNode ? [...selectedNode.resources].sort((a, b) => b.rating - a.rating) : []),
        [selectedNode]
    );

    const needle = query.trim().toLowerCase();
    const visibleResources = useMemo(() => {
        if (!needle) return sortedResources;
        return sortedResources.filter(r =>
            `${r.title} ${r.description} ${r.type}`.toLowerCase().includes(needle)
        );
    }, [sortedResources, needle]);

    return (
        <div className="min-h-screen">

            {/* Hero */}
            <div className="border-b border-[var(--border-color)] px-5 pb-10 pt-24 sm:px-6">
                <div className="mx-auto max-w-7xl">
                    <a
                        href="https://floatingpragma.io"
                        className="label mb-4 inline-block text-[var(--text-muted)] transition-colors hover:text-[var(--accent-primary)]"
                    >
                        Floating Pragma
                    </a>
                    <h1 className="gradient-text mb-3 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl">
                        Awesome Zero-Knowledge Proofs
                    </h1>
                    <p className="max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
                        A curated learning path from the fundamentals to production proof systems.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                        <Stat value={totals.resources} label="resources" />
                        <Stat value={totals.topics} label="topics" />
                        <Stat value={3} label="tracks" />
                    </div>

                    <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[var(--text-muted)]">
                        Also on Floating Pragma:{' '}
                        <a
                            href="https://floatingpragma.io/starklab/"
                            data-track-link="hero-starklab"
                            className="font-medium text-[var(--accent-purple)] underline decoration-[var(--accent-purple)]/30 underline-offset-2 transition-colors hover:decoration-[var(--accent-purple)]"
                        >
                            STARK Lab
                        </a>
                        , a step-by-step interactive tutorial, and{' '}
                        <a
                            href="https://floatingpragma.io/oph/"
                            data-track-link="hero-oph-hub"
                            className="font-medium text-[var(--accent-cyan)] underline decoration-[var(--accent-cyan)]/30 underline-offset-2 transition-colors hover:decoration-[var(--accent-cyan)]"
                        >
                            Observer Patch Holography
                        </a>
                        , Bernhard Mueller&apos;s theory-of-everything, quantum gravity, and simulation theory hub.
                    </p>
                </div>
            </div>

            {/* Compact timeline navigation */}
            <div className="sticky top-16 z-30 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/85 px-5 py-3 backdrop-blur-xl sm:px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto">
                        {journeyStructure.foundation.nodes.map((nodeId, idx) => {
                            const node = getNode(nodeId);
                            if (!node) return null;
                            return (
                                <React.Fragment key={nodeId}>
                                    <TimelinePill
                                        label={node.title.split(' ')[0]}
                                        active={selectedNodeId === nodeId}
                                        onClick={() => onNodeSelect(node)}
                                    />
                                    {idx < journeyStructure.foundation.nodes.length - 1 && <Arrow />}
                                </React.Fragment>
                            );
                        })}

                        <Arrow />

                        <div className="flex flex-shrink-0 items-center gap-0.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-0.5">
                            {(Object.keys(journeyStructure.lanes) as TrackKey[]).map(key => (
                                <TrackButton
                                    key={key}
                                    compact
                                    active={activeTrack === key}
                                    accent={trackAccent[key]}
                                    label={journeyStructure.lanes[key].title}
                                    onClick={() => setActiveTrack(key)}
                                />
                            ))}
                        </div>

                        <Arrow />

                        {journeyStructure.advanced.nodes.slice(0, 3).map((nodeId) => {
                            const node = getNode(nodeId);
                            if (!node) return null;
                            return (
                                <TimelinePill
                                    key={nodeId}
                                    label={node.title.split(' ')[0]}
                                    active={selectedNodeId === nodeId}
                                    onClick={() => onNodeSelect(node)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Left column: topic navigation */}
                    <div className="space-y-6 lg:col-span-1">

                        <div className="space-y-1.5">
                            <SectionLabel>Foundation</SectionLabel>
                            {journeyStructure.foundation.nodes.map((nodeId, idx) => {
                                const node = getNode(nodeId);
                                if (!node) return null;
                                return (
                                    <TopicCard
                                        key={nodeId}
                                        node={node}
                                        isSelected={selectedNodeId === nodeId}
                                        onClick={() => onNodeSelect(node)}
                                        stepNumber={idx + 1}
                                    />
                                );
                            })}
                        </div>

                        <Divider>Pick a proof system</Divider>

                        <div className="flex gap-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-1">
                            {(Object.keys(journeyStructure.lanes) as TrackKey[]).map(key => (
                                <TrackButton
                                    key={key}
                                    active={activeTrack === key}
                                    accent={trackAccent[key]}
                                    label={journeyStructure.lanes[key].title}
                                    onClick={() => setActiveTrack(key)}
                                />
                            ))}
                        </div>

                        <div key={activeTrack} className="animate-fade-in space-y-1.5">
                            {journeyStructure.lanes[activeTrack].nodes.map((nodeId) => {
                                const node = getNode(nodeId);
                                if (!node) return null;
                                return (
                                    <TopicCard
                                        key={nodeId}
                                        node={node}
                                        isSelected={selectedNodeId === nodeId}
                                        onClick={() => onNodeSelect(node)}
                                        accentColor={trackAccent[activeTrack]}
                                    />
                                );
                            })}
                        </div>

                        <Divider>Then</Divider>

                        <div className="space-y-1.5">
                            <SectionLabel>Applications &amp; community</SectionLabel>
                            {journeyStructure.advanced.nodes.map((nodeId) => {
                                const node = getNode(nodeId);
                                if (!node) return null;
                                return (
                                    <TopicCard
                                        key={nodeId}
                                        node={node}
                                        isSelected={selectedNodeId === nodeId}
                                        onClick={() => onNodeSelect(node)}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Right column: resources */}
                    <div className="lg:col-span-2">
                        {selectedNode ? (
                            <div key={selectedNode.id} className="animate-slide-in space-y-6">
                                <div className="border-b border-[var(--border-color)] pb-6">
                                    <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                                        {selectedNode.title}
                                    </h2>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                                        {selectedNode.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap items-center gap-2">
                                        <Chip>{selectedNode.resources.length} resources</Chip>
                                        <Chip>{selectedNode.category}</Chip>
                                    </div>

                                    <div className="relative mt-4">
                                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
                                        <input
                                            type="search"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            placeholder={`Filter ${selectedNode.resources.length} resources…`}
                                            aria-label="Filter resources in this topic"
                                            className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] py-2 pl-9 pr-9 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none"
                                        />
                                        {query && (
                                            <button
                                                type="button"
                                                onClick={() => setQuery('')}
                                                aria-label="Clear filter"
                                                className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                                            >
                                                <X className="h-3.5 w-3.5" />
                                            </button>
                                        )}
                                    </div>
                                    {needle && (
                                        <p className="mt-2 text-xs text-[var(--text-muted)]">
                                            {visibleResources.length} of {sortedResources.length} match “{query.trim()}”
                                        </p>
                                    )}
                                </div>

                                {visibleResources.length > 0 ? (
                                    <div className="stagger-children space-y-1.5">
                                        {visibleResources.map((resource) => (
                                            <ResourceRow key={resource.url} resource={resource} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="rounded-lg border border-dashed border-[var(--border-color)] px-6 py-12 text-center">
                                        <p className="text-sm text-[var(--text-secondary)]">
                                            Nothing in this topic matches “{query.trim()}”.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setQuery('')}
                                            className="label mt-3 text-[var(--accent-primary)] hover:underline"
                                        >
                                            Clear filter
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex h-[60vh] items-center justify-center text-center">
                                <div className="max-w-xs">
                                    <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-[var(--shadow-raised)]">
                                        <KeySquare className="h-7 w-7 text-[var(--accent-primary)]" />
                                    </div>
                                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                                        Pick a topic to see its resources
                                    </p>
                                    <p className="mt-1.5 text-xs text-[var(--text-muted)]">
                                        {totals.resources} curated links across {totals.topics} topics.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ---------------------------------------------------------------- pieces */

const Arrow = () => (
    <ChevronRight className="h-4 w-4 flex-shrink-0 text-[var(--border-strong)]" aria-hidden />
);

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="label mb-2 text-[var(--text-muted)]">{children}</h3>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="rounded-md border border-[var(--border-color)] bg-[var(--bg-tertiary)] px-2 py-1 text-xs text-[var(--text-muted)]">
        {children}
    </span>
);

const Stat: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <span className="flex items-baseline gap-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1.5 shadow-[var(--shadow-card)]">
        <span className="font-mono text-sm font-bold text-[var(--text-primary)]">{value}</span>
        <span className="label text-[var(--text-muted)]">{label}</span>
    </span>
);

const Divider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-3 py-1">
        <span className="h-px flex-1 bg-[var(--border-color)]" />
        <span className="label text-[var(--text-muted)]">{children}</span>
        <span className="h-px flex-1 bg-[var(--border-color)]" />
    </div>
);

const TimelinePill: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={clsx(
            'timeline-node flex-shrink-0 rounded-md border px-3 py-1.5 text-xs font-medium',
            active
                ? 'border-[var(--accent-primary)] bg-[var(--wash-primary)] text-[var(--accent-primary)]'
                : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
        )}
    >
        {label}
    </button>
);

const TrackButton: React.FC<{
    active: boolean;
    accent: AccentColor;
    label: string;
    onClick: () => void;
    compact?: boolean;
}> = ({ active, accent, label, onClick, compact }) => (
    <button
        onClick={onClick}
        className={clsx(
            'flex items-center justify-center gap-1.5 rounded-md font-medium transition-all',
            compact ? 'px-2 py-1 text-[11px]' : 'flex-1 px-2.5 py-2 text-xs',
            active ? 'text-[var(--fg)]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
        )}
        style={{
            ['--fg' as string]: accentVar[accent],
            background: active ? washVar[accent] : 'transparent',
            boxShadow: active ? `inset 0 0 0 1px ${accentVar[accent]}` : undefined,
        }}
    >
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accentVar[accent] }} />
        {label}
    </button>
);

const ResourceRow: React.FC<{ resource: Resource }> = ({ resource }) => {
    const accent = accentFor(resource.type);
    const host = hostOf(resource.url);

    return (
        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-item group flex items-start gap-3 rounded-lg border border-transparent px-3 py-3"
        >
            <span
                aria-hidden
                className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                style={{ background: accent }}
            />
            <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                    <span
                        className="label rounded px-1.5 py-0.5"
                        style={{ color: accent, background: 'var(--bg-tertiary)' }}
                    >
                        {resource.type}
                    </span>
                    {host && <span className="font-mono text-[10px] text-[var(--text-muted)]">{host}</span>}
                </div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)]">
                    {resource.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                    {resource.description}
                </p>
            </div>
            <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--text-muted)] opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
    );
};

const TopicCard: React.FC<{
    node: NodeData;
    isSelected: boolean;
    onClick: () => void;
    accentColor?: AccentColor;
    stepNumber?: number;
}> = ({ node, isSelected, onClick, accentColor = 'green', stepNumber }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ x: 3 }}
        whileTap={{ scale: 0.985 }}
        className={clsx(
            'w-full rounded-lg border px-3.5 py-3 text-left transition-colors',
            isSelected
                ? clsx('bg-[var(--bg-secondary)]', glowClass[accentColor])
                : 'border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-[var(--shadow-card)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-tertiary)]'
        )}
        style={isSelected ? { borderColor: accentVar[accentColor] } : undefined}
    >
        <div className="flex items-center justify-between gap-2">
            {stepNumber !== undefined && (
                <span
                    className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full font-mono text-[10px] font-bold"
                    style={
                        isSelected
                            ? { background: accentVar[accentColor], color: 'var(--bg-primary)' }
                            : { background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }
                    }
                >
                    {stepNumber}
                </span>
            )}
            <h4
                className={clsx(
                    'flex-1 truncate text-sm font-medium',
                    isSelected ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                )}
            >
                {node.title}
            </h4>
            <span className="flex-shrink-0 font-mono text-[10px] text-[var(--text-muted)]">
                {node.resources.length}
            </span>
        </div>
    </motion.button>
);
