import React, { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'neutral',
  securityLevel: 'loose',
  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
});

export default function MermaidDiagram({ chart, className = '' }) {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState('');
  const [hasError, setHasError] = useState(false);
  const rawId = useId();
  const id = `mermaid-${rawId.replace(/[^a-zA-Z0-9-]/g, '')}`;

  useEffect(() => {
    let isMounted = true;
    setHasError(false);

    if (!chart || !chart.trim()) return;

    const renderDiagram = async () => {
      try {
        // Clear previous content
        const uniqueId = `${id}-${Math.random().toString(36).substring(2, 7)}`;
        const { svg } = await mermaid.render(uniqueId, chart.trim());
        if (isMounted) {
          setSvgContent(svg);
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (isMounted) {
          setHasError(true);
        }
      }
    };

    renderDiagram();

    return () => {
      isMounted = false;
    };
  }, [chart, id]);

  if (hasError) {
    return (
      <div className={`my-4 overflow-x-auto rounded-xl border border-amber-300 bg-slate-900 p-4 font-mono text-xs text-slate-100 shadow-md ${className}`}>
        <div className="mb-2 text-xs font-semibold text-amber-400">Architecture Diagram Syntax:</div>
        <pre className="whitespace-pre-wrap">{chart}</pre>
      </div>
    );
  }

  return (
    <div className={`my-6 flex justify-center overflow-x-auto rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 ${className}`}>
      {svgContent ? (
        <div
          ref={containerRef}
          className="mermaid-svg-container w-full max-w-full flex justify-center [&>svg]:max-w-full [&>svg]:h-auto"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : (
        <div className="flex h-32 items-center justify-center text-xs font-semibold text-slate-400 animate-pulse">
          Rendering Architecture Diagram...
        </div>
      )}
    </div>
  );
}
