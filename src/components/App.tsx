import * as React from "react";
import { hot } from "react-hot-loader";

import "./../assets/scss/App.scss";
import Diagram from "./Diagram";

interface IAppProps {
}

interface IAppState {
    graphData: any;
}

class App extends React.Component<IAppProps, IAppState> {

    constructor(props : IAppProps)
    {
        super(props);
        this.state = {
            graphData : null
        };
    }

    componentDidMount()
    {
        fetch("public/graph.json").then(response =>
        {
            response.json().then(data =>
            {
                this.setState({graphData : data});
            });
        });
    }

    public render()
    {
        const {graphData} = this.state;

        return (
            <React.Fragment>
                <div className="diagram-background">
                    {
                        graphData &&
                        <Diagram graphData={graphData}/>
                    }
                </div>
            </React.Fragment>
        );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
