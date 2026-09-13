'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  islandName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class IslandErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[ContextForge Island Error] in ${this.props.islandName || 'Island'}:`, error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="relative rounded-xl border border-[#521E1E] bg-[#16110F] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="flex items-center gap-3 text-[#F87171]">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-mono text-sm font-semibold">
              Interactive Island Error: {this.props.islandName || 'Widget Unavailable'}
            </span>
          </div>
          <p className="mt-2 font-sans text-xs text-[#8C827A]">
            A client-side runtime exception was safely intercepted. The rest of the page remains fully operational.
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#2A211D] bg-[#1E1714] px-3.5 py-1.5 font-mono text-xs font-medium text-[#E6E0DD] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-[#8C827A]/40 hover:bg-[#2A211D]"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reset Island</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
