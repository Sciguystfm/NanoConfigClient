import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Dropdown, Button } from "semantic-ui-react";

export class ButtonWrapper extends React.Component {
    render() {
        const ButtonExampleContentProp = () => <Button content="Click Here" />;
        return <ButtonExampleContentProp />;
    }
}
export class DropdownWrapper extends React.Component {
    render() {
        const DropdownExampleSelection = props =>
            <Dropdown
                placeholder="Options"
                selection
                options={props.options}
                onChange={props.getSelected}
            />;

        return (
            <DropdownExampleSelection
                options={this.props.options}
                getSelected={this.props.getSelected}
            />
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "Hello!"
        };
    }
    render() {
        const getSelected = (event, data) => {
            this.setState({ selected: data.value });
        };
        return (
            <div>
                <h1>
                    {this.state.selected}
                </h1>
                <DropdownWrapper
                    options={[
                        {
                            text: "Option 1",
                            value: 1
                        },
                        {
                            text: "Option 2",
                            value: 2
                        },
                        {
                            text: "Option 3",
                            value: 3
                        }
                    ]}
                    getSelected={getSelected}
                />
                <ButtonWrapper />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
