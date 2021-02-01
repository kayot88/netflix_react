import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 style={{color:"white"}}>Error</h1>;
        </div>
      );
    }

    return this.props.children;
  }
}
