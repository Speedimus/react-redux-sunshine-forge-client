import React, {Component} from 'react';
import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';

class Content extends Component {
    render() {
        return (
            <div id="content" className="content">
                {/*<ViewPage />*/}
                <CreateForm />
                {/*<EditForm space={ pass in a space obj } /> */}
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default Content;
