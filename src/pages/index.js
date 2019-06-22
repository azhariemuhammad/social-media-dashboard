import React from "react";
import {Page} from './page'
import {UserContainer} from "../containers/UserContainer";
import TabContainer from "../containers/TabContainer";



export const UserPage = props => {
    return (
        <Page>
            <div className="container">
                <div className="flex-between">
                    <TabContainer {...props} />
                    <UserContainer {...props} />
                </div>
            </div>
        </Page>
    );
};
