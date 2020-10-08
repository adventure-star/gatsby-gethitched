import React, { Component } from "react";
import PropTypes from "prop-types";

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {checked : false};
    }
    render() {
        return (
            <div className="flex items-center py-2 cursor-pointer" onClick={this.stateChange}>
                <div className="w-8 h-8 border border-yellow-3">
                    <svg className={`${this.state.checked ? 'block' : 'hidden'}`}
                    version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 78.369 78.369" fill="#AAAAAA">
                        <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z"/>
                    </svg>
                </div>
                <p className="uppercase text-blue-1 font-13 pl-2 md:pl-4 font-nexabold select-none">{this.props.title}</p>
            </div>
        );
    }
    stateChange = () => {
        this.setState({checked: !this.state.checked});
    }

}
CheckBox.propTypes = {
    title: PropTypes.node.isRequired,
};
export default CheckBox;