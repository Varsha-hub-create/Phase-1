import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error Boundary Caught:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong: {this.state.error ? this.state.error.message : "Unknown Error"}</h2>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
