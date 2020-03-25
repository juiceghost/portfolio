import React, { Component } from 'react';

import Content from '../Content';
import Hero from '../Hero';

import getEasywebData from "./easyweb-api";

class Easyweb extends Component {
    state = { data: null };

    async componentDidMount() {
        var data = await getEasywebData("/routes/" + "kontakt");
        this.setState({ data });
    }
    render() {
        return (
            <div className='page'>
                <Content>
                    {!this.state.data ? <div class="spinner-grow" role="status">
                        <span class="sr-only">Loading...</span>
                    </div> : this.state.data.contents.slice(3, this.state.data.contents.length - 4)}
                </Content>
            </div>)
    }
}




export default Easyweb;

