import React from 'react';
export default class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('Portfolio render error:', error, info); }
  render() {
    if (this.state.error) return <main className="app-error"><p>Something unexpected interrupted the page.</p><h1>Let's get you back.</h1><a href="/">Reload the portfolio ↗</a></main>;
    return this.props.children;
  }
}
