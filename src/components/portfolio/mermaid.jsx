import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
});

/**
 * Component.
 */
class WorkflowGraph extends React.Component {
  /**
   * lifecycle method of component.
   */
  componentDidMount() {
    mermaid.contentLoaded();
  }
  /**
   * render method.
   * @return {string}
   */
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

const WorkflowFlowchart = (props) => {
  const { graphData } = props;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <WorkflowGraph chart={graphData} />
    </div>
  );
};

export default WorkflowFlowchart;
