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
            />;

        return (
            <DropdownExampleSelection
                options={this.props.options}
            />
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
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
                />
                <ButtonWrapper />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
